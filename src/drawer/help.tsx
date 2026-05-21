import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable } from "react-native";
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  HelpCircle,
  Clock,
  Sparkles,
} from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function HelpScreen() {
  const navigation = useNavigation<any>();
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How can I track my food order?",
      answer: "Go to the 'Orders' tab in the bottom tab bar. You will see a detailed list of your ongoing orders with preparation timers, delivery statuses, and unique receipt numbers updated in real-time.",
    },
    {
      id: 2,
      question: "What is the delivery fee policy?",
      answer: "We support a customer-first policy! Delivery is completely FREE for all orders above ₹200 (or $20). For orders below this threshold, a flat delivery fee (₹45 or $2.99) is applied at checkout.",
    },
    {
      id: 3,
      question: "How do I modify my active delivery address?",
      answer: "You can edit your delivery address anytime! Open the Profile drawer, tap 'Edit Profile', modify your Delivery Address row, and click 'Save Changes'. Your new details are cached instantly.",
    },
    {
      id: 4,
      question: "What is your order cancellation & refund policy?",
      answer: "Orders can be fully cancelled before the restaurant accepts them. Refunds are processed automatically and credited back to your original payment card within 2 to 3 business days.",
    },
    {
      id: 5,
      question: "Can I order from multiple diners concurrently?",
      answer: "Yes! Your global cart holds items from multiple different local cafes and restaurants at the same time. You can check them all out in a single grouped order sequence.",
    },
  ];

  const toggleFAQ = (id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (expandedFAQ === id) {
      setExpandedFAQ(null);
    } else {
      setExpandedFAQ(id);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>
        {/* BANNER ACCENT */}
        <View style={styles.banner}>
          <Sparkles size={24} color="#16a34a" style={{ marginBottom: 10 }} />
          <Text style={styles.bannerTitle}>How can we help you?</Text>
          <Text style={styles.bannerSubtitle}>Browse our FAQs or connect with our support agents instantly.</Text>
        </View>

        {/* FAQS ACCORDION SECTION */}
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

        <View style={styles.accordionContainer}>
          {faqs.map((faq) => {
            const isExpanded = expandedFAQ === faq.id;
            return (
              <View key={faq.id} style={[styles.accordionCard, isExpanded && styles.expandedCard]}>
                <Pressable
                  onPress={() => toggleFAQ(faq.id)}
                  style={styles.accordionHeader}
                >
                  <Text style={styles.faqQuestion}>{faq.question}</Text>
                  {isExpanded ? (
                    <ChevronUp size={18} color="#16a34a" strokeWidth={2.5} />
                  ) : (
                    <ChevronDown size={18} color="#666" strokeWidth={2.5} />
                  )}
                </Pressable>

                {isExpanded && (
                  <View style={styles.accordionBody}>
                    <Text style={styles.faqAnswer}>{faq.answer}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* SUPPORT CHANNELS SECTION */}
        <Text style={styles.sectionTitle}>Direct Assistance</Text>

        <View style={styles.supportContainer}>
          {/* PHONE SUPPORT */}
          <Pressable
            style={({ pressed }) => [
              styles.supportCard,
              pressed && styles.cardPressed,
            ]}
          >
            <View style={styles.supportIconBg}>
              <Phone size={22} color="#16a34a" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.supportCardTitle}>Call Hotline Support</Text>
              <Text style={styles.supportCardSub}>Speak to our customer care crew (24/7)</Text>
            </View>
            <ChevronDown size={18} color="#ccc" style={{ transform: [{ rotate: "-90deg" }] }} />
          </Pressable>

          {/* EMAIL SUPPORT */}
          <Pressable
            style={({ pressed }) => [
              styles.supportCard,
              pressed && styles.cardPressed,
            ]}
          >
            <View style={styles.supportIconBg}>
              <Mail size={22} color="#16a34a" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.supportCardTitle}>Email Customer Care</Text>
              <Text style={styles.supportCardSub}>Get resolutions within 30 minutes</Text>
            </View>
            <ChevronDown size={18} color="#ccc" style={{ transform: [{ rotate: "-90deg" }] }} />
          </Pressable>
        </View>

        {/* OFFICE METRIC CARD */}
        <View style={styles.hoursCard}>
          <Clock size={16} color="#666" />
          <Text style={styles.hoursText}>Our Live Agents are online right now</Text>
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
  banner: {
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: "#f4fcf6",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "#eafaf0",
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#0c2e16",
    letterSpacing: -0.5,
  },
  bannerSubtitle: {
    fontSize: 13,
    color: "#476e52",
    lineHeight: 18,
    marginTop: 6,
    fontWeight: "500",
  },
  sectionTitle: {
    marginTop: 25,
    marginBottom: 12,
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: "700",
    color: "#666",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  accordionContainer: {
    marginHorizontal: 20,
    gap: 10,
  },
  accordionCard: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f3f4f6",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  expandedCard: {
    borderColor: "#dcfce7",
    backgroundColor: "#fff",
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    gap: 12,
  },
  faqQuestion: {
    flex: 1,
    fontSize: 15,
    fontWeight: "700",
    color: "#111",
  },
  accordionBody: {
    paddingHorizontal: 18,
    paddingBottom: 18,
    borderTopWidth: 1,
    borderTopColor: "#f9fafb",
  },
  faqAnswer: {
    fontSize: 14,
    color: "#555",
    lineHeight: 22,
    fontWeight: "500",
  },
  supportContainer: {
    marginHorizontal: 20,
    gap: 10,
  },
  supportCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f3f4f6",
    borderRadius: 20,
    padding: 16,
    gap: 12,
  },
  cardPressed: {
    backgroundColor: "#f9fafb",
    opacity: 0.9,
  },
  supportIconBg: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#dcfce7",
    justifyContent: "center",
    alignItems: "center",
  },
  supportCardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111",
  },
  supportCardSub: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
    fontWeight: "500",
  },
  hoursCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    gap: 6,
  },
  hoursText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "600",
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
});