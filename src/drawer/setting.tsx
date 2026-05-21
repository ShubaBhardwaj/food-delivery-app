import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable } from "react-native";
import {
  ArrowLeft,
  UtensilsCrossed,
  Moon,
  CreditCard,
  ChevronRight,
  ShieldCheck,
  BellRing,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export default function SettingScreen() {
  const navigation = useNavigation<any>();
  
  const [isVegOnly, setIsVegOnly] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>
        {/* PREFERENCES SECTION */}
        <Text style={styles.sectionTitle}>Dietary & Styling Preferences</Text>
        
        <View style={styles.card}>
          {/* FOOD PREF */}
          <View style={styles.row}>
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <UtensilsCrossed size={20} color="#16a34a" />
              </View>

              <View>
                <Text style={styles.label}>Food Preference</Text>
                <Text style={styles.value}>
                  {isVegOnly ? "Veg Only Mode" : "Veg / Non-Veg (Default)"}
                </Text>
              </View>
            </View>

            <Switch
              value={isVegOnly}
              onValueChange={setIsVegOnly}
              trackColor={{
                false: "#d1d5db",
                true: "#16a34a",
              }}
              thumbColor={isVegOnly ? "#fff" : "#f4f4f4"}
            />
          </View>

          <View style={styles.divider} />

          {/* APPEARANCE */}
          <View style={styles.row}>
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <Moon size={20} color="#16a34a" />
              </View>

              <View>
                <Text style={styles.label}>Appearance</Text>
                <Text style={styles.value}>
                  {isDarkMode ? "Dark Mode Theme" : "Light Mode Theme"}
                </Text>
              </View>
            </View>

            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              trackColor={{
                false: "#d1d5db",
                true: "#16a34a",
              }}
              thumbColor={isDarkMode ? "#fff" : "#f4f4f4"}
            />
          </View>

          <View style={styles.divider} />

          {/* PAYMENT OPTIONS */}
          <Pressable
            style={({ pressed }) => [
              styles.rowMenu,
              pressed && styles.rowPressed,
            ]}
          >
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <CreditCard size={20} color="#16a34a" />
              </View>

              <View>
                <Text style={styles.label}>Payment Methods</Text>
                <Text style={styles.value}>2 Cards Added</Text>
              </View>
            </View>

            <ChevronRight size={18} color="#999" />
          </Pressable>
        </View>

        {/* GENERAL SETTINGS */}
        <Text style={styles.sectionTitle}>App Configurations</Text>

        <View style={styles.card}>
          {/* PUSH NOTIFICATIONS */}
          <View style={styles.row}>
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <BellRing size={20} color="#16a34a" />
              </View>

              <View>
                <Text style={styles.label}>Push Notifications</Text>
                <Text style={styles.value}>Enable order updates & promotions</Text>
              </View>
            </View>

            <Switch
              value={pushNotifications}
              onValueChange={setPushNotifications}
              trackColor={{
                false: "#d1d5db",
                true: "#16a34a",
              }}
              thumbColor={pushNotifications ? "#fff" : "#f4f4f4"}
            />
          </View>

          <View style={styles.divider} />

          {/* PRIVACY POLICY */}
          <Pressable
            style={({ pressed }) => [
              styles.rowMenu,
              pressed && styles.rowPressed,
            ]}
          >
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <ShieldCheck size={20} color="#16a34a" />
              </View>

              <View>
                <Text style={styles.label}>Privacy & Security</Text>
                <Text style={styles.value}>Manage your shared data permissions</Text>
              </View>
            </View>

            <ChevronRight size={18} color="#999" />
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111",
  },
  sectionTitle: {
    marginTop: 25,
    marginBottom: 12,
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: "700",
    color: "#666",
    textTransform: "uppercase",
    letterSpacing: 0.5,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
  },
  rowMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
  },
  rowPressed: {
    opacity: 0.75,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },
  value: {
    marginTop: 3,
    color: "#777",
    fontSize: 13,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#f3f4f6",
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});