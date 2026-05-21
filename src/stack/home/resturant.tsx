import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";

import {
  ArrowLeft,
  Heart,
  Share2,
  Info,
  MapPin,
  Clock3,
  Plus,
  Star,
  DollarSign
} from "lucide-react-native";

const { width } = Dimensions.get('window');

const popularItems = [
  {
    id: 1,
    name: "2 Sausage Burrito Meal",
    price: "$8.49",
    image:
      "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=1000",
  },
  {
    id: 2,
    name: "Spicy Chicken Sandwich",
    price: "$6.70",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1000",
  },
  {
    id: 3,
    name: "8 pc. Chicken Nuggets",
    price: "$21.95",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1000",
  },
];

export default function RestaurantScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        bounces={false}
      >
        {/* TOP IMAGE */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=1200",
            }}
            style={styles.coverImage}
          />
          <View style={styles.imageOverlay} />

          {/* TOP BUTTONS */}
          <View style={styles.topButtonsContainer}>
            <View style={styles.topButtons}>
              <Pressable 
                style={({ pressed }) => [
                  styles.glassButton,
                  { opacity: pressed ? 0.7 : 1, transform: [{ scale: pressed ? 0.95 : 1 }] }
                ]}
                onPress={() => navigation.goBack()}
              >
                <ArrowLeft size={24} color="#000" />
              </Pressable>

              <View style={styles.rightButtons}>
                <Pressable 
                  style={({ pressed }) => [
                    styles.glassButton,
                    { opacity: pressed ? 0.7 : 1, transform: [{ scale: pressed ? 0.95 : 1 }] }
                  ]}
                >
                  <Heart size={22} color="#000" />
                </Pressable>

                <Pressable 
                  style={({ pressed }) => [
                    styles.glassButton, 
                    { marginLeft: 12, opacity: pressed ? 0.7 : 1, transform: [{ scale: pressed ? 0.95 : 1 }] }
                  ]}
                >
                  <Share2 size={22} color="#000" />
                </Pressable>
              </View>
            </View>
          </View>

          {/* FLOATING LOGO */}
          <View style={styles.logoWrapper}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/4/4e/McDonald%27s_Golden_Arches.svg",
              }}
              style={styles.logo}
            />
          </View>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          {/* TITLE */}
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.restaurantName}>McDonald’s</Text>
              <Text style={styles.tagsText}>American • Fast Food • Burgers</Text>
            </View>

            <Pressable 
              style={({ pressed }) => [
                styles.infoButton,
                { opacity: pressed ? 0.7 : 1, transform: [{ scale: pressed ? 0.95 : 1 }] }
              ]}
            >
              <Info size={24} color="#555" strokeWidth={1.5} />
            </Pressable>
          </View>

          {/* RATINGS & LOCATION PILLS */}
          <View style={styles.pillsRow}>
            <View style={styles.ratingPill}>
              <Star size={16} color="#d97706" fill="#d97706" />
              <Text style={styles.ratingText}>4.8</Text>
              <Text style={styles.ratingCount}>(2.7k+)</Text>
            </View>

            <View style={styles.locationPill}>
              <MapPin size={16} color="#4b5563" />
              <Text style={styles.locationText}>3455 West Peoria Ave</Text>
            </View>
          </View>

          {/* DELIVERY INFO */}
          <View style={styles.deliveryContainer}>
            <Pressable 
              style={({ pressed }) => [
                styles.deliveryBox,
                { transform: [{ scale: pressed ? 0.98 : 1 }] }
              ]}
            >
              <View style={styles.iconCircle}>
                <Clock3 size={20} color="#000" />
              </View>
              <View>
                <Text style={styles.deliveryTime}>30-40 min</Text>
                <Text style={styles.deliveryLabel}>Delivery time</Text>
              </View>
            </Pressable>

            <Pressable 
              style={({ pressed }) => [
                styles.deliveryBox,
                { transform: [{ scale: pressed ? 0.98 : 1 }] }
              ]}
            >
              <View style={[styles.iconCircle, { backgroundColor: '#f0fdf4' }]}>
                <DollarSign size={20} color="#16a34a" />
              </View>
              <View>
                <Text style={styles.deliveryTime}>$0.00</Text>
                <Text style={styles.deliveryLabel}>Delivery fee ($12+)</Text>
              </View>
            </Pressable>
          </View>

          {/* OFFER CARD */}
          <View style={styles.offerCardShadow}>
            <Pressable 
              style={({ pressed }) => [
                styles.offerCardInner,
                { opacity: pressed ? 0.9 : 1, transform: [{ scale: pressed ? 0.98 : 1 }] }
              ]}
            >
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000",
                }}
                style={styles.offerImage}
              />
              <View style={styles.offerGradient} />
              
              <View style={{ flex: 1, padding: 24 }}>
                <View style={styles.offerTag}>
                  <Text style={styles.offerTagText}>LIMITED TIME</Text>
                </View>
                <Text style={styles.offerTitle}>Deals for Days</Text>
                <Text style={styles.offerSubtitle}>
                  Get $0 delivery fee on your first order over $10!
                </Text>
                <View style={styles.learnButton}>
                  <Text style={styles.learnButtonText}>Claim Offer</Text>
                </View>
              </View>
            </Pressable>
          </View>

          {/* POPULAR ITEMS */}
          <View style={styles.popularSection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Popular Items</Text>
              <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                <Text style={styles.seeAllText}>See All</Text>
              </Pressable>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingRight: 20 }}
            >
              {popularItems.map((item) => (
                <Pressable
                  key={item.id}
                  style={({ pressed }) => [
                    styles.foodCard,
                    { transform: [{ scale: pressed ? 0.96 : 1 }] }
                  ]}
                >
                  <View style={styles.imageWrapper}>
                    <Image
                      source={{ uri: item.image }}
                      style={styles.foodImage}
                    />
                  </View>

                  <View style={styles.foodInfo}>
                    <Text style={styles.foodName} numberOfLines={2}>
                      {item.name}
                    </Text>

                    <View style={styles.foodBottomRow}>
                      <Text style={styles.foodPrice}>{item.price}</Text>

                      <Pressable 
                        style={({ pressed }) => [
                          styles.addButton,
                          { opacity: pressed ? 0.8 : 1, transform: [{ scale: pressed ? 0.9 : 1 }] }
                        ]}
                      >
                        <Plus size={20} color="#fff" strokeWidth={3} />
                      </Pressable>
                    </View>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  imageContainer: {
    position: 'relative',
    height: 320,
    width: '100%',
  },
  coverImage: {
    width: "100%",
    height: "100%",
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  topButtonsContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  rightButtons: {
    flexDirection: "row",
  },
  glassButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.85)",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  logoWrapper: {
    position: "absolute",
    bottom: -35,
    left: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 6,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  content: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  restaurantName: {
    fontSize: 34,
    fontWeight: "800",
    color: "#000",
    letterSpacing: -1,
  },
  tagsText: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    fontWeight: "500",
  },
  infoButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f4f4f5",
    justifyContent: "center",
    alignItems: "center",
  },
  pillsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    flexWrap: "wrap",
    gap: 10,
  },
  ratingPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fef3c7",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "700",
    color: "#d97706",
  },
  ratingCount: {
    marginLeft: 4,
    fontSize: 13,
    color: "#b45309",
    fontWeight: "500",
  },
  locationPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  locationText: {
    marginLeft: 6,
    fontSize: 13,
    color: "#4b5563",
    fontWeight: "600",
  },
  deliveryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    gap: 12,
  },
  deliveryBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#f3f4f6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  deliveryTime: {
    fontSize: 16,
    fontWeight: "800",
    color: "#000",
  },
  deliveryLabel: {
    marginTop: 2,
    color: "#6b7280",
    fontSize: 12,
    fontWeight: "500",
  },
  offerCardShadow: {
    marginTop: 30,
    shadowColor: "#ef4444",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
    borderRadius: 28,
  },
  offerCardInner: {
    backgroundColor: "#fff1f2",
    borderRadius: 28,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  offerGradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0)',
    zIndex: 1,
  },
  offerTag: {
    backgroundColor: "#fecdd3",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 12,
  },
  offerTagText: {
    color: "#9f1239",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },
  offerTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#881337",
    letterSpacing: -0.5,
  },
  offerSubtitle: {
    marginTop: 8,
    color: "#be123c",
    fontSize: 15,
    lineHeight: 22,
    maxWidth: "90%",
  },
  learnButton: {
    marginTop: 20,
    backgroundColor: "#e11d48",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "flex-start",
    shadowColor: "#e11d48",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  learnButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
  offerImage: {
    position: "absolute",
    right: -40,
    bottom: -30,
    width: 220,
    height: 220,
    resizeMode: "cover",
    zIndex: 0,
  },
  popularSection: {
    marginTop: 35,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#000",
    letterSpacing: -0.5,
  },
  seeAllText: {
    color: "#ef4444",
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 3,
  },
  foodCard: {
    width: 220,
    backgroundColor: "#fff",
    borderRadius: 28,
    marginRight: 20,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  imageWrapper: {
    width: "100%",
    height: 160,
    borderRadius: 20,
    overflow: "hidden",
  },
  foodImage: {
    width: "100%",
    height: "100%",
  },
  foodInfo: {
    paddingTop: 16,
    paddingHorizontal: 4,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    lineHeight: 24,
    height: 48,
  },
  foodBottomRow: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  foodPrice: {
    fontSize: 22,
    fontWeight: "800",
    color: "#000",
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ef4444",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#ef4444",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
});