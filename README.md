# 🍳 Lokal Diners — Premium Expo Food Delivery Application

Lokal Diners is a high-performance, visually stunning React Native food delivery application built using Expo, TypeScript, and React Navigation. Designed with premium dark/light interfaces, glassmorphism, responsive micro-animations, and full offline/online state persistence. 

---

## 🚀 Key Highlights & Overview

Lokal Diners provides users with an elite, immersive dining exploration experience from registration to tracking hot dishes.

* **🔒 Authenticate-to-Explore Gate**: Built-in authorization filters require users to register and log in before gaining entry to the app's services.
* **📱 Premium Floating Bottom Tabs**: An absolute-positioned, custom floating tab bar with glassmorphic styling, responsive sliding indicators, and dynamic visibility controls.
* **🗺️ Profile Address Propagation**: Real-time delivery address sync across the Home, Cart, and Profile screens via `SecureStore` focus listeners.
* **🛒 Persistent Feast Sync**: Full `SecureStore` persistence for shopping cart items and placed order states. Your active checkout and past orders are retained safely across restarts.
* **📋 Tabbed Feast Hub**: A dedicated "My Feast Hub" panel housing favorited diners (supporting deep links back to restaurant menus) and dynamic billing receipts.
* **💬 Animated FAQ Accordion**: An interactive Help Center utilizing React Native animation layouts for smooth collapsible FAQ sheets.

---

## 🛠️ Complete Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework Core** | React Native (v0.83.6), Expo (v55.0.25) | Unified cross-platform engine with native responsiveness. |
| **Language** | TypeScript (v5.9.2) | Enterprise type-safety with zero runtime failures. |
| **Navigation** | React Navigation (v7.0) | Nested stack, tab, and drawer navigators. |
| **Secure Storage** | Expo SecureStore | Hardware-backed encrypted persistence for tokens, profile details, carts, and orders. |
| **Icons & Art** | Lucide React Native | Modern, ultra-crisp vector icons. |
| **Styling & Layout** | React Native Stylesheets & Safe Area | Tailored HSL palettes, smooth flex containers, absolute floating pills, and safe bottom insets. |
| **Engine Tooling** | Bun | Blazing-fast dependency install and scripts run. |

---

## 📥 How to Run Locally

Get the application running on your device or simulator in under two minutes:

### 1. Prerequisites
Ensure you have **Node.js** and **Bun** installed globally on your machine:
```bash
# Verify Bun installation
bun --version
```
Ensure you have the **Expo Go** application installed on your physical mobile device, or have an iOS Simulator / Android Emulator configured on your computer.

### 2. Clone and Install Dependencies
Navigate into the workspace and run the install command with Bun:
```bash
bun install
```

### 3. Run the Metro Bundler
Start the Expo development server:
```bash
bun start
```

### 4. Deploy to Emulators
Press the corresponding key in your terminal to start on your preferred platform:
* Press **`i`** to launch on the **iOS Simulator**.
* Press **`a`** to launch on the **Android Emulator**.
* Or scan the terminal **QR Code** using your phone's camera (iOS) or the Expo Go app (Android) to test on a physical device.

---

## 🗺️ Navigation Structure

Lokal Diners uses an advanced, highly modular navigation tree to ensure a fluid user flow.

```mermaid
graph TD
    %% Base Entry Gate
    Root[App Entry App.tsx] --> AuthGuard{Is Authenticated?}
    
    %% Auth Stack Gate
    AuthGuard -- No --> Landing[Landing Screen / Let's Explore]
    Landing --> Register[Register Screen]
    Register --> Login[Login Screen]
    Login --> MainDrawer[Primary Custom Drawer]

    %% Main App Structure
    AuthGuard -- Yes --> MainDrawer
    
    %% Drawer Registry
    MainDrawer --> TabBar[Custom Floating Tab Navigator]
    MainDrawer --> DrawerMyOrder[My Feast Hub Screen]
    MainDrawer --> DrawerSettings[Settings Preferences]
    MainDrawer --> DrawerHelp[Help & FAQ Accordion]
    MainDrawer --> DrawerLogout[Sleek Logout confirmation]
    
    %% Bottom Tab Registry
    TabBar --> TabHomeStack[Home Stack]
    TabBar --> TabSearch[Search Screen]
    TabBar --> TabOrders[Active Orders Screen]
    TabBar --> TabProfile[Profile Settings Screen]

    %% Home Stack Detail Screens
    TabHomeStack --> ScreenHome[Home Categories & Feed]
    TabHomeStack --> ScreenRest[Restaurant Detail & Menu]
    TabHomeStack --> ScreenCart[My Cart & Checkout Screen]
```

### Navigation Highlights
* **Tab-Bar Hiding on Detail Views**: The custom absolute tab bar inspects the active nested stack states dynamically. When you view the `Cart` or a `RestaurantScreen` menu, the bottom tab bar slides out of view to maximize spacing.
* **Deep Links**: Selecting a restaurant from Search results or the Favorites drawer automatically redirects you deep into the Home stack's restaurant detail page.

