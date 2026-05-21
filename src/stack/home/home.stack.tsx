import React, { useState, useMemo } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bell, MapPin, Search, SlidersHorizontal } from "lucide-react-native";
import { useNavigation } from '@react-navigation/native';
import { restaurants } from "../../data/restaurants";

// Helper function to assign dynamic category icons
const getFoodImage = (name: string) => {
  const lowercaseName = name.toLowerCase();
  if (lowercaseName.includes("pizza")) {
    return "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400";
  }
  if (lowercaseName.includes("burger") || lowercaseName.includes("fast food")) {
    return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400";
  }
  if (lowercaseName.includes("sushi") || lowercaseName.includes("asian")) {
    return "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=400";
  }
  if (lowercaseName.includes("noodle") || lowercaseName.includes("pasta") || lowercaseName.includes("italian")) {
    return "https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=400";
  }
  if (lowercaseName.includes("biryani") || lowercaseName.includes("indian") || lowercaseName.includes("mughlai") || lowercaseName.includes("lucknowi")) {
    return "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=400";
  }
  if (lowercaseName.includes("dessert") || lowercaseName.includes("bakery") || lowercaseName.includes("desserts")) {
    return "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=400";
  }
  if (lowercaseName.includes("coffee") || lowercaseName.includes("cafe") || lowercaseName.includes("bar")) {
    return "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=400";
  }
  return "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400";
};

