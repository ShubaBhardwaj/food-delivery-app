import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
} from "react-native";

import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import {
  ArrowLeft,
  Plus,
  Minus,
  Clock3,
  MapPin,
} from "lucide-react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useCart } from "../../context/CartContext";
import * as SecureStore from "expo-secure-store";

const getFoodImage = (name: string) => {
  const lowercaseName = name.toLowerCase();
  if (lowercaseName.includes("pizza") || lowercaseName.includes("margherita") || lowercaseName.includes("flatbread")) {
    return "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400";
  }
  if (lowercaseName.includes("burger")) {
    return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400";
  }
  if (lowercaseName.includes("sushi") || lowercaseName.includes("maki") || lowercaseName.includes("roll")) {
    return "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=400";
  }
  if (lowercaseName.includes("noodle") || lowercaseName.includes("pasta") || lowercaseName.includes("alfredo") || lowercaseName.includes("penne") || lowercaseName.includes("spaghetti") || lowercaseName.includes("ravioli") || lowercaseName.includes("pesto")) {
    return "https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=400";
  }
  if (lowercaseName.includes("biryani") || lowercaseName.includes("rice") || lowercaseName.includes("dum")) {
    return "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=400";
  }
  if (lowercaseName.includes("chicken") || lowercaseName.includes("kebab") || lowercaseName.includes("tikka") || lowercaseName.includes("mutton") || lowercaseName.includes("korma")) {
    return "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=400";
  }
  if (lowercaseName.includes("cake") || lowercaseName.includes("brownie") || lowercaseName.includes("dessert") || lowercaseName.includes("jamun") || lowercaseName.includes("tart")) {
    return "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=400";
  }
  if (lowercaseName.includes("coffee") || lowercaseName.includes("shake") || lowercaseName.includes("mojito") || lowercaseName.includes("drink")) {
    return "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400";
  }
  if (lowercaseName.includes("paneer") || lowercaseName.includes("dal") || lowercaseName.includes("makhani") || lowercaseName.includes("nachos") || lowercaseName.includes("tacos")) {
    return "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400";
  }
  return "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400";
};

