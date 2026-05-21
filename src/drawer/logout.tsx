import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LogOut, X } from "lucide-react-native";
import { useAuth } from "../context/AuthContext";

const { width } = Dimensions.get("window");

export default function LogoutScreen() {
  const navigation = useNavigation<any>();
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header Row */}
      {/* <View style={styles.header}>
        <Pressable
          onPress={handleCancel}
          style={({ pressed }) => [
            styles.closeButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <X size={20} color="#000" />
        </Pressable>
      </View> */}

      {/* Logout Dialogue Card */}
      <View style={styles.dialogCard}>
        <View style={styles.iconContainer}>
          <LogOut size={36} color="#dc2626" />
        </View>

        <Text style={styles.title}>Confirm Sign Out</Text>
        
        <Text style={styles.subtitle}>
          Hey {user?.username || "Diner"}, are you sure you want to sign out? You will need to log in again to explore or order your favorite food.
        </Text>

        {/* Buttons */}
        <View style={styles.buttonGroup}>
          {/* Cancel button */}
          <Pressable
            onPress={handleCancel}
            style={({ pressed }) => [
              styles.cancelButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>

          {/* Confirm logout button */}
          <Pressable
            onPress={handleLogout}
            style={({ pressed }) => [
              styles.confirmButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.confirmButtonText}>Sign Out</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
  header: {
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  closeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
  },
  dialogCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#fef2f2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    shadowColor: "#dc2626",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#111",
    textAlign: "center",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
    marginTop: 12,
    lineHeight: 24,
    fontWeight: "500",
    marginBottom: 35,
  },
  buttonGroup: {
    width: "100%",
    gap: 12,
  },
  cancelButton: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#111",
    fontSize: 16,
    fontWeight: "700",
  },
  confirmButton: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
    backgroundColor: "#dc2626",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#dc2626",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 3,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});