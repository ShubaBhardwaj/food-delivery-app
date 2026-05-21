import React, { createContext, useContext, useState } from "react";
import { Restaurant, MenuItem } from "../data/restaurants";

export interface CartItem {
  restaurant: Restaurant;
  item: MenuItem;
  quantity: number;
}

export interface PlacedOrder {
  id: string;
  restaurantName: string;
  restaurantImage: string;
  itemsSummary: string;
  itemsCount: number;
  totalPrice: number;
  status: "Preparing" | "On the way" | "Delivered";
  time: string;
}

interface CartContextType {
  cartItems: CartItem[];
  orders: PlacedOrder[];
  addToCart: (restaurant: Restaurant, item: MenuItem) => void;
  updateQuantity: (restaurantId: number, itemName: string, change: number) => void;
  removeFromCart: (restaurantId: number, itemName: string) => void;
  clearCart: () => void;
  placeOrder: () => void;
  getCartSubtotal: () => number;
  getOngoingOrdersCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Helper to parse price strings e.g. "₹420" or "$8.49" to numbers
export const parsePriceString = (priceStr: string): number => {
  const cleaned = priceStr.replace(/[₹$,\s]/g, "");
  const val = parseFloat(cleaned);
  return isNaN(val) ? 0 : val;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<PlacedOrder[]>([]);

  const addToCart = (restaurant: Restaurant, item: MenuItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (i) => i.restaurant.id === restaurant.id && i.item.name === item.name
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += 1;
        return newItems;
      } else {
        return [...prevItems, { restaurant, item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (restaurantId: number, itemName: string, change: number) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (i) => i.restaurant.id === restaurantId && i.item.name === itemName
      );

      if (existingItemIndex === -1) return prevItems;

      const newItems = [...prevItems];
      const targetItem = newItems[existingItemIndex];
      const newQty = targetItem.quantity + change;

      if (newQty <= 0) {
        newItems.splice(existingItemIndex, 1);
      } else {
        targetItem.quantity = newQty;
      }
      return newItems;
    });
  };

  const removeFromCart = (restaurantId: number, itemName: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((i) => !(i.restaurant.id === restaurantId && i.item.name === itemName))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const placeOrder = () => {
    if (cartItems.length === 0) return;

    // Group items by restaurant to create placed orders
    const ordersMap: { [restaurantId: number]: CartItem[] } = {};
    cartItems.forEach((cartItem) => {
      const restId = cartItem.restaurant.id;
      if (!ordersMap[restId]) {
        ordersMap[restId] = [];
      }
      ordersMap[restId].push(cartItem);
    });

    const newPlacedOrders: PlacedOrder[] = Object.keys(ordersMap).map((restIdStr) => {
      const restId = parseInt(restIdStr, 10);
      const items = ordersMap[restId];
      const restaurant = items[0].restaurant;

      // Summary: e.g. "2x Butter Chicken, 1x Dal Makhani"
      const itemsSummary = items.map((i) => `${i.quantity}x ${i.item.name}`).join(", ");
      const itemsCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

      // Price calculation
      const totalPrice = items.reduce((acc, curr) => {
        const itemPrice = parsePriceString(curr.item.price);
        return acc + itemPrice * curr.quantity;
      }, 0);

      return {
        id: Math.random().toString(36).substr(2, 9).toUpperCase(),
        restaurantName: restaurant.name,
        restaurantImage: restaurant.image,
        itemsSummary,
        itemsCount,
        totalPrice,
        status: "Preparing", // Start as Preparing
        time: "Just now",
      };
    });

    setOrders((prev) => [...newPlacedOrders, ...prev]);
    setCartItems([]); // Clear the cart
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((acc, curr) => {
      const price = parsePriceString(curr.item.price);
      return acc + price * curr.quantity;
    }, 0);
  };

  const getOngoingOrdersCount = () => {
    return orders.filter((o) => o.status === "Preparing" || o.status === "On the way").length;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        orders,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        placeOrder,
        getCartSubtotal,
        getOngoingOrdersCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
