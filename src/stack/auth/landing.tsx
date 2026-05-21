import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowRight } from "lucide-react-native";

const { width, height } = Dimensions.get("window");

export default function LandingScreen() {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Visual Content Block */}
      <View style={styles.heroSection}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800",
          }}
          style={styles.heroImage}
        />
        <View style={styles.gradientOverlay} />
      </View>

      {/* Narrative Section */}
      <View style={styles.contentCard}>
        <View style={styles.brandingRow}>
          <Text style={styles.brandEmoji}>🍕</Text>
          <Text style={styles.brandSubtitle}>LokalDiners</Text>
        </View>

        <Text style={styles.title}>
          Grab Your Favourite{"\n"}Lokal Feast
        </Text>
        
        <Text style={styles.description}>
          Explore premium curated menus from the finest dinerships and cafes around Connaught Place, delivered directly to your doorstep.
        </Text>

        {/* Let's Explore Action Button */}
        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.primaryButtonText}>Let's Explore</Text>
          <ArrowRight size={18} color="#fff" strokeWidth={2.5} />
        </Pressable>

        {/* Existing User Login Prompt */}
        <View style={styles.loginRow}>
          <Text style={styles.loginLabel}>Already have an account? </Text>
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={({ pressed }) => [
              pressed && styles.linkPressed,
            ]}
          >
            <Text style={styles.loginLink}>Login</Text>
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
  },
  heroSection: {
    width: width,
    height: height * 0.45,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: "#fff",
  },
  contentCard: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 40,
    justifyContent: "space-between",
  },
  brandingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  brandEmoji: {
    fontSize: 20,
    marginRight: 6,
  },
  brandSubtitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#666",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#111",
    lineHeight: 42,
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 15,
    color: "#555",
    lineHeight: 24,
    fontWeight: "500",
  },
  primaryButton: {
    flexDirection: "row",
    backgroundColor: "#111",
    paddingVertical: 18,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 6,
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
  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginLabel: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  loginLink: {
    fontSize: 14,
    color: "#111",
    fontWeight: "700",
    textDecorationLine: "underline",
  },
  linkPressed: {
    opacity: 0.6,
  },
});
