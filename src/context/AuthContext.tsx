import React, { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/auth.service";
import { tokenStore } from "../services/tokenStorage";

export interface User {
  _id: string;
  username: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  clearError: () => void;
  bypassAuth: (username: string, email: string) => Promise<void>;
  updateProfile: (username: string, email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Restore session from token storage on app startup
  useEffect(() => {
    const restoreSession = async () => {
      try {
        const storedUserJson = await tokenStore.getUserKey();
        const storedToken = await tokenStore.getAccessKey();
        
        if (storedUserJson && storedToken) {
          const parsedUser = JSON.parse(storedUserJson) as User;
          setUser(parsedUser);
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error("Failed to restore auth session:", err);
      } finally {
        setIsLoading(false);
      }
    };

    restoreSession();
  }, []);

  const clearError = () => setError(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await authService.login({ email, password });
      
      // The authService login saves to tokenStore.set(response.data.data) internally
      // Let's retrieve what was set or parse the response directly
      if (response && response.data) {
        const { user: loggedUser } = response.data;
        if (loggedUser) {
          setUser(loggedUser);
          setIsAuthenticated(true);
          setIsLoading(false);
          return true;
        }
      }
      
      // Secondary check: if structure is slightly different, let's load from store
      const storedUserJson = await tokenStore.getUserKey();
      if (storedUserJson) {
        setUser(JSON.parse(storedUserJson));
        setIsAuthenticated(true);
        setIsLoading(false);
        return true;
      }
      
      throw new Error("Invalid response format from server");
    } catch (err: any) {
      console.warn("Server login failed, error details:", err);
      const errMsg = err?.response?.data?.message || err?.message || "Login failed. Please check your credentials.";
      setError(errMsg);
      setIsLoading(false);
      return false;
    }
  };

  const register = async (username: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      await authService.register({ username, email, password });
      setIsLoading(false);
      return true;
    } catch (err: any) {
      console.warn("Server registration failed, error details:", err);
      const errMsg = err?.response?.data?.message || err?.message || "Registration failed. Email might already be taken.";
      setError(errMsg);
      setIsLoading(false);
      return false;
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await authService.logout();
    } catch (err) {
      console.warn("Server logout request failed, cleaning local storage:", err);
      await tokenStore.clear();
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  };

  const bypassAuth = async (username: string, email: string) => {
    setIsLoading(true);
    try {
      const mockUser: User = {
        _id: "mock-id-" + Math.floor(Math.random() * 100000),
        username,
        email,
        role: "user",
      };
      // Save mock session locally so it persists across refreshes
      await tokenStore.set({
        accessToken: "mock-access-token",
        refreshToken: "mock-refresh-token",
        user: mockUser,
      });
      setUser(mockUser);
      setIsAuthenticated(true);
      setError(null);
    } catch (err) {
      console.error("Failed setting bypass auth session:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (username: string, email: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const updatedUser = {
        ...(user || { _id: "guest", role: "user" }),
        username,
        email,
      };
      
      // Update session storage
      await tokenStore.set({
        accessToken: (await tokenStore.getAccessKey()) || "mock-access-token",
        refreshToken: (await tokenStore.getRefreshKey()) || "mock-refresh-token",
        user: updatedUser,
      });

      setUser(updatedUser);
      setIsLoading(false);
      return true;
    } catch (err) {
      console.error("Failed to update profile:", err);
      setIsLoading(false);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        error,
        login,
        register,
        logout,
        clearError,
        bypassAuth,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
