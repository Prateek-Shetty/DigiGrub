export const mockFeaturedItems = [
  {
    id: "1",
    name: "Cheese Burger",
    description: "Juicy beef patty with cheese, lettuce, and tomato.",
    price: 8.99,
    available: true,
    image: "/images/cheese-burger.jpg",
  },
  {
    id: "2",
    name: "Veggie Pizza",
    description: "Delicious pizza topped with fresh vegetables.",
    price: 12.99,
    available: true,
    image: "/images/veggie-pizza.jpg",
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with Caesar dressing and croutons.",
    price: 7.99,
    available: true,
    image: "/images/caesar-salad.jpg",
  },
  {
    id: "4",
    name: "Chocolate Cake",
    description: "Rich chocolate cake with creamy frosting.",
    price: 5.99,
    available: true,
    image: "/images/chocolate-cake.jpg",
  },
]

export const mockCategories = [
  {
    id: "1",
    name: "Burgers",
    itemCount: 10,
    image: "/images/categories/burgers.jpg",
  },
  {
    id: "2",
    name: "Pizzas",
    itemCount: 8,
    image: "/images/categories/pizzas.jpg",
  },
  {
    id: "3",
    name: "Salads",
    itemCount: 5,
    image: "/images/categories/salads.jpg",
  },
  {
    id: "4",
    name: "Desserts",
    itemCount: 6,
    image: "/images/categories/desserts.jpg",
  },
]

export const mockMenuItems = [
  {
    id: "1",
    name: "Burger",
    description: "A delicious burger with cheese and lettuce.",
    price: 5.99,
    available: true,
    image: "/images/burger.jpg",
    nutritionalInfo: {
      calories: 500,
      protein: 25,
      carbs: 50,
      fat: 20,
    },
  },
  {
    id: "2",
    name: "Pizza",
    description: "A cheesy pizza with pepperoni and olives.",
    price: 8.99,
    available: true,
    image: "/images/pizza.jpg",
    nutritionalInfo: {
      calories: 700,
      protein: 30,
      carbs: 80,
      fat: 25,
    },
  },
  {
    id: "3",
    name: "Salad",
    description: "A fresh salad with tomatoes, cucumbers, and feta cheese.",
    price: 4.99,
    available: true,
    image: "/images/salad.jpg",
    nutritionalInfo: {
      calories: 200,
      protein: 5,
      carbs: 20,
      fat: 10,
    },
  },
  {
    id: "4",
    name: "Pasta",
    description: "A creamy pasta with mushrooms and parmesan cheese.",
    price: 7.99,
    available: false,
    image: "/images/pasta.jpg",
    nutritionalInfo: {
      calories: 600,
      protein: 20,
      carbs: 70,
      fat: 15,
    },
  },
  {
    id: "5",
    name: "Sushi",
    description: "A variety of sushi rolls with fresh fish and vegetables.",
    price: 12.99,
    available: true,
    image: "/images/sushi.jpg",
    nutritionalInfo: {
      calories: 400,
      protein: 30,
      carbs: 50,
      fat: 10,
    },
  },
]

export const mockOrders = [
  {
    id: "1",
    customer: "John Doe",
    date: "2023-10-01T12:00:00Z",
    total: 25.97,
    status: "completed",
    items: [
      { id: "1", name: "Cheese Burger", price: 8.99, quantity: 1 },
      { id: "2", name: "Veggie Pizza", price: 12.99, quantity: 1 },
      { id: "3", name: "Chocolate Cake", price: 5.99, quantity: 1 },
    ],
  },
  {
    id: "2",
    customer: "Jane Smith",
    date: "2023-10-02T14:30:00Z",
    total: 15.98,
    status: "pending",
    items: [
      { id: "3", name: "Caesar Salad", price: 7.99, quantity: 1 },
      { id: "4", name: "Chocolate Cake", price: 5.99, quantity: 1 },
    ],
  },
]

export const mockInventory = [
  {
    id: "1",
    name: "Cheese Burger",
    quantity: 50,
    lowStockThreshold: 10,
    unit: "pieces",
    lastUpdated: "2023-10-01T12:00:00Z",
  },
  {
    id: "2",
    name: "Veggie Pizza",
    quantity: 30,
    lowStockThreshold: 5,
    unit: "pieces",
    lastUpdated: "2023-10-01T12:00:00Z",
  },
  {
    id: "3",
    name: "Caesar Salad",
    quantity: 20,
    lowStockThreshold: 5,
    unit: "pieces",
    lastUpdated: "2023-10-01T12:00:00Z",
  },
  {
    id: "4",
    name: "Chocolate Cake",
    quantity: 15,
    lowStockThreshold: 3,
    unit: "pieces",
    lastUpdated: "2023-10-01T12:00:00Z",
  },
]

