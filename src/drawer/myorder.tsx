import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable } from "react-native";
import {
  ArrowLeft,
  Heart,
  Clock3,
  CheckCircle2,
  ChevronRight,
  ShoppingBag,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../context/CartContext";
import { restaurants } from "../data/restaurants";

const { width } = Dimensions.get("window");

export default function MyOrdersScreen() {
  const navigation = useNavigation<any>();
  const { orders } = useCart();
  
  const [activeTab, setActiveTab] = useState<"favorites" | "orders">("favorites");

  // Load the first 5 restaurants as mock favorites for visual UI demonstration
  const favoriteRestaurants = restaurants.slice(0, 5);

  const handleRestaurantPress = (restaurant: any) => {
    // Redirection to the central RestaurantDetail screen under the lowercase home stack
    navigation.navigate("home", {
      screen: "RestaurantScreen",
      params: { restaurant },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <ArrowLeft size={22} color="#000" />
        </Pressable> */}

        <Text style={styles.headerTitle}>My Feast Hub</Text>

        <View style={{ width: 45 }} />
      </View>

      {/* TABS SELECTOR */}
      <View style={styles.tabsContainer}>
        <Pressable
          onPress={() => setActiveTab("favorites")}
          style={[styles.tabItem, activeTab === "favorites" && styles.activeTabItem]}
        >
          <Heart
            size={18}
            color={activeTab === "favorites" ? "#fff" : "#666"}
            fill={activeTab === "favorites" ? "#fff" : "transparent"}
          />
          <Text style={[styles.tabText, activeTab === "favorites" && styles.activeTabText]}>
            Favorites
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setActiveTab("orders")}
          style={[styles.tabItem, activeTab === "orders" && styles.activeTabItem]}
        >
          <ShoppingBag size={18} color={activeTab === "orders" ? "#fff" : "#666"} />
          <Text style={[styles.tabText, activeTab === "orders" && styles.activeTabText]}>
            Past Orders
          </Text>
        </Pressable>
      </View>

      {/* CONTENT LIST */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        {activeTab === "favorites" ? (
          /* FAVORITES TAB VIEW */
          <View style={styles.listSection}>
            <Text style={styles.sectionHeader}>Favorite Restaurants ({favoriteRestaurants.length})</Text>
            
            {favoriteRestaurants.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => handleRestaurantPress(item)}
                style={({ pressed }) => [
                  styles.restaurantCard,
                  pressed && styles.cardPressed,
                ]}
              >
                <Image source={{ uri: item.image }} style={styles.restaurantImage} />
                
                <View style={styles.restaurantInfo}>
                  <View style={styles.nameRow}>
                    <Text style={styles.restaurantName} numberOfLines={1}>
                      {item.name}
                    </Text>
                    
                    <View style={styles.heartIconBox}>
                      <Heart size={16} color="#ef4444" fill="#ef4444" />
                    </View>
                  </View>

                  <Text style={styles.cuisineText} numberOfLines={1}>
                    {item.cuisine.join(", ")}
                  </Text>

                  <View style={styles.metaRow}>
                    <Text style={styles.metaText}>★ {item.rating}</Text>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.metaText}>{item.distance}</Text>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.metaText}>{item.deliveryTime}</Text>
                  </View>
                </View>

                <ChevronRight size={18} color="#ccc" style={{ marginRight: 4 }} />
              </Pressable>
            ))}
          </View>
        ) : (
          /* ORDERS TAB VIEW */
          <View style={styles.listSection}>
            <Text style={styles.sectionHeader}>Active & Past Orders ({orders.length})</Text>
            
            {orders.length === 0 ? (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyEmoji}>📦</Text>
                <Text style={styles.emptyTitle}>No Placed Orders</Text>
                <Text style={styles.emptySub}>
                  You haven't ordered anything yet. Browse our local cafes to place a delicious order!
                </Text>
                <Pressable
                  onPress={() => navigation.navigate("home")}
                  style={({ pressed }) => [
                    styles.browseButton,
                    pressed && styles.buttonPressed,
                  ]}
                >
                  <Text style={styles.browseButtonText}>Browse Food</Text>
                </Pressable>
              </View>
            ) : (
              orders.map((item) => {
                const isDelivered = item.status === "Delivered";
                const currency = item.totalPrice < 150 ? "$" : "₹";
                
                return (
                  <Pressable
                    key={item.id}
                    style={({ pressed }) => [
                      styles.orderCard,
                      pressed && styles.cardPressed,
                    ]}
                  >
                    <Image source={{ uri: item.restaurantImage }} style={styles.orderImage} />
                    
                    <View style={styles.orderInfo}>
                      <View style={styles.orderHeader}>
                        <Text style={styles.orderRestName} numberOfLines={1}>
                          {item.restaurantName}
                        </Text>
                        <Text style={styles.orderId}>#{item.id}</Text>
                      </View>

                      <Text style={styles.orderSummary} numberOfLines={2}>
                        {item.itemsSummary}
                      </Text>

                      <View style={styles.orderFooter}>
                        <View style={styles.statusBox}>
                          {isDelivered ? (
                            <CheckCircle2 size={14} color="#22c55e" />
                          ) : (
                            <Clock3 size={14} color="#ff9500" />
                          )}
                          <Text style={[styles.statusText, { color: isDelivered ? "#22c55e" : "#ff9500" }]}>
                            {item.status}
                          </Text>
                        </View>

                        <Text style={styles.orderPrice}>
                          {currency}{item.totalPrice.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                );
              })
            )}
          </View>
        )}
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
  tabsContainer: {
    flexDirection: "row",
    backgroundColor: "#f3f4f6",
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 25,
    padding: 6,
    gap: 6,
  },
  tabItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 20,
    gap: 8,
  },
  activeTabItem: {
    backgroundColor: "#111",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "700",
  },
  listSection: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    marginBottom: 16,
  },
  restaurantCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f3f4f6",
    borderRadius: 22,
    padding: 12,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  restaurantInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    flex: 1,
    marginRight: 6,
  },
  heartIconBox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#fef2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  cuisineText: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
    fontWeight: "500",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  metaText: {
    fontSize: 12,
    color: "#555",
    fontWeight: "600",
  },
  bullet: {
    fontSize: 12,
    color: "#ccc",
    marginHorizontal: 6,
  },
  orderCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f3f4f6",
    borderRadius: 22,
    padding: 12,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 1,
  },
  orderImage: {
    width: 85,
    height: 85,
    borderRadius: 16,
  },
  orderInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: "center",
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderRestName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    flex: 1,
    marginRight: 6,
  },
  orderId: {
    fontSize: 11,
    color: "#999",
    fontWeight: "700",
  },
  orderSummary: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
    fontWeight: "500",
  },
  orderFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  statusBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "700",
  },
  orderPrice: {
    fontSize: 15,
    fontWeight: "800",
    color: "#111",
  },
  cardPressed: {
    opacity: 0.9,
    backgroundColor: "#f9fafb",
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },
  emptyEmoji: {
    fontSize: 56,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111",
  },
  emptySub: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
    marginTop: 6,
    marginBottom: 20,
    fontWeight: "500",
  },
  browseButton: {
    backgroundColor: "#111",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 25,
  },
  browseButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
});