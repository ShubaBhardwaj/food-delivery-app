export interface MenuItem {
  name: string;
  price: string;
  veg: boolean;
  description: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface Restaurant {
  id: number;
  name: string;
  rating: string;
  reviews: string;
  cuisine: string[];
  priceForTwo: string;
  location: string;
  distance: string;
  offer: string;
  deliveryTime: string;
  deliveryFee: string;
  isPromoted: boolean;
  minOrder: string;
  image: string;
  menu: MenuCategory[];
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Connaught Club House",
    rating: "4.3",
    reviews: "4,200+ ratings",
    cuisine: ["North Indian", "Mughlai", "Italian", "Continental", "Asian", "Fast Food", "Desserts"],
    priceForTwo: "₹3,000",
    location: "Connaught Place, New Delhi",
    distance: "1 km",
    offer: "Flat 10% OFF",
    deliveryTime: "35-45 min",
    deliveryFee: "₹45",
    isPromoted: true,
    minOrder: "₹200",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000",
    menu: [
      {
        category: "Starters",
        items: [
          { name: "Paneer Tikka", price: "₹420", veg: true, description: "Charcoal grilled cottage cheese cubes." },
          { name: "Chicken Malai Tikka", price: "₹520", veg: false, description: "Creamy chicken kebabs with spices." },
          { name: "Crispy Corn", price: "₹350", veg: true, description: "Fried sweet corn tossed in spices." }
        ],
      },
      {
        category: "Main Course",
        items: [
          { name: "Butter Chicken", price: "₹620", veg: false, description: "Classic creamy Delhi style butter chicken." },
          { name: "Dal Makhani", price: "₹420", veg: true, description: "Slow cooked black lentils with butter." },
          { name: "Mutton Rogan Josh", price: "₹750", veg: false, description: "Traditional Kashmiri style mutton curry." }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Gulab Jamun", price: "₹180", veg: true, description: "Soft milk dumplings in sugar syrup." },
          { name: "Sizzling Brownie", price: "₹250", veg: true, description: "Warm brownie topped with vanilla ice cream." }
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Farzi Cafe",
    rating: "4.2",
    reviews: "5,800+ ratings",
    cuisine: ["Bar Food", "North Indian", "Burger", "Biryani", "Fast Food"],
    priceForTwo: "₹3,000",
    location: "Connaught Place, New Delhi",
    distance: "1.3 km",
    offer: "Flat 10% OFF",
    deliveryTime: "40-50 min",
    deliveryFee: "Free",
    isPromoted: false,
    minOrder: "₹300",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
    menu: [
      {
        category: "Small Plates",
        items: [
          { name: "Tempura Prawns", price: "₹690", veg: false, description: "Crispy prawns with spicy mayo." },
          { name: "Farzi Paneer", price: "₹480", veg: true, description: "Signature molecular paneer dish." },
          { name: "Dal Chawal Arancini", price: "₹420", veg: true, description: "Italian twist to classic Indian dal chawal." }
        ],
      },
      {
        category: "Mains",
        items: [
          { name: "Mutton Biryani", price: "₹720", veg: false, description: "Aromatic dum cooked biryani." },
          { name: "Butter Chicken", price: "₹650", veg: false, description: "Rich tomato butter gravy chicken." },
          { name: "Paneer Makhani", price: "₹550", veg: true, description: "Rich tomato gravy with cottage cheese." }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Parle G Cheesecake", price: "₹380", veg: true, description: "Nostalgic cheesecake with a Parle-G base." },
          { name: "Rasmalai Tres Leches", price: "₹420", veg: true, description: "Fusion dessert with milky sponge." }
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Out Of The Box Courtyard",
    rating: "4.1",
    reviews: "3,400+ ratings",
    cuisine: ["Continental", "North Indian", "Italian", "Pizza", "Chinese"],
    priceForTwo: "₹3,000",
    location: "Connaught Place, New Delhi",
    distance: "1.2 km",
    offer: "Flat 20% OFF",
    deliveryTime: "30-45 min",
    deliveryFee: "₹50",
    isPromoted: true,
    minOrder: "₹150",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000",
    menu: [
      {
        category: "Pizza",
        items: [
          { name: "Farmhouse Pizza", price: "₹540", veg: true, description: "Loaded with fresh vegetables and cheese." },
          { name: "Pepperoni Pizza", price: "₹620", veg: false, description: "Classic pepperoni with mozzarella." },
          { name: "Margherita", price: "₹450", veg: true, description: "Classic cheese and tomato pizza." }
        ],
      },
      {
        category: "Chinese",
        items: [
          { name: "Chilli Chicken", price: "₹520", veg: false, description: "Spicy wok tossed chicken." },
          { name: "Veg Manchurian", price: "₹450", veg: true, description: "Fried vegetable balls in dark soy sauce." },
          { name: "Hakka Noodles", price: "₹380", veg: true, description: "Wok-tossed noodles with veggies." }
        ],
      },
      {
        category: "Beverages",
        items: [
          { name: "Classic Mojito", price: "₹290", veg: true, description: "Refreshing mint and lime mocktail." },
          { name: "Cold Coffee", price: "₹250", veg: true, description: "Thick, creamy iced coffee." }
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Local",
    rating: "4.2",
    reviews: "2,700+ ratings",
    cuisine: ["North Indian", "Continental", "Mexican", "Italian"],
    priceForTwo: "₹2,600",
    location: "Connaught Place, New Delhi",
    distance: "1.2 km",
    offer: "Flat 20% OFF",
    deliveryTime: "25-35 min",
    deliveryFee: "₹35",
    isPromoted: false,
    minOrder: "₹199",
    image: "https://images.unsplash.com/photo-1515669097368-22e68427d265?q=80&w=1000",
    menu: [
      {
        category: "Mexican",
        items: [
          { name: "Loaded Nachos", price: "₹420", veg: true, description: "Nachos with cheese sauce and salsa." },
          { name: "Chicken Tacos", price: "₹480", veg: false, description: "Soft tacos with grilled chicken filling." },
          { name: "Veg Quesadilla", price: "₹450", veg: true, description: "Cheesy grilled tortilla with veggies." }
        ],
      },
      {
        category: "Italian",
        items: [
          { name: "Penne Alfredo", price: "₹520", veg: true, description: "Rich creamy white sauce pasta." },
          { name: "Spaghetti Bolognese", price: "₹620", veg: false, description: "Classic Italian meat sauce pasta." },
          { name: "Garlic Bread with Cheese", price: "₹280", veg: true, description: "Toasted baguette with mozzarella." }
        ],
      },
      {
        category: "North Indian",
        items: [
          { name: "Paneer Tikka Masala", price: "₹490", veg: true, description: "Spicy gravy with paneer tikka chunks." },
          { name: "Garlic Naan", price: "₹120", veg: true, description: "Traditional Indian flatbread with garlic." }
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Ivoryy Fusion Bar",
    rating: "4.2",
    reviews: "2,100+ ratings",
    cuisine: ["Cafe", "Asian", "Modern Indian"],
    priceForTwo: "₹3,000",
    location: "Connaught Place, New Delhi",
    distance: "1.1 km",
    offer: "Flat 30% OFF",
    deliveryTime: "40-55 min",
    deliveryFee: "Free",
    isPromoted: true,
    minOrder: "₹350",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
    menu: [
      {
        category: "Asian Specials",
        items: [
          { name: "Sushi Platter", price: "₹890", veg: false, description: "Assorted sushi rolls and nigiri." },
          { name: "Veg Dim Sums", price: "₹450", veg: true, description: "Steamed vegetable dumplings." },
          { name: "Pad Thai Noodles", price: "₹520", veg: true, description: "Classic sweet and tangy Thai noodles." }
        ],
      },
      {
        category: "Modern Indian",
        items: [
          { name: "Truffle Cheese Kulcha", price: "₹490", veg: true, description: "Indian bread stuffed with truffle cheese." },
          { name: "Galouti Kebab", price: "₹680", veg: false, description: "Melt-in-mouth lamb kebabs." },
          { name: "Butter Chicken Taco", price: "₹520", veg: false, description: "Makhani chicken stuffed in soft tacos." }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Rasmalai Tres Leches", price: "₹450", veg: true, description: "Fusion milk cake dessert." },
          { name: "Chocolate Fondant", price: "₹390", veg: true, description: "Gooey chocolate center served with ice cream." }
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Brewtally Honest",
    rating: "4.5",
    reviews: "6,000+ ratings",
    cuisine: ["North Indian", "Pizza", "Pasta", "Chinese", "Desserts"],
    priceForTwo: "₹2,500",
    location: "Connaught Place, New Delhi",
    distance: "1.4 km",
    offer: "Flat 10% OFF",
    deliveryTime: "30-40 min",
    deliveryFee: "₹40",
    isPromoted: false,
    minOrder: "₹200",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    menu: [
      {
        category: "Pasta",
        items: [
          { name: "Alfredo Pasta", price: "₹520", veg: true, description: "Creamy white sauce pasta." },
          { name: "Chicken Arrabiata", price: "₹580", veg: false, description: "Spicy red sauce pasta." },
          { name: "Pesto Penne", price: "₹550", veg: true, description: "Fresh basil pesto sauce pasta." }
        ],
      },
      {
        category: "Pizza",
        items: [
          { name: "Classic Margherita", price: "₹450", veg: true, description: "Simple cheese and basil." },
          { name: "BBQ Chicken Pizza", price: "₹620", veg: false, description: "Smoky BBQ sauce and chicken chunks." },
          { name: "Veggie Overload Pizza", price: "₹580", veg: true, description: "Topped with olives, bell peppers, and corn." }
        ],
      },
      {
        category: "Chinese",
        items: [
          { name: "Chilli Paneer", price: "₹420", veg: true, description: "Wok-tossed spicy cottage cheese." },
          { name: "Spring Rolls", price: "₹350", veg: true, description: "Crispy rolls stuffed with veggies." }
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Shang Palace",
    rating: "4.6",
    reviews: "3,900+ ratings",
    cuisine: ["Asian", "Seafood", "Sichuan"],
    priceForTwo: "₹4,000",
    location: "Connaught Place, New Delhi",
    distance: "834 m",
    offer: "Flat 15% OFF",
    deliveryTime: "45-60 min",
    deliveryFee: "₹80",
    isPromoted: true,
    minOrder: "₹500",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1000",
    menu: [
      {
        category: "Chinese",
        items: [
          { name: "Kung Pao Chicken", price: "₹820", veg: false, description: "Authentic Sichuan chicken preparation." },
          { name: "Veg Hakka Noodles", price: "₹520", veg: true, description: "Wok tossed noodles with vegetables." },
          { name: "Dim Sum Basket", price: "₹750", veg: false, description: "Assorted meat and seafood dumplings." }
        ],
      },
      {
        category: "Seafood",
        items: [
          { name: "Chilli Garlic Prawns", price: "₹1200", veg: false, description: "Jumbo prawns in spicy sauce." },
          { name: "Steamed Fish", price: "₹1100", veg: false, description: "Fresh fish in soy and ginger sauce." },
          { name: "Butter Garlic Lobster", price: "₹2500", veg: false, description: "Premium lobster tail cooked in butter garlic." }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Date Pancake", price: "₹450", veg: true, description: "Crispy pancake with sweet date filling." },
          { name: "Coconut Dumplings", price: "₹480", veg: true, description: "Sweet sticky rice flour dessert." }
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Mount Fuji Japanese Pan Asian Restaurant",
    rating: "4.7",
    reviews: "2,500+ ratings",
    cuisine: ["Japanese", "Asian", "Thai", "Sushi"],
    priceForTwo: "₹2,500",
    location: "Connaught Place, New Delhi",
    distance: "1.4 km",
    offer: "Flat 10% OFF",
    deliveryTime: "40-55 min",
    deliveryFee: "₹60",
    isPromoted: false,
    minOrder: "₹250",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1000",
    menu: [
      {
        category: "Japanese",
        items: [
          { name: "Salmon Sushi", price: "₹920", veg: false, description: "Fresh salmon sushi rolls." },
          { name: "Chicken Ramen", price: "₹650", veg: false, description: "Japanese ramen in rich broth." },
          { name: "Tempura Udon", price: "₹580", veg: true, description: "Thick noodles in broth with crisp veggies." }
        ],
      },
      {
        category: "Sushi",
        items: [
          { name: "Spicy Tuna Roll", price: "₹850", veg: false, description: "Tuna and spicy mayo maki." },
          { name: "Veggie Maki", price: "₹450", veg: true, description: "Cucumber and avocado rolls." },
          { name: "California Roll", price: "₹720", veg: false, description: "Crab meat, avocado, and cucumber." }
        ],
      },
      {
        category: "Thai",
        items: [
          { name: "Green Thai Curry", price: "₹620", veg: true, description: "Coconut milk based spicy curry." },
          { name: "Pad Thai Chicken", price: "₹680", veg: false, description: "Classic Thai street noodles." }
        ],
      },
    ],
  },
  {
    id: 9,
    name: "38 Barracks",
    rating: "4.6",
    reviews: "3,200+ ratings",
    cuisine: ["North Indian", "Biryani", "Chinese"],
    priceForTwo: "₹2,000",
    location: "Connaught Place, New Delhi",
    distance: "1.5 km",
    offer: "Flat 15% OFF",
    deliveryTime: "35-45 min",
    deliveryFee: "₹45",
    isPromoted: false,
    minOrder: "₹200",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000",
    menu: [
      {
        category: "Indian",
        items: [
          { name: "Chicken Biryani", price: "₹540", veg: false, description: "Traditional dum style biryani." },
          { name: "Paneer Lababdar", price: "₹420", veg: true, description: "Rich tomato gravy paneer curry." },
          { name: "Dal Tadka", price: "₹350", veg: true, description: "Yellow lentils tempered with ghee." }
        ],
      },
      {
        category: "Chinese",
        items: [
          { name: "Honey Chilli Potato", price: "₹320", veg: true, description: "Crispy fries tossed in sweet & spicy sauce." },
          { name: "Chicken Manchurian", price: "₹480", veg: false, description: "Minced chicken balls in soy gravy." },
          { name: "Veg Fried Rice", price: "₹350", veg: true, description: "Wok-tossed rice with seasonal veggies." }
        ],
      },
      {
        category: "Bar Bites",
        items: [
          { name: "Masala Peanuts", price: "₹180", veg: true, description: "Spicy peanut salad mix." },
          { name: "Crispy Corn", price: "₹250", veg: true, description: "Fried corn kernels with chat masala." }
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Sly Granny",
    rating: "4.4",
    reviews: "2,000+ ratings",
    cuisine: ["Italian", "European", "Bar Food"],
    priceForTwo: "₹3,500",
    location: "Khan Market, New Delhi",
    distance: "3.3 km",
    offer: "Flat 10% OFF",
    deliveryTime: "40-55 min",
    deliveryFee: "₹65",
    isPromoted: true,
    minOrder: "₹300",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000",
    menu: [
      {
        category: "European",
        items: [
          { name: "Truffle Fries", price: "₹390", veg: true, description: "French fries tossed with truffle oil." },
          { name: "Grilled Chicken Steak", price: "₹890", veg: false, description: "Served with mashed potatoes." },
          { name: "Mushroom Risotto", price: "₹750", veg: true, description: "Creamy arborio rice with wild mushrooms." }
        ],
      },
      {
        category: "Italian",
        items: [
          { name: "Spaghetti Carbonara", price: "₹720", veg: false, description: "Classic egg and bacon pasta." },
          { name: "Margherita Flatbread", price: "₹550", veg: true, description: "Thin crust with fresh mozzarella." },
          { name: "Ravioli Rosa", price: "₹680", veg: true, description: "Spinach stuffed ravioli in pink sauce." }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Apple Pie", price: "₹420", veg: true, description: "Warm pie with vanilla ice cream." },
          { name: "Classic Tiramisu", price: "₹480", veg: true, description: "Coffee-soaked ladyfingers with mascarpone." }
        ],
      },
    ],
  },
  {
    id: 11,
    name: "Silq",
    rating: "4.3",
    reviews: "1,800+ ratings",
    cuisine: ["Mediterranean", "Mughlai", "Modern Indian"],
    priceForTwo: "₹4,000",
    location: "Chanakyapuri, New Delhi",
    distance: "3.6 km",
    offer: "Flat 15% OFF",
    deliveryTime: "45-55 min",
    deliveryFee: "₹70",
    isPromoted: false,
    minOrder: "₹400",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=1000",
    menu: [
      {
        category: "Mediterranean",
        items: [
          { name: "Hummus Platter", price: "₹450", veg: true, description: "Served with pita bread." },
          { name: "Lamb Kebabs", price: "₹780", veg: false, description: "Juicy grilled lamb kebabs." },
          { name: "Falafel Wrap", price: "₹420", veg: true, description: "Crispy falafels wrapped in fresh pita." }
        ],
      },
      {
        category: "Mughlai",
        items: [
          { name: "Chicken Tikka", price: "₹550", veg: false, description: "Spiced yogurt marinated chicken." },
          { name: "Nihari", price: "₹890", veg: false, description: "Slow-cooked lamb stew." },
          { name: "Mutton Korma", price: "₹750", veg: false, description: "Rich and creamy mutton curry." }
        ],
      },
      {
        category: "Modern Indian",
        items: [
          { name: "Truffle Naan", price: "₹280", veg: true, description: "Soft naan brushed with truffle butter." },
          { name: "Baked Rabri", price: "₹350", veg: true, description: "Traditional rabri baked to perfection." }
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Sana - Di - Ge",
    rating: "4.8",
    reviews: "4,900+ ratings",
    cuisine: ["South Indian", "Goan", "Kerala"],
    priceForTwo: "₹3,700",
    location: "Chanakyapuri, New Delhi",
    distance: "3.5 km",
    offer: "Flat 20% OFF",
    deliveryTime: "40-50 min",
    deliveryFee: "₹65",
    isPromoted: true,
    minOrder: "₹250",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000",
    menu: [
      {
        category: "South Indian",
        items: [
          { name: "Appam with Stew", price: "₹520", veg: true, description: "Soft appam with Kerala vegetable stew." },
          { name: "Prawn Ghee Roast", price: "₹850", veg: false, description: "Spicy coastal style prawns." },
          { name: "Chicken Chettinad", price: "₹680", veg: false, description: "Spicy roasted coconut chicken curry." }
        ],
      },
      {
        category: "Goan",
        items: [
          { name: "Goan Fish Curry", price: "₹790", veg: false, description: "Tangy and spicy coconut based curry." },
          { name: "Pork Vindaloo", price: "₹720", veg: false, description: "Traditional spicy and sour pork." },
          { name: "Chicken Cafreal", price: "₹690", veg: false, description: "Goan green masala marinated chicken." }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Elaneer Payasam", price: "₹320", veg: true, description: "Tender coconut kheer." },
          { name: "Jaggery Ice Cream", price: "₹280", veg: true, description: "Homemade palm jaggery ice cream." }
        ],
      },
    ],
  },
  {
    id: 13,
    name: "Masaldani",
    rating: "3.6",
    reviews: "1,200+ ratings",
    cuisine: ["North Indian", "Seafood", "Lucknowi"],
    priceForTwo: "₹2,200",
    location: "Sector 50, Noida",
    distance: "17.1 km",
    offer: "Flat 10% OFF",
    deliveryTime: "45-60 min",
    deliveryFee: "₹80",
    isPromoted: false,
    minOrder: "₹199",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000",
    menu: [
      {
        category: "Lucknowi",
        items: [
          { name: "Galouti Kebab", price: "₹620", veg: false, description: "Soft melt-in-mouth kebabs." },
          { name: "Awadhi Biryani", price: "₹680", veg: false, description: "Fragrant slow-cooked mutton biryani." },
          { name: "Sheermal", price: "₹150", veg: true, description: "Saffron-flavored slightly sweet flatbread." }
        ],
      },
      {
        category: "North Indian",
        items: [
          { name: "Dal Makhani", price: "₹380", veg: true, description: "Overnight cooked black lentils." },
          { name: "Butter Chicken", price: "₹590", veg: false, description: "Creamy tomato-based chicken curry." },
          { name: "Paneer Lababdar", price: "₹450", veg: true, description: "Paneer cooked in a rich onion tomato gravy." }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Shahi Tukda", price: "₹250", veg: true, description: "Fried bread soaked in rabri." },
          { name: "Kesari Kulfi", price: "₹180", veg: true, description: "Traditional saffron ice cream." }
        ],
      },
    ],
  },
  {
    id: 14,
    name: "Xero Degrees",
    rating: "4.2",
    reviews: "7,100+ ratings",
    cuisine: ["Italian", "Pizza", "Burger", "Desserts"],
    priceForTwo: "₹700",
    location: "Rajinder Nagar, New Delhi",
    distance: "3 km",
    offer: "Flat 10% OFF",
    deliveryTime: "20-30 min",
    deliveryFee: "₹30",
    isPromoted: true,
    minOrder: "₹99",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000",
    menu: [
      {
        category: "Fast Food",
        items: [
          { name: "Loaded Fries", price: "₹260", veg: true, description: "Cheese loaded crispy fries." },
          { name: "Chicken Burger", price: "₹320", veg: false, description: "Juicy chicken burger." },
          { name: "Veg Club Sandwich", price: "₹220", veg: true, description: "Triple layered sandwich with fries." }
        ],
      },
      {
        category: "Pizza",
        items: [
          { name: "Cheese Burst Pizza", price: "₹380", veg: true, description: "Overflowing with liquid cheese." },
          { name: "Veggie Supreme", price: "₹320", veg: true, description: "Topped with bell peppers and olives." },
          { name: "Chicken Tikka Pizza", price: "₹390", veg: false, description: "Desi twist to Italian classic." }
        ],
      },
      {
        category: "Shakes",
        items: [
          { name: "Oreo Shake", price: "₹190", veg: true, description: "Thick shake blended with Oreos." },
          { name: "Nutella Shake", price: "₹220", veg: true, description: "Rich hazelnut chocolate shake." }
        ],
      },
    ],
  },
  {
    id: 15,
    name: "Covah - The Cavern",
    rating: "4.1",
    reviews: "1,900+ ratings",
    cuisine: ["Japanese", "Italian", "Mediterranean"],
    priceForTwo: "₹4,000",
    location: "Sector 43, Gurgaon",
    distance: "22 km",
    offer: "Flat 15% OFF",
    deliveryTime: "50-65 min",
    deliveryFee: "₹100",
    isPromoted: false,
    minOrder: "₹500",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
    menu: [
      {
        category: "Fusion",
        items: [
          { name: "Mediterranean Pizza", price: "₹760", veg: true, description: "Thin crust gourmet pizza." },
          { name: "Sushi Taco", price: "₹650", veg: false, description: "Crispy seaweed taco with salmon." },
          { name: "Truffle Edamame", price: "₹480", veg: true, description: "Steamed beans with truffle oil." }
        ],
      },
      {
        category: "Japanese",
        items: [
          { name: "Spicy Miso Ramen", price: "₹820", veg: false, description: "Noodles in rich pork broth." },
          { name: "Ebi Tempura", price: "₹720", veg: false, description: "Crispy fried jumbo prawns." },
          { name: "Chicken Teriyaki Bowl", price: "₹650", veg: false, description: "Grilled chicken with sweet soy glaze over rice." }
        ],
      },
      {
        category: "Italian",
        items: [
          { name: "Pesto Pasta", price: "₹680", veg: true, description: "Fresh basil pesto and pine nuts." },
          { name: "Tiramisu", price: "₹450", veg: true, description: "Coffee-soaked Italian dessert." }
        ],
      },
    ],
  },
  {
    id: 16,
    name: "Chili's Grill & Bar",
    rating: "4.7",
    reviews: "8,000+ ratings",
    cuisine: ["Mexican", "Burger", "Tex-Mex"],
    priceForTwo: "₹1,600",
    location: "DLF Cyber City, Gurgaon",
    distance: "18.8 km",
    offer: "Flat 20% OFF",
    deliveryTime: "40-55 min",
    deliveryFee: "₹60",
    isPromoted: true,
    minOrder: "₹250",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1000",
    menu: [
      {
        category: "Mexican",
        items: [
          { name: "Chicken Nachos", price: "₹580", veg: false, description: "Loaded nachos with chicken." },
          { name: "Veg Quesadilla", price: "₹450", veg: true, description: "Cheese and bean stuffed tortilla." },
          { name: "Beef Tacos", price: "₹620", veg: false, description: "Crispy shells with seasoned beef." }
        ],
      },
      {
        category: "Burgers",
        items: [
          { name: "Classic Burger", price: "₹620", veg: false, description: "American style grilled burger." },
          { name: "Crispy Chicken Burger", price: "₹580", veg: false, description: "Southern fried chicken patty." },
          { name: "Mushroom Swiss Burger", price: "₹650", veg: false, description: "Beef patty with sautéed mushrooms and Swiss cheese." }
        ],
      },
      {
        category: "Tex-Mex",
        items: [
          { name: "Chicken Fajitas", price: "₹750", veg: false, description: "Sizzling platter with tortillas." },
          { name: "Churros", price: "₹350", veg: true, description: "Fried dough pastry with chocolate dip." }
        ],
      },
    ],
  },
  {
    id: 17,
    name: "Green Mantis",
    rating: "4.4",
    reviews: "2,600+ ratings",
    cuisine: ["Asian", "Chinese", "Sushi"],
    priceForTwo: "₹3,500",
    location: "Khan Market, New Delhi",
    distance: "3.3 km",
    offer: "Flat 10% OFF",
    deliveryTime: "35-50 min",
    deliveryFee: "₹50",
    isPromoted: false,
    minOrder: "₹300",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1000",
    menu: [
      {
        category: "Asian",
        items: [
          { name: "Dragon Roll Sushi", price: "₹940", veg: false, description: "Signature sushi rolls." },
          { name: "Pad Thai", price: "₹650", veg: true, description: "Stir-fried rice noodles with peanuts." },
          { name: "Dim Sum Basket", price: "₹580", veg: true, description: "Assorted steamed veggie dumplings." }
        ],
      },
      {
        category: "Chinese",
        items: [
          { name: "Chilli Chicken", price: "₹620", veg: false, description: "Spicy soy-glazed chicken." },
          { name: "Veg Hakka Noodles", price: "₹450", veg: true, description: "Classic wok-tossed noodles." },
          { name: "Sweet & Sour Prawns", price: "₹850", veg: false, description: "Prawns tossed in classic sweet and sour sauce." }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Matcha Ice Cream", price: "₹380", veg: true, description: "Green tea flavored ice cream." },
          { name: "Mochi", price: "₹420", veg: true, description: "Japanese sweet rice cakes." }
        ],
      },
    ],
  },
  {
    id: 18,
    name: "Noida Social",
    rating: "4.5",
    reviews: "5,500+ ratings",
    cuisine: ["North Indian", "Fast Food", "Korean"],
    priceForTwo: "₹1,500",
    location: "Sector 18, Noida",
    distance: "12.6 km",
    offer: "Flat 20% OFF",
    deliveryTime: "30-45 min",
    deliveryFee: "₹50",
    isPromoted: true,
    minOrder: "₹200",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1000",
    menu: [
      {
        category: "Street Style",
        items: [
          { name: "Butter Chicken Biryani", price: "₹520", veg: false, description: "Fusion style biryani." },
          { name: "Vada Pav", price: "₹190", veg: true, description: "Mumbai's favorite street food." },
          { name: "Keema Pav", price: "₹380", veg: false, description: "Spicy minced meat with buttery pav." }
        ],
      },
      {
        category: "Fast Food",
        items: [
          { name: "Social Burger", price: "₹450", veg: false, description: "Signature beef/chicken burger." },
          { name: "Peri Peri Fries", price: "₹250", veg: true, description: "Spicy tossed french fries." },
          { name: "Cheese Chilli Toast", price: "₹280", veg: true, description: "Toasted bread with melted cheese and chillies." }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Long Island Iced Tea", price: "₹550", veg: true, description: "Classic cocktail." },
          { name: "Cold Coffee", price: "₹220", veg: true, description: "Thick chilled coffee blend." }
        ],
      },
    ],
  },
  {
    id: 19,
    name: "Tranzit",
    rating: "4.5",
    reviews: "2,100+ ratings",
    cuisine: ["Asian", "European"],
    priceForTwo: "₹3,900",
    location: "Khan Market, New Delhi",
    distance: "3.2 km",
    offer: "Flat 15% OFF",
    deliveryTime: "35-50 min",
    deliveryFee: "₹60",
    isPromoted: false,
    minOrder: "₹350",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1000",
    menu: [
      {
        category: "European",
        items: [
          { name: "Cheese Croquettes", price: "₹420", veg: true, description: "Crispy cheese stuffed croquettes." },
          { name: "Fish & Chips", price: "₹750", veg: false, description: "Beer-battered fish with fries." },
          { name: "Roast Chicken", price: "₹850", veg: false, description: "Herb roasted half chicken." }
        ],
      },
      {
        category: "Asian",
        items: [
          { name: "Sushi Platter", price: "₹1100", veg: false, description: "Chef's selection of premium sushi." },
          { name: "Chilli Paneer Dry", price: "₹480", veg: true, description: "Spicy wok-tossed cottage cheese." },
          { name: "Prawn Har Gow", price: "₹550", veg: false, description: "Steamed prawn dumplings." }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "New York Cheesecake", price: "₹520", veg: true, description: "Classic dense cheesecake." },
          { name: "Chocolate Brownie", price: "₹380", veg: true, description: "Fudgy brownie with ice cream." }
        ],
      },
    ],
  },
  {
    id: 20,
    name: "The Big Tree",
    rating: "4.5",
    reviews: "3,000+ ratings",
    cuisine: ["North Indian", "Pizza", "Cafe"],
    priceForTwo: "₹1,600",
    location: "Sector 53, Gurgaon",
    distance: "23.1 km",
    offer: "Flat 15% OFF",
    deliveryTime: "45-60 min",
    deliveryFee: "₹70",
    isPromoted: true,
    minOrder: "₹200",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000",
    menu: [
      {
        category: "Cafe",
        items: [
          { name: "Cold Coffee", price: "₹240", veg: true, description: "Classic chilled coffee." },
          { name: "Mocha Frappe", price: "₹280", veg: true, description: "Blended coffee with chocolate syrup." },
          { name: "Cappuccino", price: "₹190", veg: true, description: "Hot frothy espresso drink." }
        ],
      },
      {
        category: "Pizza",
        items: [
          { name: "Margherita", price: "₹420", veg: true, description: "Fresh tomato sauce and mozzarella." },
          { name: "Pepperoni", price: "₹550", veg: false, description: "Loaded with sliced pepperoni." },
          { name: "Chicken Tikka Pizza", price: "₹580", veg: false, description: "Spicy chicken topped pizza." }
        ],
      },
      {
        category: "North Indian",
        items: [
          { name: "Paneer Tikka", price: "₹380", veg: true, description: "Tandoor grilled cottage cheese." },
          { name: "Butter Chicken", price: "₹520", veg: false, description: "Creamy rich chicken gravy." }
        ],
      },
    ],
  },
  {
    id: 21,
    name: "La Croute",
    rating: "4.6",
    reviews: "1,900+ ratings",
    cuisine: ["Continental", "Desserts"],
    priceForTwo: "₹2,100",
    location: "Sunder Nagar, New Delhi",
    distance: "4 km",
    offer: "Flat 15% OFF",
    deliveryTime: "30-45 min",
    deliveryFee: "₹40",
    isPromoted: false,
    minOrder: "₹250",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000",
    menu: [
      {
        category: "Desserts",
        items: [
          { name: "Chocolate Tart", price: "₹320", veg: true, description: "Rich dark chocolate tart." },
          { name: "French Macarons", price: "₹450", veg: true, description: "Assorted box of 5 macarons." },
          { name: "Classic Eclair", price: "₹250", veg: true, description: "Choux pastry filled with cream." }
        ],
      },
      {
        category: "Continental",
        items: [
          { name: "Grilled Lemon Fish", price: "₹720", veg: false, description: "Served with butter garlic sauce." },
          { name: "Caesar Salad", price: "₹380", veg: true, description: "Fresh greens with parmesan." },
          { name: "Mushroom Stroganoff", price: "₹520", veg: true, description: "Creamy mushroom gravy with herb rice." }
        ],
      },
      {
        category: "Bakery",
        items: [
          { name: "Butter Croissant", price: "₹180", veg: true, description: "Flaky and buttery French pastry." },
          { name: "Garlic Bread", price: "₹220", veg: true, description: "Toasted baguette with garlic butter." }
        ],
      },
    ],
  },
  {
    id: 22,
    name: "The Barbeque Times",
    rating: "4.4",
    reviews: "4,400+ ratings",
    cuisine: ["BBQ", "North Indian", "Desserts"],
    priceForTwo: "₹2,200",
    location: "Sector 50, Gurgaon",
    distance: "26.6 km",
    offer: "Flat 20% OFF",
    deliveryTime: "50-65 min",
    deliveryFee: "₹90",
    isPromoted: true,
    minOrder: "₹400",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1000",
    menu: [
      {
        category: "BBQ",
        items: [
          { name: "Chicken Seekh", price: "₹540", veg: false, description: "Charcoal grilled seekh kebabs." },
          { name: "Paneer Tikka", price: "₹420", veg: true, description: "Spiced cottage cheese on skewers." },
          { name: "Tandoori Prawns", price: "₹750", veg: false, description: "Jumbo prawns marinated in Indian spices." }
        ],
      },
      {
        category: "Mains",
        items: [
          { name: "Dal Makhani", price: "₹350", veg: true, description: "Creamy black lentils." },
          { name: "Mutton Curry", price: "₹650", veg: false, description: "Home-style spicy mutton gravy." },
          { name: "Kadai Paneer", price: "₹420", veg: true, description: "Cottage cheese with bell peppers and spices." }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Gulab Jamun", price: "₹150", veg: true, description: "Warm syrupy dumplings." },
          { name: "Vanilla Ice Cream", price: "₹120", veg: true, description: "Classic dessert scoop." }
        ],
      },
    ],
  },
  {
    id: 23,
    name: "Bobachee by Chef Yuvraj Kohli",
    rating: "4.5",
    reviews: "2,000+ ratings",
    cuisine: ["North Indian", "Mughlai"],
    priceForTwo: "₹2,500",
    location: "South Extension 2, New Delhi",
    distance: "6.4 km",
    offer: "Flat 15% OFF",
    deliveryTime: "40-50 min",
    deliveryFee: "₹55",
    isPromoted: false,
    minOrder: "₹300",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000",
    menu: [
      {
        category: "Mughlai",
        items: [
          { name: "Mutton Rogan Josh", price: "₹720", veg: false, description: "Traditional Kashmiri curry." },
          { name: "Chicken Korma", price: "₹650", veg: false, description: "Rich yogurt and nut gravy." },
          { name: "Khamiri Roti", price: "₹90", veg: true, description: "Soft fermented traditional bread." }
        ],
      },
      {
        category: "Starters",
        items: [
          { name: "Mutton Seekh Kebab", price: "₹580", veg: false, description: "Minced meat skewers." },
          { name: "Paneer Tikka", price: "₹420", veg: true, description: "Tandoori roasted cheese cubes." },
          { name: "Chicken Malai Boti", price: "₹550", veg: false, description: "Creamy, melt-in-mouth chicken pieces." }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Phirni", price: "₹220", veg: true, description: "Chilled rice pudding in clay pot." },
          { name: "Shahi Tukda", price: "₹250", veg: true, description: "Fried bread dessert." }
        ],
      },
    ],
  },
  {
    id: 24,
    name: "Vicoli",
    rating: "4.3",
    reviews: "1,500+ ratings",
    cuisine: ["Italian", "Pizza", "Pasta"],
    priceForTwo: "₹4,000",
    location: "DLF Phase 5, Gurgaon",
    distance: "21.5 km",
    offer: "Flat 10% OFF",
    deliveryTime: "45-60 min",
    deliveryFee: "₹85",
    isPromoted: true,
    minOrder: "₹450",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1000",
    menu: [
      {
        category: "Pizza",
        items: [
          { name: "Margherita Pizza", price: "₹680", veg: true, description: "Classic wood fired pizza." },
          { name: "Pepperoni Pizza", price: "₹850", veg: false, description: "Spicy salami on thin crust." },
          { name: "Four Cheese Pizza", price: "₹780", veg: true, description: "Mozzarella, Gorgonzola, Parmesan, Ricotta." }
        ],
      },
      {
        category: "Pasta",
        items: [
          { name: "Spaghetti Carbonara", price: "₹720", veg: false, description: "Authentic egg and pancetta sauce." },
          { name: "Penne Pesto", price: "₹650", veg: true, description: "Rich basil pesto and pine nuts." },
          { name: "Fettuccine Alfredo", price: "₹690", veg: true, description: "Creamy parmesan pasta." }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Tiramisu", price: "₹550", veg: true, description: "Classic coffee dessert." },
          { name: "Panna Cotta", price: "₹480", veg: true, description: "Vanilla cream dessert with berry compote." }
        ],
      },
    ],
  },
  {
    id: 25,
    name: "Rasayyah",
    rating: "4.5",
    reviews: "2,700+ ratings",
    cuisine: ["North Indian", "BBQ", "Lucknowi"],
    priceForTwo: "₹2,000",
    location: "Lodhi Colony, New Delhi",
    distance: "4.6 km",
    offer: "Flat 10% OFF",
    deliveryTime: "35-50 min",
    deliveryFee: "₹45",
    isPromoted: false,
    minOrder: "₹250",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000",
    menu: [
      {
        category: "Indian",
        items: [
          { name: "Lucknowi Biryani", price: "₹560", veg: false, description: "Fragrant dum biryani." },
          { name: "Galouti Kebab", price: "₹520", veg: false, description: "Melt-in-mouth minced meat." },
          { name: "Dal Tadka", price: "₹320", veg: true, description: "Yellow lentils with garlic temper." }
        ],
      },
      {
        category: "BBQ",
        items: [
          { name: "Tandoori Chicken", price: "₹480", veg: false, description: "Classic red spiced roasted chicken." },
          { name: "Paneer Tikka", price: "₹390", veg: true, description: "Spiced grilled cottage cheese." },
          { name: "Fish Tikka", price: "₹650", veg: false, description: "Tandoor baked marinated fish chunks." }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Rasmalai", price: "₹180", veg: true, description: "Cottage cheese discs in sweet milk." },
          { name: "Malai Kulfi", price: "₹150", veg: true, description: "Rich Indian ice cream." }
        ],
      },
    ],
  },
  {
    id: 26,
    name: "Kijiji - On The Roof",
    rating: "4.3",
    reviews: "1,900+ ratings",
    cuisine: ["Chinese", "Italian", "Sushi"],
    priceForTwo: "₹2,000",
    location: "Sector 47, Gurgaon",
    distance: "28 km",
    offer: "Flat 10% OFF",
    deliveryTime: "50-65 min",
    deliveryFee: "₹95",
    isPromoted: false,
    minOrder: "₹300",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
    menu: [
      {
        category: "Sushi",
        items: [
          { name: "California Roll", price: "₹780", veg: false, description: "Classic sushi roll." },
          { name: "Spicy Tuna Roll", price: "₹850", veg: false, description: "Tuna and spicy mayo." },
          { name: "Veg Tempura Roll", price: "₹650", veg: true, description: "Crispy vegetable maki." }
        ],
      },
      {
        category: "Chinese",
        items: [
          { name: "Hakka Noodles", price: "₹380", veg: true, description: "Stir-fried wheat noodles." },
          { name: "Chicken Manchurian", price: "₹450", veg: false, description: "Chicken balls in brown sauce." },
          { name: "Spring Rolls", price: "₹320", veg: true, description: "Crispy fried rolls filled with mixed vegetables." }
        ],
      },
      {
        category: "Italian",
        items: [
          { name: "Arrabiata Pasta", price: "₹420", veg: true, description: "Spicy tomato sauce pasta." },
          { name: "Bruschetta", price: "₹350", veg: true, description: "Toasted bread with tomato topping." }
        ],
      },
    ],
  },
  {
    id: 27,
    name: "Drama",
    rating: "4.0",
    reviews: "1,000+ ratings",
    cuisine: ["Asian", "Indian", "Continental"],
    priceForTwo: "₹3,000",
    location: "Connaught Place, New Delhi",
    distance: "1.2 km",
    offer: "Flat 15% OFF",
    deliveryTime: "30-40 min",
    deliveryFee: "Free",
    isPromoted: true,
    minOrder: "₹250",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
    menu: [
      {
        category: "Fusion",
        items: [
          { name: "Asian Bowl", price: "₹620", veg: true, description: "Rice bowl with veggies and sauces." },
          { name: "Butter Chicken Pasta", price: "₹580", veg: false, description: "Penne in makhani gravy." },
          { name: "Naan Tacos", price: "₹450", veg: true, description: "Mini naans stuffed with paneer tikka." }
        ],
      },
      {
        category: "Indian",
        items: [
          { name: "Dal Makhani", price: "₹420", veg: true, description: "Slow cooked black lentils." },
          { name: "Paneer Butter Masala", price: "₹490", veg: true, description: "Cottage cheese in rich tomato gravy." },
          { name: "Jeera Rice", price: "₹220", veg: true, description: "Basmati rice tempered with cumin." }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Sizzling Brownie", price: "₹350", veg: true, description: "Hot brownie with vanilla ice cream." },
          { name: "Cheesecake", price: "₹380", veg: true, description: "Classic baked cheesecake." }
        ],
      },
    ],
  },
  {
    id: 28,
    name: "Dhaba - Estd 1986 Delhi",
    rating: "4.2",
    reviews: "3,100+ ratings",
    cuisine: ["Kebab", "North Indian", "Mughlai"],
    priceForTwo: "₹3,000",
    location: "Connaught Place, New Delhi",
    distance: "1.3 km",
    offer: "Flat 10% OFF",
    deliveryTime: "35-45 min",
    deliveryFee: "₹45",
    isPromoted: false,
    minOrder: "₹200",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000",
    menu: [
      {
        category: "Punjabi",
        items: [
          { name: "Amritsari Kulcha", price: "₹280", veg: true, description: "Stuffed kulcha with chole." },
          { name: "Pindi Chole", price: "₹350", veg: true, description: "Spicy dry chickpea curry." },
          { name: "Sweet Lassi", price: "₹150", veg: true, description: "Thick sweet yogurt drink." }
        ],
      },
      {
        category: "Kebab",
        items: [
          { name: "Chicken Tikka", price: "₹480", veg: false, description: "Tandoor roasted chicken." },
          { name: "Mutton Seekh Kebab", price: "₹550", veg: false, description: "Spiced minced meat skewers." },
          { name: "Hara Bhara Kebab", price: "₹320", veg: true, description: "Spinach and green pea patties." }
        ],
      },
      {
        category: "Mains",
        items: [
          { name: "Dal Makhani", price: "₹420", veg: true, description: "Dhaba style slow cooked dal." },
          { name: "Butter Chicken", price: "₹650", veg: false, description: "Signature rich chicken gravy." }
        ],
      },
    ],
  },
  {
    id: 29,
    name: "Plum Coffee and Cocktails",
    rating: "4.4",
    reviews: "1,700+ ratings",
    cuisine: ["Continental", "Italian", "Asian"],
    priceForTwo: "₹2,000",
    location: "Connaught Place, New Delhi",
    distance: "1 km",
    offer: "Flat 10% OFF",
    deliveryTime: "25-35 min",
    deliveryFee: "₹35",
    isPromoted: true,
    minOrder: "₹150",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000",
    menu: [
      {
        category: "Coffee",
        items: [
          { name: "Cold Brew", price: "₹240", veg: true, description: "Slow steeped cold coffee." },
          { name: "Cappuccino", price: "₹190", veg: true, description: "Hot frothy coffee." },
          { name: "Iced Latte", price: "₹220", veg: true, description: "Chilled espresso and milk." }
        ],
      },
      {
        category: "Asian",
        items: [
          { name: "Veg Sushi Roll", price: "₹550", veg: true, description: "Avocado and cucumber maki." },
          { name: "Chicken Dim Sum", price: "₹480", veg: false, description: "Steamed chicken dumplings." },
          { name: "Chilli Garlic Noodles", price: "₹390", veg: true, description: "Spicy wok-tossed noodles." }
        ],
      },
      {
        category: "Continental",
        items: [
          { name: "Penne Alfredo", price: "₹450", veg: true, description: "Cream sauce pasta." },
          { name: "Caesar Salad", price: "₹380", veg: true, description: "Fresh greens with parmesan." }
        ],
      },
    ],
  },
  {
    id: 30,
    name: "My Bar Square",
    rating: "3.8",
    reviews: "2,300+ ratings",
    cuisine: ["North Indian", "Chinese", "Italian"],
    priceForTwo: "₹2,050",
    location: "Connaught Place, New Delhi",
    distance: "1.3 km",
    offer: "Flat 10% OFF",
    deliveryTime: "30-45 min",
    deliveryFee: "₹40",
    isPromoted: false,
    minOrder: "₹199",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000",
    menu: [
      {
        category: "Snacks",
        items: [
          { name: "Chicken Wings", price: "₹420", veg: false, description: "Spicy crispy wings." },
          { name: "French Fries", price: "₹220", veg: true, description: "Salted crispy potato fries." },
          { name: "Cheese Nachos", price: "₹350", veg: true, description: "Tortilla chips with cheese sauce." }
        ],
      },
      {
        category: "Indian",
        items: [
          { name: "Paneer Tikka", price: "₹380", veg: true, description: "Tandoori grilled cheese." },
          { name: "Butter Chicken", price: "₹550", veg: false, description: "Classic tomato chicken gravy." },
          { name: "Garlic Naan", price: "₹90", veg: true, description: "Crispy naan brushed with garlic." }
        ],
      },
      {
        category: "Italian",
        items: [
          { name: "Margherita Pizza", price: "₹450", veg: true, description: "Cheese and tomato pizza." },
          { name: "Spicy Arrabiata", price: "₹420", veg: true, description: "Penne in spicy red sauce." }
        ],
      },
    ],
  }
];