---

## 🔗 Deep Linking Setup

Lokal Diners is fully configured to handle deep linking, making it simple to link users straight to their favorite meals from external sources or push notifications.

### 1. Configuration (`app.json`)
Our scheme is defined inside the Expo configuration under `scheme`:
```json
{
  "expo": {
    "name": "food_delivery",
    "slug": "food_delivery",
    "scheme": "lokaldiners",
    "ios": {
      "bundleIdentifier": "com.shubhambhardwaj.lokaldiners"
    },
    "android": {
      "package": "com.shubhambhardwaj.lokaldiners"
    }
  }
}
```

### 2. URL Redirections
The app handles routing configurations utilizing Expo's linking prefix handlers:
* Open the app: `lokaldiners://`
* Open a restaurant menu directly: `lokaldiners://restaurant/:id`
* Open order details screen: `lokaldiners://order/:id`

To test deep linking locally in your terminal while the bundler is active, run:
```bash
# Android
bun expo start --android --uri "lokaldiners://restaurant/1"

# iOS
bun expo start --ios --uri "lokaldiners://restaurant/1"
```

---

## 📸 Media Showroom

### 🎥 High-Fidelity Recording Demos

You can view complete screen recording walkthroughs showing all interactive segments, transitions, edits, and checkouts:
* **iOS Demonstration**: [Download or View recording file](./assets/demo/ios_food_delivery_app.mov)
* **Android Demonstration**: [Download or View recording file](./assets/demo/android_food_delivery_app.mp4)

---

### 🖼️ Screens Gallery

| Screen | iOS Screen Link | Android Screen Link |
| :--- | :--- | :--- |
| **Let's Explore Landing** | ![iOS Landing](./assets/demo/ios_exploar_screen.png) | ![Android Landing](./assets/demo/android_exploar_screen.jpeg) |
| **Register Account** | ![iOS Register](./assets/demo/ios_register_screen.png) | ![Android Register](./assets/demo/andriod_regster_screen.jpeg) |
| **Login Account** | ![iOS Login](./assets/demo/ios_log_in_screen.png) | ![Android Login](./assets/demo/android_log_in_screen.jpeg) |
| **Home Screen Feed** | ![iOS Home](./assets/demo/ios_home_screen.png) | ![Android Home](./assets/demo/andriod_home_screen.jpeg) |
| **Restaurant Menu Detail** | ![iOS Restaurant](./assets/demo/ios_restaurent_screen.png) | ![Android Restaurant](./assets/demo/andriod_restoren_screen.jpeg) |
| **Dynamic Cart Screen** | ![iOS Cart](./assets/demo/ios_cart_screen.png) | ![Android Cart](./assets/demo/andriod_cart_screen.jpeg) |
| **Search Cuisines** | ![iOS Search](./assets/demo/ios_search_screen.png) | ![Android Search](./assets/demo/andriod_search_screen.jpeg) |
| **Active Placed Orders** | ![iOS Orders](./assets/demo/ios_orders_screen.png) | ![Android Orders](./assets/demo/andriod_order_screen.jpeg) |
| **User Profile Settings** | ![iOS Profile](./assets/demo/ios_profile_screen.png) | ![Android Profile](./assets/demo/andriod_profile_screen.jpeg) |
| **Feast Hub & Favorites** | ![iOS Feast Hub](./assets/demo/ios_my_order_screen.png) | ![Android Feast Hub](./assets/demo/andriod_my_order_screen.jpeg) |
| **Settings Preferences** | ![iOS Settings](./assets/demo/ios_setting_screen.png) | ![Android Settings](./assets/demo/andriod_setting_screen.jpeg) |
| **Help & FAQ Accordion** | ![iOS Help](./assets/demo/ios_help_screen.png) | ![Android Help](./assets/demo/andriod_help_screen.jpeg) |
| **Logout Confirmation** | ![iOS Logout](./assets/demo/ios_logout_screen.png) | ![Android Logout](./assets/demo/andriod_logout_screen.jpeg) |

---

## 💡 Assumptions Made

* **Hardware-Backed Syncing**: We assumed that using hardware-backed SecureStore persistence (up to `2KB` per entry) is the ideal design choice for local storage. This is secure, reliable, and perfectly sized to host user authentication profiles, cart items, and active orders.
* **Offline Mock Auth Bypasses**: In the absence of a live network connection, the auth service falls back gracefully to local credential storage and includes a seamless *Bypass Auth* utility to allow complete offline functionality.
* **One Checkout Receipt per Diner**: When placing a checkout containing dishes from multiple restaurants, the application groups items by restaurant and builds separate, clean receipt tickets. This mirrors standard real-world delivery workflows.
* **Tactile Feedback Preference**: Since the user requested using modern component states and avoiding touch opacity overlays, all interactive modules strictly implement `Pressable` structures configured with custom scaling transforms (`scale: 0.98` on click) for premium tactile feedback.