// Generate scrollable category list from cuisines present in the data
const dynamicCategories = Array.from(
  new Set(restaurants.flatMap((r) => r.cuisine))
).map((title, index) => ({
  id: index + 1,
  title,
  image: getFoodImage(title),
}));

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Dynamic feed matching selected category
  const filteredFeedRestaurants = useMemo(() => {
    if (!selectedCategory) return restaurants;
    return restaurants.filter((res) =>
      res.cuisine.some((c) => c.toLowerCase() === selectedCategory.toLowerCase())
    );
  }, [selectedCategory]);

  const handleCategoryPress = (categoryTitle: string) => {
    if (selectedCategory === categoryTitle) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryTitle);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton}>
            <View>
              <View style={styles.menuLineLarge} />
              <View style={styles.menuLineSmall} />
            </View>
          </TouchableOpacity>

          <View style={styles.locationContainer}>
            <Text style={styles.locationLabel}>Location</Text>
            <View style={styles.locationRow}>
              <MapPin size={16} color="red" fill="red" />
              <Text style={styles.locationText}>Connaught Place, DL</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.iconButton}>
            <Bell size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* ADDRESS CHECK */}
        <View style={styles.addressCard}>
          <View style={styles.addressIcon}>
            <Text style={{ fontSize: 22 }}>🗺️</Text>
          </View>
          <Text style={styles.addressText}>
            Is this the right address? It looks a little far from you.
          </Text>
          <TouchableOpacity>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>
        </View>

        {/* SEARCH BAR (Identical to Search Screen search bar) */}
        <View style={styles.searchContainer}>
          <Search size={20} color="#777" />
          <TextInput
            placeholder="Search food, cuisines, or restaurants..."
            placeholderTextColor="#999"
            style={styles.input}
            onFocus={() => navigation.navigate("search")}
            onChangeText={(text) => navigation.navigate("search", { searchQuery: text })}
          />
          <TouchableOpacity>
            <SlidersHorizontal size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* HORIZONTAL CATEGORIES SLIDER */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryWrapper}
        >
          {dynamicCategories.map((item) => {
            const isActive = selectedCategory === item.title;
            return (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.categoryItem,
                  isActive && styles.activeCategoryItem,
                ]}
                onPress={() => handleCategoryPress(item.title)}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: item.image }}
                  style={[
                    styles.categoryImage,
                    isActive && styles.activeCategoryImage,
                  ]}
                />
                <Text
                  style={[
                    styles.categoryText,
                    isActive && styles.activeCategoryText,
                  ]}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* OFFER CARD */}
        <View style={styles.offerCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.offerTitle}>Flat 20% OFF</Text>
            <Text style={styles.offerSubtitle}>
              Claim exclusive discounts on selected local diners! Automatically applied.
            </Text>
            <TouchableOpacity style={styles.orderButton}>
              <Text style={styles.orderButtonText}>Order now</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
            }}
            style={styles.offerImage}
          />
        </View>

        {/* SECTION HEADER */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {selectedCategory ? `${selectedCategory} Diners` : "Popular Lokal Diners"}
          </Text>
          <TouchableOpacity onPress={() => setSelectedCategory(null)}>
            <Text style={styles.seeAll}>Clear filter</Text>
          </TouchableOpacity>
        </View>

        {/* RESTAURANTS FEED */}
        <View style={{ paddingHorizontal: 20 }}>
          {filteredFeedRestaurants.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyEmoji}>🍽️</Text>
              <Text style={styles.emptyText}>No Diners Found</Text>
              <Text style={styles.emptySubtext}>
                No restaurants available matching {selectedCategory} at this moment.
              </Text>
            </View>
          ) : (
            filteredFeedRestaurants.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.restaurantCard}
                onPress={() => {
                  navigation.navigate("RestaurantScreen", { restaurant: item });
                }}
                activeOpacity={0.9}
              >
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item.image }} style={styles.restaurantImage} />

                  {/* PROMOTED */}
                  {item.isPromoted && (
                    <View style={styles.promotedTag}>
                      <Text style={styles.promotedTagText}>PROMOTED</Text>
                    </View>
                  )}

                  {/* FLAT OFFER */}
                  {item.offer && (
                    <View style={styles.offerBadge}>
                      <Text style={styles.offerBadgeText}>{item.offer.toUpperCase()}</Text>
                    </View>
                  )}
                </View>

                <View style={styles.restaurantInfo}>
                  <View style={styles.restaurantHeaderRow}>
                    <Text style={styles.restaurantName} numberOfLines={1}>
                      {item.name}
                    </Text>
                    <View style={styles.ratingBadge}>
                      <Text style={styles.ratingBadgeText}>{item.rating} ★</Text>
                    </View>
                  </View>

                  {/* CUISINE */}
                  <Text style={styles.cuisineText} numberOfLines={1}>
                    {item.cuisine.join(", ")}
                  </Text>

                  {/* METRICS */}
                  <View style={styles.metricsRow}>
                    <Text style={styles.metricItem}>📍 {item.distance}</Text>
                    <Text style={styles.metricDivider}>•</Text>
                    <Text style={styles.metricItem}>🕒 {item.deliveryTime}</Text>
                    <Text style={styles.metricDivider}>•</Text>
                    <Text style={styles.metricItem}>
                      {item.deliveryFee === "Free" ? "🆓 Free Del." : `💵 ${item.deliveryFee}`}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          )}
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
    marginHorizontal: 20,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  iconButton: {
    height: 42,
    width: 42,
    borderRadius: 21,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    alignItems: "center",
  },
  menuLineLarge: {
    width: 18,
    height: 2,
    borderRadius: 10,
    backgroundColor: "#000",
    marginBottom: 4,
  },
  menuLineSmall: {
    width: 10,
    height: 2,
    borderRadius: 10,
    backgroundColor: "#000",
  },
  locationContainer: {
    alignItems: "center",
  },
  locationLabel: {
    fontSize: 12,
    color: "#999",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 4,
    color: "#000",
  },
  addressCard: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  addressIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#dff7f7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  addressText: {
    flex: 1,
    fontSize: 13,
    color: "#444",
    fontWeight: "500",
  },
  closeText: {
    fontSize: 20,
    color: "#777",
    fontWeight: "bold",
  },
  searchContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 50,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: "#000",
  },
  categoryWrapper: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 18,
    padding: 4,
    borderRadius: 16,
  },
  activeCategoryItem: {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  categoryImage: {
    width: 65,
    height: 65,
    borderRadius: 32,
  },
  activeCategoryImage: {
    borderWidth: 2,
    borderColor: "#111827",
  },
  categoryText: {
    marginTop: 8,
    fontSize: 12,
    color: "#555",
    fontWeight: "600",
  },
  activeCategoryText: {
    color: "#111827",
    fontWeight: "800",
  },
  offerCard: {
    marginHorizontal: 20,
    marginTop: 28,
    backgroundColor: "#f3f3f3",
    borderRadius: 25,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  offerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
  },
  offerSubtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 8,
    lineHeight: 20,
  },
  orderButton: {
    marginTop: 15,
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignSelf: "flex-start",
  },
  orderButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  offerImage: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginLeft: 10,
  },
  sectionHeader: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
  },
  seeAll: {
    color: "#ef4444",
    fontWeight: "600",
  },
  restaurantCard: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#f3f4f6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 180,
  },
  restaurantImage: {
    width: "100%",
    height: "100%",
  },
  promotedTag: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  promotedTagText: {
    color: "#fff",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  offerBadge: {
    position: "absolute",
    bottom: 12,
    left: 12,
    backgroundColor: "#ef4444",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    shadowColor: "#ef4444",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  offerBadgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  restaurantInfo: {
    padding: 16,
  },
  restaurantHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    flex: 1,
    marginRight: 8,
  },
  ratingBadge: {
    backgroundColor: "#10b981",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  cuisineText: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 4,
  },
  metricsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 8,
  },
  metricItem: {
    fontSize: 12,
    color: "#4b5563",
    fontWeight: "500",
  },
  metricDivider: {
    fontSize: 12,
    color: "#d1d5db",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  emptyEmoji: {
    fontSize: 42,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 6,
  },
  emptySubtext: {
    fontSize: 13,
    color: "#6b7280",
    textAlign: "center",
  },
});