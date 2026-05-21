import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeft, Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react-native";
import { useAuth } from "../../context/AuthContext";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { login, bypassAuth, error, clearError } = useAuth();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isBypassVisible, setIsBypassVisible] = useState(false);

  // Pre-fill email if redirected here immediately after registration
  useEffect(() => {
    if (route.params?.registeredEmail) {
      setEmail(route.params.registeredEmail);
    }
  }, [route.params?.registeredEmail]);

  const handleLogin = async () => {
    setValidationError(null);
    clearError();
    
    if (!email.trim() || !password.trim()) {
      setValidationError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    const success = await login(email.trim(), password);
    setIsLoading(false);

    if (!success) {
      // Show bypass button in case they are offline / localhost is down
      setIsBypassVisible(true);
    }
  };

  const handleOfflineBypass = async () => {
    setValidationError(null);
    clearError();
    const cleanEmail = email.trim() || "demo@lokaldiners.com";
    await bypassAuth("LokalDiner", cleanEmail);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        {/* HEADER BACK BUTTON */}
        <View style={styles.header}>
          <Pressable
            onPress={() => {
              clearError();
              navigation.goBack();
            }}
            style={({ pressed }) => [
              styles.backButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <ArrowLeft size={22} color="#000" />
          </Pressable>
        </View>

        {/* BRIGHT TITLE BLOCK */}
        <View style={styles.titleBlock}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to pick up where you left off</Text>
        </View>

        {/* FORM FIELDS */}
        <View style={styles.formContainer}>
          {/* VALIDATION OR API ERRORS */}
          {(validationError || error) && (
            <View style={styles.errorBanner}>
              <AlertCircle size={18} color="#ef4444" />
              <Text style={styles.errorText}>{validationError || error}</Text>
            </View>
          )}

          {/* EMAIL */}
          <View style={styles.inputWrapper}>
            <Mail size={20} color="#999" style={styles.fieldIcon} />
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="#999"
              value={email}
              onChangeText={(txt) => {
                setEmail(txt);
                setValidationError(null);
              }}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* PASSWORD */}
          <View style={styles.inputWrapper}>
            <Lock size={20} color="#999" style={styles.fieldIcon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={(txt) => {
                setPassword(txt);
                setValidationError(null);
              }}
              secureTextEntry={!showPassword}
              style={[styles.input, { paddingRight: 40 }]}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              {showPassword ? <EyeOff size={18} color="#666" /> : <Eye size={18} color="#666" />}
            </Pressable>
          </View>

          {/* LOGIN ACTION BUTTON */}
          <Pressable
            onPress={handleLogin}
            disabled={isLoading}
            style={({ pressed }) => [
              styles.primaryButton,
              pressed && styles.buttonPressed,
              isLoading && styles.buttonDisabled,
            ]}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.primaryButtonText}>Login</Text>
            )}
          </Pressable>

          {/* OFFLINE BYPASS BUTTON */}
          {isBypassVisible && (
            <Pressable
              onPress={handleOfflineBypass}
              style={({ pressed }) => [
                styles.bypassButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.bypassButtonText}>Bypass & Login Offline (Demo Mode)</Text>
            </Pressable>
          )}
        </View>

        {/* ACCOUNT CREATION REDIRECT */}
        <View style={styles.registerRow}>
          <Text style={styles.registerLabel}>Don't have an account? </Text>
          <Pressable
            onPress={() => {
              clearError();
              navigation.navigate("Register");
            }}
            style={({ pressed }) => [
              pressed && styles.linkPressed,
            ]}
          >
            <Text style={styles.registerLink}>Sign Up</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 25,
    paddingBottom: 40,
    justifyContent: "space-between",
  },
  header: {
    paddingTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
  },
  titleBlock: {
    marginTop: 35,
    marginBottom: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#111",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 6,
    fontWeight: "500",
  },
  formContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
  errorBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fef2f2",
    borderWidth: 1,
    borderColor: "#fee2e2",
    borderRadius: 16,
    padding: 12,
    marginBottom: 20,
    gap: 8,
  },
  errorText: {
    flex: 1,
    color: "#ef4444",
    fontSize: 13,
    fontWeight: "600",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    height: 60,
    position: "relative",
  },
  fieldIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#000",
    fontWeight: "500",
    height: "100%",
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    height: "100%",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#111",
    paddingVertical: 18,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  buttonDisabled: {
    backgroundColor: "#666",
    opacity: 0.7,
  },
  bypassButton: {
    marginTop: 16,
    borderWidth: 1.5,
    borderColor: "#ef4444",
    paddingVertical: 14,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  bypassButtonText: {
    color: "#ef4444",
    fontSize: 13,
    fontWeight: "700",
  },
  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  registerLabel: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  registerLink: {
    fontSize: 14,
    color: "#111",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  linkPressed: {
    opacity: 0.6,
  },
});
