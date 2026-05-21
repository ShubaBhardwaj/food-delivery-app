import React, { useState } from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Switch,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  Bell,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CreditCard,
  Moon,
  UtensilsCrossed,
  ShoppingBag,
  Heart,
  Settings,
  LogOut,
} from "lucide-react-native";
import { useNavigation } from '@react-navigation/native';

const ProfileDrawer = () => {
  const navigation = useNavigation();
  const [isVegOnly, setIsVegOnly] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        {/* TOP BAR */}
        <View style={styles.topBar}>
          <View />



          <TouchableOpacity
            style={styles.notificationButton}
          >
            <Bell size={22} color="#000" />

            <View style={styles.redDot} />
          </TouchableOpacity>
        </View>

        {/* PROFILE */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: "https://i.pravatar.cc/300",
              }}
              style={styles.avatar}
            />
          </View>

          <Text style={styles.userName}>
            Coffeestories
          </Text>

          <Text style={styles.email}>
            mark.brock@icloud.com
          </Text>

          <TouchableOpacity
            style={styles.editButton}
          >
            <Text style={styles.editButtonText}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        {/* PROFILE INFORMATION */}
        <Text style={styles.sectionTitle}>
          Profile Information
        </Text>

        <View style={styles.card}>
          {/* PHONE */}
          <TouchableOpacity
            style={styles.row}
          >
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <Phone
                  size={20}
                  color="#16a34a"
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Phone Number
                </Text>

                <Text style={styles.value}>
                  +1 (555) 123-4567
                </Text>
              </View>
            </View>

            <ChevronRight
              size={20}
              color="#999"
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* EMAIL */}
          <TouchableOpacity
            style={styles.row}
          >
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <Mail
                  size={20}
                  color="#16a34a"
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Email Address
                </Text>

                <Text style={styles.value}>
                  mark.brock@icloud.com
                </Text>
              </View>
            </View>

            <ChevronRight
              size={20}
              color="#999"
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* ADDRESS */}
          <TouchableOpacity
            style={styles.row}
          >
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <MapPin
                  size={20}
                  color="#16a34a"
                />
              </View>

              <View style={{ width: 220 }}>
                <Text style={styles.label}>
                  Delivery Address
                </Text>

                <Text style={styles.value}>
                  172 Grand St, New York,
                  NY 10013
                </Text>
              </View>
            </View>

            <ChevronRight
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>

        {/* PREFERENCES */}
        <Text style={styles.sectionTitle}>
          Preferences
        </Text>

        <View style={styles.card}>
          {/* FOOD PREF */}
          <View style={styles.row}>
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <UtensilsCrossed
                  size={20}
                  color="#16a34a"
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Food Preference
                </Text>

                <Text style={styles.value}>
                  Veg / Non-Veg
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
            />
          </View>

          <View style={styles.divider} />

          {/* APPEARANCE */}
          <View style={styles.row}>
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <Moon
                  size={20}
                  color="#16a34a"
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Appearance
                </Text>

                <Text style={styles.value}>
                  Light / Dark
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
            />
          </View>

          <View style={styles.divider} />

          {/* PAYMENT */}
          <TouchableOpacity
            style={styles.row}
          >
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <CreditCard
                  size={20}
                  color="#16a34a"
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Payment Methods
                </Text>

                <Text style={styles.value}>
                  2 Cards Added
                </Text>
              </View>
            </View>

            <ChevronRight
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>

{/* drawer  */}
        {/* FOOD DELIVERY SECTION */}
        <Text style={styles.sectionTitle}>
          Food Delivery
        </Text>

        <View style={styles.card}>
          {/* ORDERS */}
          <TouchableOpacity
            style={styles.row}
          >
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <ShoppingBag
                  size={20}
                  color="#16a34a"
                />
              </View>

              <View>
                <Text style={styles.label}>
                  My Orders
                </Text>

                <Text style={styles.value}>
                  View your orders
                </Text>
              </View>
            </View>

            <ChevronRight
              size={20}
              color="#999"
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* FAVORITES */}
          <TouchableOpacity
            style={styles.row}
          >
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <Heart
                  size={20}
                  color="#16a34a"
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Favorites
                </Text>

                <Text style={styles.value}>
                  Favorite restaurants
                </Text>
              </View>
            </View>

            <ChevronRight
              size={20}
              color="#999"
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* SETTINGS */}
          <TouchableOpacity
            style={styles.row}
          >
            <View style={styles.leftSection}>
              <View style={styles.iconBox}>
                <Settings
                  size={20}
                  color="#16a34a"
                />
              </View>

              <View>
                <Text style={styles.label}>
                  Settings
                </Text>

                <Text style={styles.value}>
                  Manage app settings
                </Text>
              </View>
            </View>

            <ChevronRight
              size={20}
              color="#999"
            />
          </TouchableOpacity>

          <View style={styles.divider} />

          {/* LOGOUT */}
          <TouchableOpacity
            style={styles.row}
          >
            <View style={styles.leftSection}>
              <View
                style={[
                  styles.iconBox,
                  {
                    backgroundColor:
                      "#fee2e2",
                  },
                ]}
              >
                <LogOut
                  size={20}
                  color="#dc2626"
                />
              </View>

              <Text style={styles.logoutText}>
                Logout
              </Text>
            </View>

            <ChevronRight
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>
      </ScrollView> 
    </SafeAreaView>
  );
}

export default ProfileDrawer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  topBar: {
    paddingHorizontal: 20,
    paddingTop: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  notificationButton: {
    width: 50,
    height: 50,
    borderRadius: 25,

    backgroundColor: "#fff",

    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#eee",
  },

  redDot: {
    width: 10,
    height: 10,
    borderRadius: 5,

    backgroundColor: "red",

    position: "absolute",
    top: 12,
    right: 12,
  },

  profileSection: {
    alignItems: "center",
    marginTop: 10,
  },

  avatarContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,

    overflow: "hidden",
  },

  avatar: {
    width: "100%",
    height: "100%",
  },

  userName: {
    marginTop: 18,

    fontSize: 38,
    fontWeight: "700",

    color: "#000",
  },

  email: {
    marginTop: 8,
    color: "#777",
    fontSize: 16,
  },

  editButton: {
    marginTop: 22,

    backgroundColor: "#111",

    paddingHorizontal: 28,
    paddingVertical: 14,

    borderRadius: 35,
  },

  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  sectionTitle: {
    marginTop: 35,
    marginBottom: 16,

    marginHorizontal: 20,

    fontSize: 22,
    fontWeight: "700",

    color: "#111",
  },

  card: {
    marginHorizontal: 20,

    backgroundColor: "#fff",

    borderRadius: 30,

    paddingHorizontal: 18,

    borderWidth: 1,
    borderColor: "#eee",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 18,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 16,

    backgroundColor: "#dcfce7",

    justifyContent: "center",
    alignItems: "center",

    marginRight: 14,
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
  },

  value: {
    marginTop: 5,
    color: "#777",
    fontSize: 15,
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
  },

  logoutText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#dc2626",
  },

  bottomTab: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    backgroundColor: "#fff",

    paddingVertical: 14,

    borderTopWidth: 1,
    borderTopColor: "#eee",
  },

  tabItem: {
    alignItems: "center",
  },

  tabText: {
    marginTop: 5,
    color: "#999",
    fontSize: 12,
  },

  activeTabText: {
    marginTop: 5,
    color: "#000",
    fontSize: 12,
    fontWeight: "700",
  },
});