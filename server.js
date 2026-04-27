require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");
const seedDefaults = require("./data/seedData");

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await connectDB(process.env.MONGODB_URI);
    await seedDefaults();
    app.listen(PORT, () => {
      console.log(`BasketBuddy backend running on http://127.0.0.1:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
}

startServer();
