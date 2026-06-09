const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const foods = [
  { "id": 1, "name": "Idli", "calories": 58, "protein": 2, "carbs": 12, "fat": 0.4 },
  { "id": 2, "name": "Dosa", "calories": 168, "protein": 4, "carbs": 28, "fat": 4 },
  { "id": 3, "name": "Masala Dosa", "calories": 387, "protein": 8, "carbs": 45, "fat": 18 },
  { "id": 4, "name": "Rava Dosa", "calories": 220, "protein": 5, "carbs": 32, "fat": 8 },
  { "id": 5, "name": "Onion Dosa", "calories": 190, "protein": 5, "carbs": 30, "fat": 6 },
  { "id": 6, "name": "Medu Vada", "calories": 97, "protein": 2, "carbs": 8, "fat": 6 },
  { "id": 7, "name": "Pongal", "calories": 180, "protein": 5, "carbs": 28, "fat": 5 },
  { "id": 8, "name": "Upma", "calories": 190, "protein": 5, "carbs": 30, "fat": 6 },
  { "id": 9, "name": "Poori", "calories": 110, "protein": 2, "carbs": 14, "fat": 5 },
  { "id": 10, "name": "Sambar", "calories": 70, "protein": 3, "carbs": 10, "fat": 2 },

  { "id": 11, "name": "Rasam", "calories": 30, "protein": 1, "carbs": 5, "fat": 1 },
  { "id": 12, "name": "Curd Rice", "calories": 220, "protein": 6, "carbs": 35, "fat": 6 },
  { "id": 13, "name": "Lemon Rice", "calories": 250, "protein": 5, "carbs": 40, "fat": 8 },
  { "id": 14, "name": "Tomato Rice", "calories": 240, "protein": 5, "carbs": 42, "fat": 6 },
  { "id": 15, "name": "Coconut Rice", "calories": 260, "protein": 4, "carbs": 38, "fat": 10 },
  { "id": 16, "name": "Tamarind Rice", "calories": 270, "protein": 5, "carbs": 43, "fat": 9 },
  { "id": 17, "name": "Bisibele Bath", "calories": 280, "protein": 8, "carbs": 45, "fat": 8 },
  { "id": 18, "name": "Appam", "calories": 120, "protein": 2, "carbs": 25, "fat": 1 },
  { "id": 19, "name": "Puttu", "calories": 180, "protein": 4, "carbs": 36, "fat": 1 },
  { "id": 20, "name": "Idiyappam", "calories": 150, "protein": 3, "carbs": 32, "fat": 0.5 },

  { "id": 21, "name": "Chapati", "calories": 120, "protein": 4, "carbs": 24, "fat": 1 },
  { "id": 22, "name": "Parotta", "calories": 300, "protein": 6, "carbs": 45, "fat": 10 },
  { "id": 23, "name": "White Rice", "calories": 130, "protein": 2.7, "carbs": 28, "fat": 0.3 },
  { "id": 24, "name": "Brown Rice", "calories": 112, "protein": 2.6, "carbs": 23, "fat": 0.9 },
  { "id": 25, "name": "Jeera Rice", "calories": 180, "protein": 4, "carbs": 32, "fat": 4 },
  { "id": 26, "name": "Veg Pulao", "calories": 220, "protein": 5, "carbs": 38, "fat": 6 },
  { "id": 27, "name": "Veg Biryani", "calories": 290, "protein": 7, "carbs": 48, "fat": 8 },
  { "id": 28, "name": "Chicken Biryani", "calories": 380, "protein": 18, "carbs": 45, "fat": 14 },
  { "id": 29, "name": "Egg Biryani", "calories": 340, "protein": 12, "carbs": 42, "fat": 12 },
  { "id": 30, "name": "Mutton Biryani", "calories": 420, "protein": 20, "carbs": 44, "fat": 18 },

  { "id": 31, "name": "Naan", "calories": 260, "protein": 8, "carbs": 45, "fat": 6 },
  { "id": 32, "name": "Butter Naan", "calories": 310, "protein": 8, "carbs": 46, "fat": 10 },
  { "id": 33, "name": "Kulcha", "calories": 290, "protein": 7, "carbs": 48, "fat": 8 },
  { "id": 34, "name": "Aloo Paratha", "calories": 270, "protein": 6, "carbs": 40, "fat": 10 },
  { "id": 35, "name": "Paneer Paratha", "calories": 320, "protein": 12, "carbs": 36, "fat": 14 },
  { "id": 36, "name": "Chole Bhature", "calories": 450, "protein": 14, "carbs": 55, "fat": 18 },
  { "id": 37, "name": "Rajma Chawal", "calories": 320, "protein": 12, "carbs": 55, "fat": 5 },
  { "id": 38, "name": "Dal Tadka", "calories": 180, "protein": 8, "carbs": 20, "fat": 7 },
  { "id": 39, "name": "Dal Makhani", "calories": 280, "protein": 10, "carbs": 22, "fat": 16 },
  { "id": 40, "name": "Palak Paneer", "calories": 260, "protein": 12, "carbs": 10, "fat": 18 },

  { "id": 41, "name": "Paneer Butter Masala", "calories": 320, "protein": 12, "carbs": 10, "fat": 25 },
  { "id": 42, "name": "Chicken Curry", "calories": 240, "protein": 22, "carbs": 4, "fat": 15 },
  { "id": 43, "name": "Chicken 65", "calories": 300, "protein": 24, "carbs": 8, "fat": 18 },
  { "id": 44, "name": "Chicken Tikka", "calories": 220, "protein": 30, "carbs": 3, "fat": 9 },
  { "id": 45, "name": "Grilled Chicken", "calories": 200, "protein": 32, "carbs": 0, "fat": 7 },
  { "id": 46, "name": "Fish Fry", "calories": 220, "protein": 25, "carbs": 3, "fat": 12 },
  { "id": 47, "name": "Fish Curry", "calories": 180, "protein": 20, "carbs": 5, "fat": 8 },
  { "id": 48, "name": "Prawn Fry", "calories": 210, "protein": 24, "carbs": 4, "fat": 10 },
  { "id": 49, "name": "Mutton Curry", "calories": 280, "protein": 22, "carbs": 4, "fat": 18 },
  { "id": 50, "name": "Boiled Egg", "calories": 78, "protein": 6, "carbs": 0.6, "fat": 5 },

  { "id": 51, "name": "Egg Omelette", "calories": 154, "protein": 11, "carbs": 1, "fat": 11 },
  { "id": 52, "name": "Egg Bhurji", "calories": 180, "protein": 12, "carbs": 4, "fat": 12 },
  { "id": 53, "name": "Bread", "calories": 75, "protein": 3, "carbs": 14, "fat": 1 },
  { "id": 54, "name": "Butter Toast", "calories": 120, "protein": 3, "carbs": 14, "fat": 6 },
  { "id": 55, "name": "Oats", "calories": 150, "protein": 5, "carbs": 27, "fat": 3 },
  { "id": 56, "name": "Cornflakes", "calories": 140, "protein": 3, "carbs": 32, "fat": 0.5 },
  { "id": 57, "name": "Poha", "calories": 180, "protein": 4, "carbs": 32, "fat": 4 },
  { "id": 58, "name": "Sabudana Khichdi", "calories": 250, "protein": 4, "carbs": 45, "fat": 7 },
  { "id": 59, "name": "Dhokla", "calories": 160, "protein": 6, "carbs": 24, "fat": 4 },
  { "id": 60, "name": "Thepla", "calories": 180, "protein": 5, "carbs": 28, "fat": 5 },

  { "id": 61, "name": "Samosa", "calories": 262, "protein": 5, "carbs": 32, "fat": 13 },
  { "id": 62, "name": "Kachori", "calories": 280, "protein": 6, "carbs": 30, "fat": 15 },
  { "id": 63, "name": "Pani Puri", "calories": 180, "protein": 4, "carbs": 30, "fat": 5 },
  { "id": 64, "name": "Bhel Puri", "calories": 150, "protein": 4, "carbs": 28, "fat": 3 },
  { "id": 65, "name": "Sev Puri", "calories": 220, "protein": 4, "carbs": 30, "fat": 9 },
  { "id": 66, "name": "Pakora", "calories": 200, "protein": 5, "carbs": 18, "fat": 12 },
  { "id": 67, "name": "Bajji", "calories": 190, "protein": 4, "carbs": 20, "fat": 10 },
  { "id": 68, "name": "Bonda", "calories": 210, "protein": 4, "carbs": 24, "fat": 11 },
  { "id": 69, "name": "Murukku", "calories": 150, "protein": 3, "carbs": 18, "fat": 8 },
  { "id": 70, "name": "Mixture", "calories": 170, "protein": 4, "carbs": 15, "fat": 10 },

  { "id": 71, "name": "Tea", "calories": 40, "protein": 1, "carbs": 6, "fat": 1 },
  { "id": 72, "name": "Filter Coffee", "calories": 30, "protein": 1, "carbs": 5, "fat": 1 },
  { "id": 73, "name": "Milk", "calories": 103, "protein": 8, "carbs": 12, "fat": 2.5 },
  { "id": 74, "name": "Buttermilk", "calories": 35, "protein": 2, "carbs": 4, "fat": 1 },
  { "id": 75, "name": "Lassi", "calories": 160, "protein": 6, "carbs": 22, "fat": 5 },
  { "id": 76, "name": "Tender Coconut Water", "calories": 45, "protein": 1, "carbs": 9, "fat": 0 },
  { "id": 77, "name": "Apple", "calories": 95, "protein": 0.5, "carbs": 25, "fat": 0.3 },
  { "id": 78, "name": "Banana", "calories": 89, "protein": 1.1, "carbs": 23, "fat": 0.3 },
  { "id": 79, "name": "Mango", "calories": 99, "protein": 1.4, "carbs": 25, "fat": 0.6 },
  { "id": 80, "name": "Orange", "calories": 62, "protein": 1.2, "carbs": 15, "fat": 0.2 },

  { "id": 81, "name": "Papaya", "calories": 43, "protein": 0.5, "carbs": 11, "fat": 0.3 },
  { "id": 82, "name": "Watermelon", "calories": 30, "protein": 0.6, "carbs": 8, "fat": 0.2 },
  { "id": 83, "name": "Pineapple", "calories": 50, "protein": 0.5, "carbs": 13, "fat": 0.1 },
  { "id": 84, "name": "Guava", "calories": 68, "protein": 2.6, "carbs": 14, "fat": 1 },
  { "id": 85, "name": "Pomegranate", "calories": 83, "protein": 1.7, "carbs": 19, "fat": 1.2 },
  { "id": 86, "name": "Grapes", "calories": 69, "protein": 0.7, "carbs": 18, "fat": 0.2 },
  { "id": 87, "name": "Potato", "calories": 77, "protein": 2, "carbs": 17, "fat": 0.1 },
  { "id": 88, "name": "Tomato", "calories": 18, "protein": 0.9, "carbs": 4, "fat": 0.2 },
  { "id": 89, "name": "Onion", "calories": 40, "protein": 1.1, "carbs": 9, "fat": 0.1 },
  { "id": 90, "name": "Carrot", "calories": 41, "protein": 0.9, "carbs": 10, "fat": 0.2 },

  { "id": 91, "name": "Laddu", "calories": 180, "protein": 3, "carbs": 24, "fat": 8 },
  { "id": 92, "name": "Mysore Pak", "calories": 250, "protein": 3, "carbs": 22, "fat": 16 },
  { "id": 93, "name": "Jalebi", "calories": 220, "protein": 2, "carbs": 40, "fat": 6 },
  { "id": 94, "name": "Rasgulla", "calories": 140, "protein": 4, "carbs": 28, "fat": 2 },
  { "id": 95, "name": "Gulab Jamun", "calories": 175, "protein": 3, "carbs": 30, "fat": 5 },
  { "id": 96, "name": "Kesari", "calories": 220, "protein": 3, "carbs": 35, "fat": 8 },
  { "id": 97, "name": "Payasam", "calories": 190, "protein": 4, "carbs": 30, "fat": 6 },
  { "id": 98, "name": "Kheer", "calories": 180, "protein": 5, "carbs": 28, "fat": 5 },
  { "id": 99, "name": "Halwa", "calories": 250, "protein": 3, "carbs": 35, "fat": 10 },
  { "id": 100, "name": "Badam Milk", "calories": 180, "protein": 6, "carbs": 18, "fat": 8 }
]


