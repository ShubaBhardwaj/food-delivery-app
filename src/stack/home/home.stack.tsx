import React from "react";
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

import {
  Bell,
  MapPin,
  Search,
  SlidersHorizontal,
  House,
  ShoppingCart,
  ClipboardList,
  User,
} from "lucide-react-native";

import {  useNavigation } from '@react-navigation/native';

const categories = [
  {
    id: 1,
    title: "Steak",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400",
  },
  {
    id: 2,
    title: "Desserts",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=400",
  },
  {
    id: 3,
    title: "Breakfast",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=400",
  },
  {
    id: 4,
    title: "Fast Food",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400",
  },
];

const restaurants = [
  {
    id: 1,
    name: "H & H Bagels",
    rating: "4.8",
    reviews: "1,299+ ratings",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000",
  },
  {
    id: 2,
    name: "Nara Sushi",
    rating: "4.7",
    reviews: "989+ ratings",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000",
  },
];

export default function HomeScreen() {
    const navigation = useNavigation<any>()
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
              <Text style={styles.locationText}>172 Grand St, NY</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.iconButton}>
            <Bell size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* ADDRESS CARD */}
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

        {/* SEARCH */}
        <View style={styles.searchContainer}>
          <Search size={20} color="#777" />

          <TextInput
            placeholder="Search Food, groceries, drink..."
            placeholderTextColor="#999"
            style={styles.input}
          />

          <View style={styles.divider} />

          <TouchableOpacity>
            <SlidersHorizontal size={20} color="#333" />
          </TouchableOpacity>
        </View>

        {/* CATEGORIES */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryWrapper}
        >
          {categories.map((item) => (
            <TouchableOpacity key={item.id} style={styles.categoryItem}>
              <Image
                source={{ uri: item.image }}
                style={styles.categoryImage}
              />

              <Text style={styles.categoryText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* OFFER CARD */}
        <View style={styles.offerCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.offerTitle}>20% off Levain</Text>

            <Text style={styles.offerSubtitle}>
              When your order $20+ Automatically applied.
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
            Popular Lokal Restaurants
          </Text>

          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* RESTAURANTS */}
        <View style={{ paddingHorizontal: 20 }}>
          {restaurants.map((item) => (
            <TouchableOpacity key={item.id} style={styles.restaurantCard}
            onPress={() => {navigation.navigate('RestaurantScreen')}}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.restaurantImage}
              />

              <View style={styles.restaurantInfo}>
                <Text style={styles.restaurantName}>{item.name}</Text>

                <View style={styles.ratingRow}>
                  <Text style={styles.star}>⭐</Text>

                  <Text style={styles.rating}>{item.rating}</Text>

                  <Text style={styles.reviewText}>
                    ({item.reviews})
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
    backgroundColor: '#fff',
    borderRadius: 50,
    shadowColor: '#000',
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
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },

  divider: {
    width: 1,
    height: 24,
    backgroundColor: "#ddd",
    marginHorizontal: 12,
  },

  categoryWrapper: {
    paddingHorizontal: 20,
    marginTop: 25,
  },

  categoryItem: {
    alignItems: "center",
    marginRight: 18,
  },

  categoryImage: {
    width: 65,
    height: 65,
    borderRadius: 32,
  },

  categoryText: {
    marginTop: 8,
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
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
    color: "#999",
    fontWeight: "500",
  },

  restaurantCard: {
    marginTop: 20,
  },

  restaurantImage: {
    width: "100%",
    height: 180,
    borderRadius: 24,
  },

  restaurantInfo: {
    marginTop: 12,
  },

  restaurantName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  star: {
    fontSize: 14,
  },

  rating: {
    marginLeft: 5,
    fontWeight: "700",
    color: "#000",
  },

  reviewText: {
    marginLeft: 8,
    color: "#999",
    fontSize: 13,
  },
});