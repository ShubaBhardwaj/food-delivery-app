import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable } from "react-native";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  User,
  ShoppingBag,
  Settings,
  HelpCircle,
  LogOut,
  Edit2,
  Check,
  X,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import * as SecureStore from "expo-secure-store";

export default function ProfileDrawer() {
  const navigation = useNavigation<any>();
  const { user, updateProfile, isLoading } = useAuth();

  // Local editing states
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [address, setAddress] = useState("172 Grand St, New York, NY 10013");

  // Sync state with active Auth session
  useEffect(() => {
    if (user) {
      setFullName(user.username || "");
      setEmail(user.email || "");
    }
  }, [user]);

  // Load custom phone and address from secure storage
  useEffect(() => {
    const loadStoredProfile = async () => {
      try {
        const storedPhone = await SecureStore.getItemAsync("profile_phone");
        const storedAddress = await SecureStore.getItemAsync("profile_address");
        if (storedPhone) setPhone(storedPhone);
        if (storedAddress) setAddress(storedAddress);
      } catch (err) {
        console.warn("Failed to load profile details:", err);
      }
    };
    loadStoredProfile();
  }, []);

  const handleSave = async () => {
    if (!fullName.trim() || !email.trim()) {
      alert("Name and Email cannot be empty.");
      return;
    }

    const success = await updateProfile(fullName.trim(), email.trim());
    if (success) {
      try {
        await SecureStore.setItemAsync("profile_phone", phone.trim());
        await SecureStore.setItemAsync("profile_address", address.trim());
      } catch (err) {
        console.warn("Failed to save profile details:", err);
      }
      setIsEditing(false);
    } else {
      alert("Failed to update profile. Please try again.");
    }
  };

  const handleCancel = () => {
    // Reset states back to user context
    if (user) {
      setFullName(user.username);
      setEmail(user.email);
    }
    // Reload stored details
    const restoreStoredDetails = async () => {
      const storedPhone = await SecureStore.getItemAsync("profile_phone");
      const storedAddress = await SecureStore.getItemAsync("profile_address");
      if (storedPhone) setPhone(storedPhone);
      if (storedAddress) setAddress(storedAddress);
    };
    restoreStoredDetails();
    setIsEditing(false);
  };

  const menuActions = [
    { name: "My Order", label: "My Orders", icon: ShoppingBag, color: "#16a34a", bg: "#dcfce7" },
    { name: "Settings", label: "Settings", icon: Settings, color: "#16a34a", bg: "#dcfce7" },
    { name: "Help", label: "Help Center", icon: HelpCircle, color: "#16a34a", bg: "#dcfce7" },
    { name: "Logout", label: "Logout", icon: LogOut, color: "#dc2626", bg: "#fee2e2" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 140,
        }}
      >
        {/* PROFILE HEADER */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400",
              }}
              style={styles.avatar}
            />
          </View>

          <Text style={styles.userName} numberOfLines={1}>
            {user?.username || "Diner Fan"}
          </Text>

          <Text style={styles.userEmail} numberOfLines={1}>
            {user?.email || "guest@lokaldiners.com"}
          </Text>

          {!isEditing && (
            <Pressable
              onPress={() => setIsEditing(true)}
              style={({ pressed }) => [
                styles.editButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <Edit2 size={16} color="#fff" style={{ marginRight: 6 }} />
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </Pressable>
          )}
        </View>

        {/* PROFILE INFORMATION */}
        <Text style={styles.sectionTitle}>Profile Information</Text>

        <View style={styles.card}>
          {/* FULLNAME ROW */}
          <View style={styles.row}>
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <User size={20} color="#16a34a" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Full Name</Text>
                {isEditing ? (
                  <TextInput
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Full Name"
                    placeholderTextColor="#999"
                    style={styles.editableInput}
                  />
                ) : (
                  <Text style={styles.value}>{fullName}</Text>
                )}
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          {/* PHONE ROW */}
          <View style={styles.row}>
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <Phone size={20} color="#16a34a" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Phone Number</Text>
                {isEditing ? (
                  <TextInput
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="Phone Number"
                    placeholderTextColor="#999"
                    style={styles.editableInput}
                  />
                ) : (
                  <Text style={styles.value}>{phone}</Text>
                )}
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          {/* EMAIL ROW */}
          <View style={styles.row}>
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <Mail size={20} color="#16a34a" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Email Address</Text>
                {isEditing ? (
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email Address"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={styles.editableInput}
                  />
                ) : (
                  <Text style={styles.value}>{email}</Text>
                )}
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          {/* ADDRESS ROW */}
          <View style={styles.row}>
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <MapPin size={20} color="#16a34a" />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.label}>Delivery Address</Text>
                {isEditing ? (
                  <TextInput
                    value={address}
                    onChangeText={setAddress}
                    placeholder="Delivery Address"
                    placeholderTextColor="#999"
                    multiline
                    style={styles.editableInputMultiline}
                  />
                ) : (
                  <Text style={styles.value}>{address}</Text>
                )}
              </View>
            </View>
          </View>
        </View>

        {/* EDIT BUTTONS SHEET */}
        {isEditing && (
          <View style={styles.actionButtonsContainer}>
            <Pressable
              onPress={handleCancel}
              style={({ pressed }) => [
                styles.cancelActionBtn,
                pressed && styles.buttonPressed,
              ]}
            >
              <X size={16} color="#333" style={{ marginRight: 6 }} />
              <Text style={styles.cancelActionText}>Cancel</Text>
            </Pressable>

            <Pressable
              onPress={handleSave}
              disabled={isLoading}
              style={({ pressed }) => [
                styles.saveActionBtn,
                pressed && styles.buttonPressed,
              ]}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <>
                  <Check size={16} color="#fff" style={{ marginRight: 6 }} />
                  <Text style={styles.saveActionText}>Save Changes</Text>
                </>
              )}
            </Pressable>
          </View>
        )}

        {/* ACCOUNT DRAWER ACTIONS */}
        <Text style={styles.sectionTitle}>Account Actions</Text>

        <View style={styles.card}>
          {menuActions.map((action, idx) => {
            const Icon = action.icon;
            const isLogout = action.name === "Logout";
            
            return (
              <View key={action.name}>
                <Pressable
                  onPress={() => navigation.navigate(action.name)}
                  style={({ pressed }) => [
                    styles.rowMenu,
                    pressed && styles.rowPressed,
                  ]}
                >
                  <View style={styles.leftSection}>
                    <View style={[styles.iconBox, { backgroundColor: action.bg }]}>
                      <Icon size={20} color={action.color} />
                    </View>

                    <Text style={isLogout ? styles.logoutText : styles.menuLabel}>
                      {action.label}
                    </Text>
                  </View>

                  <ChevronRight size={18} color="#999" />
                </Pressable>
                
                {idx < menuActions.length - 1 && <View style={styles.divider} />}
              </View>
            );
          })}
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
  profileSection: {
    alignItems: "center",
    marginTop: 15,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#f3f4f6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  userName: {
    marginTop: 14,
    fontSize: 28,
    fontWeight: "800",
    color: "#000",
    letterSpacing: -0.5,
  },
  userEmail: {
    marginTop: 4,
    color: "#666",
    fontSize: 14,
    fontWeight: "500",
  },
  editButton: {
    flexDirection: "row",
    marginTop: 15,
    backgroundColor: "#111",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  editButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
  sectionTitle: {
    marginTop: 30,
    marginBottom: 12,
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#f3f4f6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  row: {
    paddingVertical: 15,
  },
  rowMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 16,
  },
  rowPressed: {
    opacity: 0.7,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#dcfce7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  label: {
    fontSize: 12,
    color: "#999",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  value: {
    marginTop: 4,
    color: "#222",
    fontSize: 15,
    fontWeight: "600",
  },
  editableInput: {
    marginTop: 4,
    fontSize: 15,
    color: "#000",
    fontWeight: "600",
    borderBottomWidth: 1,
    borderBottomColor: "#16a34a",
    paddingVertical: 4,
    width: "95%",
  },
  editableInputMultiline: {
    marginTop: 4,
    fontSize: 14,
    color: "#000",
    fontWeight: "600",
    borderBottomWidth: 1,
    borderBottomColor: "#16a34a",
    paddingVertical: 4,
    width: "95%",
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#dc2626",
  },
  divider: {
    height: 1,
    backgroundColor: "#f3f4f6",
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 15,
    gap: 10,
  },
  cancelActionBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    paddingVertical: 14,
    borderRadius: 20,
  },
  cancelActionText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
  },
  saveActionBtn: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#16a34a",
    paddingVertical: 14,
    borderRadius: 20,
  },
  saveActionText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
});