// register api

let users = [
  {
    id: 1,
    name: "Jagadish",
    email: "jagadish@gmail.com",
    password: "12345678",
    age: 28
  }
];
console.log(users)

app.post("/register", (req, res) => {

  const { name, email, password, age } = req.body;

  const existingUser = users.find(
    user => user.email === email
  );

  if (existingUser) {
    return res.json({
      success: false,
      message: "Email already registered"
    });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
    age
  };

  users.push(newUser);

  console.log(users);

  res.json({
    success: true,
    message: "Registration Successful"
  });

});

// login api

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  const user = users.find(
    user =>
      user.email === email &&
      user.password === password
  );

  if (user) {

    res.json({
      success: true,
      user
    });

  } else {

    res.json({
      success: false,
      message: "Invalid Email or Password"
    });

  }

});

// 🔥 root route (fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Food API is running 🚀");
});

// 🔍 search API
app.get("/foods", (req, res) => {
  const search = req.query.q?.toLowerCase() || "";

  const result = foods.filter(food =>
    food.name.toLowerCase().includes(search)
  );

  res.json(result);
});

let trackedFoods = [];

// track api POST

app.post("/track", (req, res) => {
  const trackedItem = {
    ...req.body,
    trackid: Date.now(),
  };

  trackedFoods.push(trackedItem);

  console.log("Tracked Foods:", trackedFoods);

  res.json({
    success: true,
    message: "Food tracked successfully",
    trackedItem,
  });
});



app.get("/track/:userid/:date", (req, res) => {

  const userid = Number(req.params.userid);
  const date = req.params.date;

  const result = trackedFoods.filter(item =>
    item.userid === userid &&
    item.date === date
  );

  res.json(result);

  console.log("result",result)

});

app.delete("/track/:trackid", (req, res) => {
  const trackid = Number(req.params.trackid);

  const oldLength = trackedFoods.length;

  trackedFoods = trackedFoods.filter((item) => item.trackid !== trackid);

  if (trackedFoods.length === oldLength) {
    return res.json({
      success: false,
      message: "Tracked food not found",
    });
  }

  res.json({
    success: true,
    message: "Tracked food deleted successfully",
  });
});


app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});