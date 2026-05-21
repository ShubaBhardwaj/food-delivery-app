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
import { useNavigation, useRoute } from '@react-navigation/native';
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

import { restaurants } from "../../data/restaurants";

const { width } = Dimensions.get('window');

// Beautiful food matching helper based on item names
const getFoodImage = (name: string) => {
  const lowercaseName = name.toLowerCase();
  if (lowercaseName.includes("pizza") || lowercaseName.includes("margherita") || lowercaseName.includes("flatbread")) {
    return "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600";
  }
  if (lowercaseName.includes("burger")) {
    return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600";
  }
  if (lowercaseName.includes("sushi") || lowercaseName.includes("maki") || lowercaseName.includes("roll")) {
    return "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=600";
  }
  if (lowercaseName.includes("noodle") || lowercaseName.includes("pasta") || lowercaseName.includes("alfredo") || lowercaseName.includes("penne") || lowercaseName.includes("spaghetti") || lowercaseName.includes("ravioli") || lowercaseName.includes("pesto")) {
    return "https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=600";
  }
  if (lowercaseName.includes("biryani") || lowercaseName.includes("rice") || lowercaseName.includes("dum")) {
    return "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600";
  }
  if (lowercaseName.includes("chicken") || lowercaseName.includes("kebab") || lowercaseName.includes("tikka") || lowercaseName.includes("mutton") || lowercaseName.includes("korma") || lowercaseName.includes("boti") || lowercaseName.includes("seekh") || lowercaseName.includes("rogan")) {
    return "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=600";
  }
  if (lowercaseName.includes("cake") || lowercaseName.includes("brownie") || lowercaseName.includes("dessert") || lowercaseName.includes("jamun") || lowercaseName.includes("tart") || lowercaseName.includes("macarons") || lowercaseName.includes("eclair") || lowercaseName.includes("phirni") || lowercaseName.includes("kulfi")) {
    return "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=600";
  }
  if (lowercaseName.includes("coffee") || lowercaseName.includes("shake") || lowercaseName.includes("mojito") || lowercaseName.includes("drink") || lowercaseName.includes("beverage") || lowercaseName.includes("lassi") || lowercaseName.includes("frappe") || lowercaseName.includes("brew")) {
    return "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600";
  }
  if (lowercaseName.includes("paneer") || lowercaseName.includes("dal") || lowercaseName.includes("makhani") || lowercaseName.includes("nachos") || lowercaseName.includes("tacos") || lowercaseName.includes("quesadilla") || lowercaseName.includes("hummus") || lowercaseName.includes("falafel") || lowercaseName.includes("appam")) {
    return "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600";
  }
  // Generic fallback
  return "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600";
};

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const route = useRoute<any>();

  // Fetch passed restaurant or fallback to first one in dataset
  const restaurant = route.params?.restaurant || restaurants[0];

  // Derive top 4 popular signature dishes from their actual menu
  const popularItems = React.useMemo(() => {
    const list: any[] = [];
    restaurant.menu.forEach((categoryBlock: any) => {
      categoryBlock.items.forEach((item: any) => {
        list.push({
          id: `${restaurant.id}-${item.name}`,
          name: item.name,
          price: item.price,
          image: getFoodImage(item.name),
        });
      });
    });
    return list.slice(0, 4);
  }, [restaurant]);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        bounces={false}
      >
        {/* TOP COVER IMAGE */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: restaurant.image }}
            style={styles.coverImage}
          />
          <View style={styles.imageOverlay} />

          {/* FLOATING ACTION BUTTONS */}
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
                  <Heart size={22} color="#ef4444" fill="#ef4444" />
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

          {/* FLOATING TEXT LOGO AVATAR */}
          <View style={styles.logoWrapper}>
            <Text style={styles.logoLetter}>
              {restaurant.name.charAt(0)}
            </Text>
          </View>
        </View>

        {/* RESTAURANT INFO BLOCK */}
        <View style={styles.content}>
          {/* RESTAURANT DETAILS */}
          <View style={styles.titleRow}>
            <View style={{ flex: 1, paddingRight: 8 }}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <Text style={styles.tagsText}>{restaurant.cuisine.join(" • ")}</Text>
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

          {/* BADGES & LOCATION */}
          <View style={styles.pillsRow}>
            <View style={styles.ratingPill}>
              <Star size={16} color="#d97706" fill="#d97706" />
              <Text style={styles.ratingText}>{restaurant.rating}</Text>
              <Text style={styles.ratingCount}>({restaurant.reviews})</Text>
            </View>

            <View style={styles.locationPill}>
              <MapPin size={16} color="#4b5563" />
              <Text style={styles.locationText} numberOfLines={1}>{restaurant.location}</Text>
            </View>
          </View>

          {/* DELIVERY & COST SUMMARY */}
          <View style={styles.deliveryContainer}>
            <View style={styles.deliveryBox}>
              <View style={styles.iconCircle}>
                <Clock3 size={20} color="#000" />
              </View>
              <View>
                <Text style={styles.deliveryTime}>{restaurant.deliveryTime}</Text>
                <Text style={styles.deliveryLabel}>Delivery speed</Text>
              </View>
            </View>

            <View style={styles.deliveryBox}>
              <View style={[styles.iconCircle, { backgroundColor: '#f0fdf4' }]}>
                <DollarSign size={20} color="#16a34a" />
              </View>
              <View>
                <Text style={styles.deliveryTime}>{restaurant.deliveryFee === "Free" ? "Free" : restaurant.deliveryFee}</Text>
                <Text style={styles.deliveryLabel}>Delivery fee</Text>
              </View>
            </View>
          </View>

          {/* MINIMUM ORDER / PRICE FOR TWO PILL */}
          <View style={styles.extraPillsRow}>
            <View style={styles.costBadge}>
              <Text style={styles.extraBadgeText}>Cost for Two: {restaurant.priceForTwo}</Text>
            </View>
            <View style={styles.orderBadge}>
              <Text style={styles.extraBadgeText}>Min Order: {restaurant.minOrder}</Text>
            </View>
          </View>

          {/* PROMOTIONAL OFFER BOX */}
          {restaurant.offer && (
            <View style={styles.offerCardShadow}>
              <Pressable 
                style={({ pressed }) => [
                  styles.offerCardInner,
                  { opacity: pressed ? 0.9 : 1, transform: [{ scale: pressed ? 0.98 : 1 }] }
                ]}
              >
                <Image
                  source={{ uri: restaurant.image }}
                  style={styles.offerImage}
                />
                <View style={styles.offerGradient} />
                
                <View style={{ flex: 1, padding: 24, zIndex: 2 }}>
                  <View style={styles.offerTag}>
                    <Text style={styles.offerTagText}>OFFER ACTIVE</Text>
                  </View>
                  <Text style={styles.offerTitle}>{restaurant.offer}</Text>
                  <Text style={styles.offerSubtitle}>
                    Order now to redeem this exclusive discount at {restaurant.name}!
                  </Text>
                  <View style={styles.learnButton}>
                    <Text style={styles.learnButtonText}>Claim Now</Text>
                  </View>
                </View>
              </Pressable>
            </View>
          )}

          {/* SIGNATURE ITEMS HORIZONTAL SLIDER */}
          {popularItems.length > 0 && (
            <View style={styles.popularSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Signature Items</Text>
                <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
                  <Text style={styles.seeAllText}>Scroll Right →</Text>
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
          )}

          {/* FULL CATEGORIZED MENU ITEMS */}
          <View style={styles.menuSection}>
            <Text style={styles.mainMenuHeader}>Browse Menu</Text>
            
            {restaurant.menu.map((categoryObj: any, idx: number) => (
              <View key={idx} style={styles.categoryBlock}>
                <Text style={styles.categoryHeader}>
                  {categoryObj.category} ({categoryObj.items.length})
                </Text>
                <View style={styles.menuDivider} />

                {categoryObj.items.map((item: any, itemIdx: number) => (
                  <View key={itemIdx} style={styles.menuItemRow}>
                    <View style={styles.menuItemDetails}>
                      
                      {/* VEG/NON-VEG BADGE */}
                      <View style={[styles.vegBadge, { borderColor: item.veg ? '#10b981' : '#ef4444' }]}>
                        <View style={[styles.vegDot, { backgroundColor: item.veg ? '#10b981' : '#ef4444' }]} />
                      </View>
                      
                      <Text style={styles.menuItemName}>{item.name}</Text>
                      <Text style={styles.menuItemPrice}>{item.price}</Text>
                      
                      {item.description ? (
                        <Text style={styles.menuItemDescription}>{item.description}</Text>
                      ) : null}
                    </View>

                    {/* MENU ITEM IMAGE WITH OVERLAY ADD BUTTON */}
                    <View style={styles.itemActionContainer}>
                      <Image
                        source={{ uri: getFoodImage(item.name) }}
                        style={styles.menuItemImage}
                      />
                      <Pressable 
                        style={({ pressed }) => [
                          styles.inlineAddButton,
                          { opacity: pressed ? 0.9 : 1, transform: [{ scale: pressed ? 0.95 : 1 }] }
                        ]}
                      >
                        <Text style={styles.inlineAddText}>ADD</Text>
                      </Pressable>
                    </View>
                  </View>
                ))}
              </View>
            ))}
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
    backgroundColor: 'rgba(0,0,0,0.15)',
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
    backgroundColor: "rgba(255,255,255,0.9)",
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
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 15,
    elevation: 6,
  },
  logoLetter: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '900',
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
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
    letterSpacing: -0.5,
  },
  tagsText: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 6,
    fontWeight: "500",
    lineHeight: 20,
  },
  infoButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f3f4f6",
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
    flex: 1,
    minWidth: 150,
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
  extraPillsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
  },
  costBadge: {
    backgroundColor: '#eff6ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  orderBadge: {
    backgroundColor: '#f5f5f7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  extraBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
  },
  offerCardShadow: {
    marginTop: 30,
    shadowColor: "#ef4444",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
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
    backgroundColor: 'rgba(255,241,242,0.4)',
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
    fontSize: 28,
    fontWeight: "900",
    color: "#881337",
    letterSpacing: -0.5,
  },
  offerSubtitle: {
    marginTop: 8,
    color: "#be123c",
    fontSize: 14,
    lineHeight: 20,
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
    width: 200,
    height: 200,
    resizeMode: "cover",
    zIndex: 0,
    opacity: 0.85,
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
    fontSize: 22,
    fontWeight: "800",
    color: "#000",
    letterSpacing: -0.5,
  },
  seeAllText: {
    color: "#ef4444",
    fontWeight: "700",
    fontSize: 14,
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
    shadowOpacity: 0.04,
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
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    lineHeight: 22,
    height: 44,
  },
  foodBottomRow: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  foodPrice: {
    fontSize: 20,
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
  mainMenuHeader: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111827",
    letterSpacing: -0.5,
    marginBottom: 20,
  },
  menuSection: {
    marginTop: 40,
    paddingBottom: 40,
  },
  categoryBlock: {
    marginBottom: 35,
  },
  categoryHeader: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1f2937",
    letterSpacing: -0.3,
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#f3f4f6',
    marginVertical: 12,
  },
  menuItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f9fafb',
  },
  menuItemDetails: {
    flex: 1,
    paddingRight: 20,
  },
  vegBadge: {
    width: 14,
    height: 14,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderRadius: 2,
  },
  vegDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  menuItemPrice: {
    fontSize: 15,
    fontWeight: '800',
    color: '#111827',
    marginTop: 4,
  },
  menuItemDescription: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 6,
    lineHeight: 18,
  },
  itemActionContainer: {
    position: 'relative',
    width: 100,
    height: 105,
    alignItems: 'center',
  },
  menuItemImage: {
    width: 90,
    height: 90,
    borderRadius: 16,
  },
  inlineAddButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#10b981',
    paddingHorizontal: 22,
    paddingVertical: 6,
    borderRadius: 8,
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  inlineAddText: {
    color: '#10b981',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});