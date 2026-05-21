import React, { useState, useMemo } from "react";
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
import { useNavigation } from '@react-navigation/native';

import {
  ArrowLeft,
  Search,
  SlidersHorizontal,
  Star,
  Clock3,
} from "lucide-react-native";

import { restaurants } from "../data/restaurants";

const categories = [
  "North Indian",
  "Asian",
  "Italian",
  "Pizza",
  "Continental",
  "Fast Food",
  "Desserts",
];

export default function SearchScreen() {
  const navigation = useNavigation<any>();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter restaurants by search query and category toggle
  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((res) => {
      // 1. Filter by category click
      if (selectedCategory) {
        const matchesCategory = res.cuisine.some(c => 
          c.toLowerCase() === selectedCategory.toLowerCase()
        );
        if (!matchesCategory) return false;
      }
      
      // 2. Filter by search input (name, cuisine, or individual dish names)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = res.name.toLowerCase().includes(query);
        const matchesCuisine = res.cuisine.some(c => c.toLowerCase().includes(query));
        const matchesMenuItem = res.menu.some(cat => 
          cat.items.some(item => item.name.toLowerCase().includes(query))
        );
        return matchesName || matchesCuisine || matchesMenuItem;
      }
      
      return true;
    });
  }, [searchQuery, selectedCategory]);

  const toggleCategory = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Deselect if clicked again
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
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
          placeholder="Search food, cuisines, or restaurants..."
          placeholderTextColor="#999"
          style={styles.input}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          clearButtonMode="while-editing"
        />

        <TouchableOpacity>
          <SlidersHorizontal
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      {/* CUISINE FILTER PILLS */}
      <View style={{ height: 75 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryWrapper}
        >
          {categories.map((item, index) => {
            const isActive = selectedCategory === item;
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.categoryButton,
                  isActive && styles.activeCategory,
                ]}
                onPress={() => toggleCategory(item)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    isActive && styles.activeCategoryText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* SEARCH RESULTS LIST */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {filteredRestaurants.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyEmoji}>🍽️</Text>
            <Text style={styles.emptyText}>No matches found</Text>
            <Text style={styles.emptySubtext}>
              Try searching for "Butter Chicken", "Sushi", or click on a cuisine above!
            </Text>
          </View>
        ) : (
          filteredRestaurants.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.restaurantCard}
              onPress={() => {
                navigation.navigate('Home', {
                  screen: 'RestaurantScreen',
                  params: { restaurant: item }
                });
              }}
              activeOpacity={0.9}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.restaurantImage}
              />

              <View style={styles.restaurantInfo}>
                <View style={styles.restaurantHeaderRow}>
                  <Text style={styles.restaurantName} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <View style={styles.ratingBadge}>
                    <Text style={styles.ratingBadgeText}>{item.rating} ★</Text>
                  </View>
                </View>

                {/* CUISINES */}
                <Text style={styles.cuisineText} numberOfLines={1}>
                  {item.cuisine.join(", ")}
                </Text>

                {/* METRICS */}
                <View style={styles.metricsRow}>
                  <Text style={styles.metricItem}>📍 {item.distance}</Text>
                  <Text style={styles.metricDivider}>•</Text>
                  <Text style={styles.metricItem}>🕒 {item.deliveryTime}</Text>
                  <Text style={styles.metricDivider}>•</Text>
                  <Text style={styles.metricItem}>{item.priceForTwo} for two</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
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
    color: "#000",
  },

  categoryWrapper: {
    paddingHorizontal: 20,
    alignItems: "center",
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
    borderRadius: 24,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },

  restaurantImage: {
    width: "100%",
    height: 180,
  },

  restaurantInfo: {
    padding: 16,
  },

  restaurantHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  restaurantName: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
    flex: 1,
    marginRight: 8,
  },

  ratingBadge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },

  ratingBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },

  cuisineText: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 6,
  },

  metricsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 8,
  },

  metricItem: {
    fontSize: 12,
    color: '#4b5563',
    fontWeight: '500',
  },

  metricDivider: {
    fontSize: 12,
    color: '#d1d5db',
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginTop: 60,
  },

  emptyEmoji: {
    fontSize: 48,
    marginBottom: 15,
  },

  emptyText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 8,
  },

  emptySubtext: {
    fontSize: 13,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 20,
  },
});