export default function CartScreen() {
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();
  const { cartItems, updateQuantity, placeOrder, getCartSubtotal } = useCart();

  const [deliveryAddress, setDeliveryAddress] = React.useState("172 Grand St, New York, NY 10013");

  React.useEffect(() => {
    if (isFocused) {
      const loadAddress = async () => {
        try {
          const storedAddress = await SecureStore.getItemAsync("profile_address");
          if (storedAddress) {
            setDeliveryAddress(storedAddress);
          }
        } catch (err) {
          console.warn("Failed to load delivery address from secure store:", err);
        }
      };
      loadAddress();
    }
  }, [isFocused]);

  const subtotal = getCartSubtotal();
  const hasDollar = cartItems.some((i) => i.item.price.includes("$"));
  const currencySymbol = hasDollar ? "$" : "₹";

  const delivery = subtotal === 0 ? 0 : (subtotal > 200 ? 0 : (hasDollar ? 2.99 : 45));
  const tax = subtotal === 0 ? 0 : (hasDollar ? 1.20 : 35);
  const total = subtotal === 0 ? 0 : (subtotal + delivery + tax);

  if (cartItems.length === 0) {
    return (
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
        {/* HEADER */}
        <View style={styles.header}>
          <Pressable
            style={({ pressed }) => [styles.backButton, pressed && styles.buttonPressed]}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft size={24} color="#000" />
          </Pressable>

          <Text style={styles.headerTitle}>
            My Cart
          </Text>

          <View style={{ width: 45 }} />
        </View>

        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>🛒</Text>
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <Text style={styles.emptySubtext}>
            Browse our catalog and add delicious items from your favorite restaurants!
          </Text>
          <Pressable 
            style={({ pressed }) => [styles.browseButton, pressed && styles.buttonPressed]}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.browseButtonText}>Explore Restaurants</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable
          style={({ pressed }) => [styles.backButton, pressed && styles.buttonPressed]}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={24} color="#000" />
        </Pressable>

        <Text style={styles.headerTitle}>
          My Cart
        </Text>

        <View style={{ width: 45 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 320, // Expanded padding so promo message scrolls clearly above the checkout card
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

              <Text style={styles.deliveryText} numberOfLines={2}>
                {deliveryAddress}
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

          {cartItems.map((cartItem, index) => {
            const { restaurant, item, quantity } = cartItem;
            const itemKey = `${restaurant.id}-${item.name}-${index}`;
            return (
              <View
                key={itemKey}
                style={styles.cartItem}
              >
                <Image
                  source={{ uri: getFoodImage(item.name) }}
                  style={styles.foodImage}
                />

                <View style={styles.foodDetails}>
                  <Text style={styles.foodName}>
                    {item.name}
                  </Text>

                  <Text style={styles.restaurantName}>
                    {restaurant.name}
                  </Text>

                  <Text style={styles.foodPrice}>
                    {item.price}
                  </Text>
                </View>

                {/* QUANTITY */}
                <View style={styles.quantityContainer}>
                  <Pressable
                    style={({ pressed }) => [styles.quantityButton, pressed && styles.buttonPressed]}
                    onPress={() => updateQuantity(restaurant.id, item.name, -1)}
                  >
                    <Minus size={18} color="#000" />
                  </Pressable>

                  <Text style={styles.quantityText}>
                    {quantity}
                  </Text>

                  <Pressable
                    style={({ pressed }) => [
                      styles.quantityButton,
                      styles.plusButton,
                      pressed && styles.buttonPressed,
                    ]}
                    onPress={() => updateQuantity(restaurant.id, item.name, 1)}
                  >
                    <Plus size={18} color="#fff" />
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>

        {/* PROMO CARD */}
        <View style={styles.promoCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.promoTitle}>
              Free Delivery 🎉
            </Text>

            <Text style={styles.promoText}>
              You unlocked free delivery on
              orders above {currencySymbol}{hasDollar ? "20" : "200"}
            </Text>
          </View>

          <Pressable style={({ pressed }) => [styles.claimButton, pressed && styles.buttonPressed]}>
            <Text style={styles.claimButtonText}>
              Applied
            </Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* BOTTOM CHECKOUT */}
      <View style={[styles.checkoutContainer, { paddingBottom: 24 + insets.bottom }]}>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>
            Subtotal
          </Text>

          <Text style={styles.priceValue}>
            {currencySymbol}{subtotal.toFixed(2)}
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>
            Delivery Fee
          </Text>

          <Text style={styles.priceValue}>
            {delivery === 0 ? "Free" : `${currencySymbol}${delivery.toFixed(2)}`}
          </Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>
            Tax
          </Text>

          <Text style={styles.priceValue}>
            {currencySymbol}{tax.toFixed(2)}
          </Text>
        </View>

        <View style={styles.totalDivider} />

        <View style={styles.priceRow}>
          <Text style={styles.totalLabel}>
            Total
          </Text>

          <Text style={styles.totalValue}>
            {currencySymbol}{total.toFixed(2)}
          </Text>
        </View>

        <Pressable 
          style={({ pressed }) => [
            styles.checkoutButton,
            pressed && styles.buttonPressed
          ]}
          onPress={() => {
            placeOrder();
            Alert.alert(
              "Your order is preparing! 🍳",
              "Our chefs are crafting your meal to perfection.",
              [
                {
                  text: "Track Order",
                  onPress: () => {
                    navigation.navigate("order");
                  }
                }
              ],
              { cancelable: false }
            );
          }}
        >
          <Text style={styles.checkoutButtonText}>
            Proceed to Checkout
          </Text>
        </Pressable>
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

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingBottom: 80,
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
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});