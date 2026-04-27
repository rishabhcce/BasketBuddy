const bcrypt = require("bcryptjs");
const Product = require("../models/Product");
const User = require("../models/User");

const defaultProducts = [
  { id: 1, name: "Fresh Tomatoes", w: "1 kg", p: 49, mrp: 65, disc: 25, cat: ["veggies", "all", "best"], badge: "", rating: 4.5, rev: 1243, image: "https://images.pexels.com/photos/1433487/pexels-photo-1433487.jpeg?auto=compress&cs=tinysrgb&w=600", quantity_in_stock: 120, low_stock_threshold: 25 },
  { id: 2, name: "Watermelon", w: "1 pc (~2 kg)", p: 79, mrp: 95, disc: 17, cat: ["fruits", "all", "best"], badge: "", rating: 4.4, rev: 876, image: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=300&q=80&fit=crop", quantity_in_stock: 42, low_stock_threshold: 10 },
  { id: 3, name: "Strawberries", w: "250g punnet", p: 89, mrp: 110, disc: 19, cat: ["fruits", "all"], badge: "new", rating: 4.6, rev: 543, image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&q=80&fit=crop", quantity_in_stock: 35, low_stock_threshold: 8 },
  { id: 4, name: "Coconut", w: "1 pc (medium)", p: 45, mrp: 55, disc: 18, cat: ["fruits", "all"], badge: "", rating: 4.3, rev: 421, image: "https://images.pexels.com/photos/1652001/pexels-photo-1652001.jpeg?auto=compress&cs=tinysrgb&w=600", quantity_in_stock: 51, low_stock_threshold: 12 },
  { id: 5, name: "Red Onions", w: "1 kg", p: 39, mrp: 50, disc: 22, cat: ["veggies", "all"], badge: "", rating: 4.4, rev: 1102, image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=300&q=80&fit=crop", quantity_in_stock: 90, low_stock_threshold: 20 },
  { id: 6, name: "Broccoli", w: "500g", p: 59, mrp: 75, disc: 21, cat: ["veggies", "all"], badge: "organic", rating: 4.5, rev: 678, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=300&q=80&fit=crop", quantity_in_stock: 26, low_stock_threshold: 10 },
  { id: 7, name: "Amul Full Cream Milk", w: "1 Litre", p: 68, mrp: 70, disc: 3, cat: ["dairy", "all"], badge: "", rating: 4.8, rev: 3421, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&q=80&fit=crop", quantity_in_stock: 18, low_stock_threshold: 20 },
  { id: 8, name: "Farm Fresh Eggs", w: "6 pieces", p: 55, mrp: 65, disc: 15, cat: ["dairy", "all", "best"], badge: "organic", rating: 4.7, rev: 2109, image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=300&q=80&fit=crop", quantity_in_stock: 14, low_stock_threshold: 18 },
  { id: 9, name: "Paneer Fresh", w: "200g", p: 89, mrp: 95, disc: 6, cat: ["dairy", "all"], badge: "", rating: 4.6, rev: 1543, image: "https://images.unsplash.com/photo-1559054663-e8d23213f55c?w=300&q=80&fit=crop", quantity_in_stock: 24, low_stock_threshold: 10 },
  { id: 10, name: "Amul Butter", w: "500g", p: 279, mrp: 295, disc: 5, cat: ["dairy", "all"], badge: "", rating: 4.9, rev: 4321, image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&q=80&fit=crop", quantity_in_stock: 31, low_stock_threshold: 10 },
  { id: 11, name: "Basmati Rice", w: "5 kg bag", p: 399, mrp: 450, disc: 11, cat: ["grains", "all", "best"], badge: "", rating: 4.7, rev: 3210, image: "https://images.unsplash.com/photo-1536304993881-ff86e0c9c2da?w=300&q=80&fit=crop", quantity_in_stock: 70, low_stock_threshold: 15 },
  { id: 12, name: "Whole Wheat Atta", w: "5 kg bag", p: 249, mrp: 280, disc: 11, cat: ["grains", "all"], badge: "", rating: 4.5, rev: 1876, image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=300&q=80&fit=crop", quantity_in_stock: 63, low_stock_threshold: 15 },
  { id: 13, name: "Chicken Breast", w: "500g pack", p: 180, mrp: 210, disc: 14, cat: ["meat", "all"], badge: "", rating: 4.5, rev: 987, image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&q=80&fit=crop", quantity_in_stock: 20, low_stock_threshold: 8 },
  { id: 14, name: "Salmon Fillet", w: "400g fillet", p: 320, mrp: 380, disc: 16, cat: ["seafood", "all"], badge: "", rating: 4.6, rev: 654, image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&q=80&fit=crop", quantity_in_stock: 10, low_stock_threshold: 6 },
  { id: 15, name: "Organic Bananas", w: "6 pieces", p: 39, mrp: 45, disc: 13, cat: ["fruits", "all", "best"], badge: "organic", rating: 4.7, rev: 2345, image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=300&q=80&fit=crop", quantity_in_stock: 55, low_stock_threshold: 12 },
  { id: 16, name: "Navel Oranges", w: "4 pieces", p: 69, mrp: 80, disc: 14, cat: ["fruits", "all"], badge: "", rating: 4.4, rev: 876, image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=300&q=80&fit=crop", quantity_in_stock: 47, low_stock_threshold: 12 },
  { id: 17, name: "Pure Cow Ghee", w: "500ml jar", p: 299, mrp: 350, disc: 15, cat: ["grains", "dairy", "all", "best"], badge: "", rating: 4.8, rev: 2103, image: "https://images.unsplash.com/photo-1617419669559-be79f36bd367?w=300&q=80&fit=crop", quantity_in_stock: 22, low_stock_threshold: 8 },
  { id: 18, name: "Mustard Oil", w: "1 Litre", p: 155, mrp: 180, disc: 14, cat: ["grains", "all"], badge: "", rating: 4.4, rev: 1234, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&q=80&fit=crop", quantity_in_stock: 40, low_stock_threshold: 10 },
  { id: 19, name: "Baby Spinach", w: "250g bundle", p: 29, mrp: 35, disc: 17, cat: ["veggies", "all"], badge: "organic", rating: 4.3, rev: 543, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&q=80&fit=crop", quantity_in_stock: 28, low_stock_threshold: 10 },
  { id: 20, name: "Green Capsicum", w: "500g", p: 45, mrp: 55, disc: 18, cat: ["veggies", "all"], badge: "", rating: 4.4, rev: 765, image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&q=80&fit=crop", quantity_in_stock: 33, low_stock_threshold: 10 },
  { id: 21, name: "Aashirvaad Select Atta", w: "10 kg bag", p: 489, mrp: 540, disc: 9, cat: ["grains", "kitchen", "all", "best"], badge: "", rating: 4.8, rev: 1589, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&q=80&fit=crop", quantity_in_stock: 38, low_stock_threshold: 10 },
  { id: 22, name: "Sona Masoori Rice", w: "5 kg bag", p: 359, mrp: 410, disc: 12, cat: ["grains", "kitchen", "all"], badge: "", rating: 4.6, rev: 1180, image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=300&q=80&fit=crop", quantity_in_stock: 26, low_stock_threshold: 10 },
  { id: 23, name: "Fortune Sunflower Oil", w: "1 Litre", p: 169, mrp: 195, disc: 13, cat: ["kitchen", "all"], badge: "", rating: 4.5, rev: 980, image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&q=80&fit=crop", quantity_in_stock: 36, low_stock_threshold: 10 },
  { id: 24, name: "Kitchen King Masala", w: "100g pack", p: 85, mrp: 99, disc: 14, cat: ["kitchen", "all"], badge: "new", rating: 4.4, rev: 612, image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&q=80&fit=crop", quantity_in_stock: 48, low_stock_threshold: 15 },
  { id: 25, name: "Organic Turmeric Powder", w: "200g pack", p: 79, mrp: 95, disc: 17, cat: ["kitchen", "all"], badge: "organic", rating: 4.5, rev: 504, image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=300&q=80&fit=crop", quantity_in_stock: 30, low_stock_threshold: 10 },
  { id: 26, name: "Classic Salted Chips", w: "150g pack", p: 45, mrp: 55, disc: 18, cat: ["snacks", "all"], badge: "", rating: 4.3, rev: 1490, image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&q=80&fit=crop", quantity_in_stock: 55, low_stock_threshold: 18 },
  { id: 27, name: "Haldiram Namkeen Mix", w: "400g pack", p: 120, mrp: 145, disc: 17, cat: ["snacks", "all", "best"], badge: "", rating: 4.6, rev: 1711, image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=300&q=80&fit=crop", quantity_in_stock: 42, low_stock_threshold: 12 },
  { id: 28, name: "Cold Coffee Beverage", w: "250ml bottle", p: 40, mrp: 50, disc: 20, cat: ["drinks", "all"], badge: "", rating: 4.2, rev: 842, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&q=80&fit=crop", quantity_in_stock: 60, low_stock_threshold: 20 },
  { id: 29, name: "Mixed Fruit Juice", w: "1 Litre", p: 110, mrp: 130, disc: 15, cat: ["drinks", "all"], badge: "", rating: 4.4, rev: 930, image: "https://images.unsplash.com/photo-1600271886742-f049cd5bba3f?w=300&q=80&fit=crop", quantity_in_stock: 44, low_stock_threshold: 12 },
  { id: 30, name: "Milk Chocolate Bar", w: "120g bar", p: 99, mrp: 120, disc: 18, cat: ["snacks", "all"], badge: "", rating: 4.7, rev: 2054, image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=300&q=80&fit=crop", quantity_in_stock: 52, low_stock_threshold: 15 },
  { id: 31, name: "Chocolate Ice Cream Tub", w: "700ml tub", p: 220, mrp: 260, disc: 15, cat: ["snacks", "drinks", "all", "best"], badge: "", rating: 4.8, rev: 1388, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&q=80&fit=crop", quantity_in_stock: 24, low_stock_threshold: 8 },
  { id: 32, name: "Penne Pasta", w: "500g pack", p: 119, mrp: 145, disc: 18, cat: ["kitchen", "all", "best"], badge: "new", rating: 4.5, rev: 642, image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=300&q=80&fit=crop", quantity_in_stock: 40, low_stock_threshold: 10 },
  { id: 33, name: "Fresh Garlic", w: "200g", p: 35, mrp: 45, disc: 22, cat: ["veggies", "kitchen", "all"], badge: "", rating: 4.4, rev: 590, image: "https://images.unsplash.com/photo-1615477550927-6ecafcdb0a43?w=300&q=80&fit=crop", quantity_in_stock: 50, low_stock_threshold: 15 },
  { id: 34, name: "Sandwich Bread", w: "400g loaf", p: 48, mrp: 55, disc: 13, cat: ["snacks", "grains", "all"], badge: "", rating: 4.4, rev: 884, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&q=80&fit=crop", quantity_in_stock: 45, low_stock_threshold: 15 },
  { id: 35, name: "Toor Dal", w: "1 kg pack", p: 135, mrp: 155, disc: 13, cat: ["grains", "kitchen", "all", "best"], badge: "", rating: 4.6, rev: 704, image: "https://images.unsplash.com/photo-1586201375761-83865001e31f?w=300&q=80&fit=crop", quantity_in_stock: 40, low_stock_threshold: 10 },
  { id: 36, name: "Pasta Sauce", w: "300g jar", p: 95, mrp: 115, disc: 17, cat: ["kitchen", "all"], badge: "", rating: 4.3, rev: 458, image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300&q=80&fit=crop", quantity_in_stock: 34, low_stock_threshold: 10 },
  { id: 37, name: "Mozzarella Cheese", w: "200g pack", p: 129, mrp: 149, disc: 13, cat: ["dairy", "all", "best"], badge: "", rating: 4.6, rev: 671, image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&q=80&fit=crop", quantity_in_stock: 32, low_stock_threshold: 10 }
];

async function seedDefaults() {
  for (const product of defaultProducts) {
    await Product.updateOne(
      { id: product.id },
      {
        $set: product
      },
      { upsert: true }
    );
  }

  if ((await User.countDocuments()) === 0) {
    const userPassword = await bcrypt.hash("user123", 10);
    const adminPassword = await bcrypt.hash("admin123", 10);

    await User.insertMany([
      {
        firstName: "Demo",
        lastName: "Shopper",
        email: "user@basketbuddy.com",
        phone: "+919876543210",
        password: userPassword,
        role: "user"
      },
      {
        firstName: "Ops",
        lastName: "Team",
        email: "admin@basketbuddy.com",
        phone: "+919876540000",
        password: adminPassword,
        role: "admin"
      }
    ]);
  }
}

module.exports = seedDefaults;
