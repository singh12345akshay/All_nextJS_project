const mongoose =require("mongoose");

// Function to connect to MongoDB
const connectToMongoDB = async () => {
  try {
    // Connection URL and options
    const url = 'mongodb://127.0.0.1:27017/chat-bot'; // Update with your MongoDB connection URL
  
    // Connect to MongoDB
    await mongoose.connect(url);
    console.log("Successfully connected to mongoDB !! ")
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};
module.exports = connectToMongoDB;