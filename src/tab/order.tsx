import React from "react";

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  ArrowLeft,
  Clock3,
  CheckCircle2,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../context/CartContext";

// Placed orders list is loaded dynamically from CartContext

export default function OrdersScreen() {
  const navigation = useNavigation<any>();
  const { orders } = useCart();

  if (orders.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("home")}>
            <ArrowLeft size={22} color="#000" />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Orders
          </Text>

          <View style={{ width: 45 }} />
        </View>

        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>📦</Text>
          <Text style={styles.emptyText}>No orders placed yet</Text>
          <Text style={styles.emptySubtext}>
            Your active/past orders will show up here. Place an order from your cart to get started!
          </Text>
          <TouchableOpacity 
            style={styles.browseButton}
            onPress={() => navigation.navigate("home")}
          >
            <Text style={styles.browseButtonText}>Order Delicious Food</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("home")}>
          <ArrowLeft size={22} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Orders
        </Text>

        <View style={{ width: 45 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120, // Leave padding for the bottom navigation bar
        }}
      >
        {orders.map((item) => {
          const isDelivered = item.status === "Delivered";
          const currency = item.totalPrice < 150 ? "$" : "₹";

          return (
            <TouchableOpacity
              key={item.id}
              style={styles.orderCard}
              activeOpacity={0.9}
            >
              <Image
                source={{ uri: item.restaurantImage }}
                style={styles.foodImage}
              />

              <View style={styles.orderInfo}>
                <View style={styles.orderHeaderRow}>
                  <Text style={styles.restaurantName} numberOfLines={1}>
                    {item.restaurantName}
                  </Text>
                  <Text style={styles.orderIdText}>#{item.id}</Text>
                </View>

                <Text style={styles.itemName} numberOfLines={2}>
                  {item.itemsSummary}
                </Text>

                <View style={styles.bottomRow}>
                  <View style={styles.statusRow}>
                    {isDelivered ? (
                      <CheckCircle2
                        size={16}
                        color="#22c55e"
                      />
                    ) : (
                      <Clock3
                        size={16}
                        color="#ff9500"
                      />
                    )}

                    <Text 
                      style={[
                        styles.statusText,
                        { color: isDelivered ? "#22c55e" : "#ff9500" }
                      ]}
                    >
                      {item.status}
                    </Text>
                  </View>

                  <Text style={styles.priceText}>
                    {currency}{item.totalPrice.toFixed(2)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
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
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#f4f4f4",

    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111",
  },

  orderCard: {
    marginHorizontal: 20,
    marginTop: 20,

    flexDirection: "row",

    backgroundColor: "#fff",

    borderRadius: 28,

    padding: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,

    elevation: 4,
  },

  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 22,
  },

  orderInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },

  restaurantName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  itemName: {
    marginTop: 8,
    color: "#777",
    fontSize: 15,
  },

  bottomRow: {
    marginTop: 15,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusText: {
    marginLeft: 6,
    fontWeight: "600",
    color: "#111",
  },

  timeText: {
    color: "#888",
    fontWeight: "500",
  },

  orderHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  orderIdText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#999",
  },

  priceText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    marginTop: 80,
  },
  emptyEmoji: {
    fontSize: 72,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111",
    marginBottom: 8,
    textAlign: "center",
  },
  emptySubtext: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 30,
  },
  browseButton: {
    backgroundColor: "#111",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  browseButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});