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
  Plus,
  Minus,
  Clock3,
  MapPin,
} from "lucide-react-native";

const cartItems = [
  {
    id: 1,
    name: "Spicy Chicken Sandwich",
    restaurant: "McDonald's",
    price: 6.7,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1000",
  },

  {
    id: 2,
    name: "French Fries",
    restaurant: "McDonald's",
    price: 3.99,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1000",
  },

  {
    id: 3,
    name: "Chocolate Shake",
    restaurant: "Burger King",
    price: 5.49,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1000",
  },
];

export default function CartScreen() {
  const subtotal = 22.88;
  const delivery = 2.99;
  const tax = 1.2;
  const total = subtotal + delivery + tax;

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          My Cart
        </Text>

        <View style={{ width: 45 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 220,
        }}
      >
        {/* DELIVERY INFO */}
        <View style={styles.deliveryCard}>
          <View style={styles.deliveryRow}>
            <MapPin
              size={18}
              color="#ff4d4d"
              fill="#ff4d4d"
            />

            <View style={{ marginLeft: 10 }}>
              <Text style={styles.deliveryLabel}>
                Deliver to
              </Text>

              <Text style={styles.deliveryText}>
                172 Grand St, NY
              </Text>
            </View>
          </View>

          <View style={styles.deliveryDivider} />

          <View style={styles.deliveryRow}>
            <Clock3 size={18} color="#000" />

            <View style={{ marginLeft: 10 }}>
              <Text style={styles.deliveryLabel}>
                Estimated Time
              </Text>

              <Text style={styles.deliveryText}>
                25 - 35 min
              </Text>
            </View>
          </View>
        </View>

        {/* CART ITEMS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Order Items
          </Text>

          {cartItems.map((item) => (
            <View
              key={item.id}
              style={styles.cartItem}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.foodImage}
              />

              <View style={styles.foodDetails}>
                <Text style={styles.foodName}>
                  {item.name}
                </Text>

                <Text style={styles.restaurantName}>
                  {item.restaurant}
                </Text>

                <Text style={styles.foodPrice}>
                  ${item.price}
                </Text>
              </View>

              {/* QUANTITY */}
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityButton}
                >
                  <Minus size={18} color="#000" />
                </TouchableOpacity>

                <Text style={styles.quantityText}>
                  {item.quantity}
                </Text>

                <TouchableOpacity
                  style={[
                    styles.quantityButton,
                    styles.plusButton,
                  ]}
                >
                  <Plus size={18} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* PROMO CARD */}
        <View style={styles.promoCard}>
          <View>
            <Text style={styles.promoTitle}>
              Free Delivery 🎉
            </Text>

            <Text style={styles.promoText}>
              You unlocked free delivery on
              orders above $20
            </Text>
          </View>

          <TouchableOpacity style={styles.claimButton}>
            <Text style={styles.claimButtonText}>
              Applied
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* BOTTOM CHECKOUT */}
      <View style={styles.checkoutContainer}>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>
            Subtotal
          </Text>

          <Text style={styles.priceValue}>
            ${subtotal.toFixed(2)}
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>
            Delivery Fee
          </Text>

          <Text style={styles.priceValue}>
            ${delivery.toFixed(2)}
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>
            Tax
          </Text>

          <Text style={styles.priceValue}>
            ${tax.toFixed(2)}
          </Text>
        </View>

        <View style={styles.totalDivider} />

        <View style={styles.priceRow}>
          <Text style={styles.totalLabel}>
            Total
          </Text>

          <Text style={styles.totalValue}>
            ${total.toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>
            Proceed to Checkout
          </Text>
        </TouchableOpacity>
      </View>
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
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#f3f3f3",

    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
  },

  deliveryCard: {
    marginHorizontal: 20,
    marginTop: 20,

    backgroundColor: "#f7f7f7",
    borderRadius: 28,

    padding: 20,
  },

  deliveryRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  deliveryDivider: {
    height: 1,
    backgroundColor: "#e5e5e5",
    marginVertical: 18,
  },

  deliveryLabel: {
    fontSize: 13,
    color: "#999",
  },

  deliveryText: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
    marginBottom: 20,
  },

  cartItem: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 20,

    backgroundColor: "#fff",

    borderRadius: 26,

    padding: 14,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,

    elevation: 3,
  },

  foodImage: {
    width: 90,
    height: 90,
    borderRadius: 22,
  },

  foodDetails: {
    flex: 1,
    marginLeft: 15,
  },

  foodName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  restaurantName: {
    marginTop: 6,
    color: "#999",
    fontSize: 14,
  },

  foodPrice: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },

  quantityContainer: {
    alignItems: "center",
    justifyContent: "space-between",

    height: 110,
  },

  quantityButton: {
    width: 38,
    height: 38,
    borderRadius: 19,

    backgroundColor: "#f1f1f1",

    justifyContent: "center",
    alignItems: "center",
  },

  plusButton: {
    backgroundColor: "#111",
  },

  quantityText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },

  promoCard: {
    marginHorizontal: 20,
    marginTop: 10,

    backgroundColor: "#fff3f1",

    borderRadius: 28,

    padding: 22,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  promoTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },

  promoText: {
    marginTop: 8,
    color: "#666",
    lineHeight: 22,
    width: 200,
  },

  claimButton: {
    backgroundColor: "#ff5a4f",

    paddingHorizontal: 18,
    paddingVertical: 12,

    borderRadius: 30,
  },

  claimButtonText: {
    color: "#fff",
    fontWeight: "700",
  },

  checkoutContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: "#fff",

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    padding: 24,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 10,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",

    marginBottom: 14,
  },

  priceLabel: {
    color: "#777",
    fontSize: 16,
  },

  priceValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  totalDivider: {
    height: 1,
    backgroundColor: "#eee",

    marginVertical: 12,
  },

  totalLabel: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },

  totalValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
  },

  checkoutButton: {
    marginTop: 24,

    backgroundColor: "#111",

    paddingVertical: 18,

    borderRadius: 40,

    alignItems: "center",
  },

  checkoutButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
  },
});