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

const orders = [
  {
    id: 1,
    restaurant: "McDonald's",
    item: "2x Chicken Burger",
    status: "On the way",
    time: "25 min",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000",
  },

  {
    id: 2,
    restaurant: "Pizza Hut",
    item: "Pepperoni Pizza",
    status: "Delivered",
    time: "Yesterday",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000",
  },

  {
    id: 3,
    restaurant: "Coffee Cafe",
    item: "Cold Coffee",
    status: "Preparing",
    time: "15 min",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000",
  },
];

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
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
          paddingBottom: 40,
        }}
      >
        {orders.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.orderCard}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.foodImage}
            />

            <View style={styles.orderInfo}>
              <Text style={styles.restaurantName}>
                {item.restaurant}
              </Text>

              <Text style={styles.itemName}>
                {item.item}
              </Text>

              <View style={styles.bottomRow}>
                <View style={styles.statusRow}>
                  {item.status === "Delivered" ? (
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

                  <Text style={styles.statusText}>
                    {item.status}
                  </Text>
                </View>

                <Text style={styles.timeText}>
                  {item.time}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
});