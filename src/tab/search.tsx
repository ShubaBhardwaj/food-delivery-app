import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  ArrowLeft,
  Search,
  SlidersHorizontal,
  Star,
  Clock3,
} from "lucide-react-native";

const categories = [
  "Burger",
  "Pizza",
  "Coffee",
  "Dessert",
  "Chicken",
];

const restaurants = [
  {
    id: 1,
    name: "Burger House",
    rating: "4.8",
    time: "20-30 min",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000",
  },

  {
    id: 2,
    name: "Italian Pizza",
    rating: "4.7",
    time: "25-35 min",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000",
  },

  {
    id: 3,
    name: "Coffee Cafe",
    rating: "4.9",
    time: "10-15 min",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000",
  },
];

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft size={22} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Search
        </Text>

        <View style={{ width: 45 }} />
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchContainer}>
        <Search size={20} color="#777" />

        <TextInput
          placeholder="Search food or restaurant"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TouchableOpacity>
          <SlidersHorizontal
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      {/* CATEGORIES */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryWrapper}
      >
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              index === 0 && styles.activeCategory,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                index === 0 &&
                  styles.activeCategoryText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* RESULTS */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {restaurants.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.restaurantCard}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.restaurantImage}
            />

            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>
                {item.name}
              </Text>

              <View style={styles.infoRow}>
                <View style={styles.ratingRow}>
                  <Star
                    size={14}
                    color="#ffb800"
                    fill="#ffb800"
                  />

                  <Text style={styles.ratingText}>
                    {item.rating}
                  </Text>
                </View>

                <View style={styles.timeRow}>
                  <Clock3
                    size={14}
                    color="#777"
                  />

                  <Text style={styles.timeText}>
                    {item.time}
                  </Text>
                </View>
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
    color: "#000",
  },

  searchContainer: {
    marginHorizontal: 20,
    marginTop: 25,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#f5f5f5",

    borderRadius: 20,

    paddingHorizontal: 18,
    paddingVertical: 14,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },

  categoryWrapper: {
    paddingHorizontal: 20,
    marginTop: 25,
  },

  categoryButton: {
    paddingHorizontal: 22,
    paddingVertical: 12,

    borderRadius: 30,

    backgroundColor: "#f3f3f3",

    marginRight: 12,
  },

  activeCategory: {
    backgroundColor: "#111",
  },

  categoryText: {
    color: "#555",
    fontWeight: "600",
  },

  activeCategoryText: {
    color: "#fff",
  },

  restaurantCard: {
    marginHorizontal: 20,
    marginTop: 20,

    backgroundColor: "#fff",

    borderRadius: 28,

    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,

    elevation: 5,
  },

  restaurantImage: {
    width: "100%",
    height: 180,
  },

  restaurantInfo: {
    padding: 18,
  },

  restaurantName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
  },

  infoRow: {
    flexDirection: "row",
    marginTop: 12,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },

  ratingText: {
    marginLeft: 5,
    color: "#666",
  },

  timeRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  timeText: {
    marginLeft: 5,
    color: "#666",
  },
});