import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Pet from '../models/Pet.js';

dotenv.config();

const initialPets = [
  {
    name: "Max",
    breed: "Golden Retriever",
    age: 2,
    type: "Dog",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d",
    description: "Friendly, energetic, and loves playing fetch!",
    isAdopted: false
  },
  {
    name: "Luna",
    breed: "Siamese",
    age: 1,
    type: "Cat",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
    description: "Very calm, sweet, and loves warm laps.",
    isAdopted: false
  },
  {
    name: "Rocky",
    breed: "German Shepherd",
    age: 3,
    type: "Dog",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95",
    description: "Loyal, well-trained, and makes a great companion.",
    isAdopted: false
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    await Pet.deleteMany();
    await Pet.insertMany(initialPets);
    
    console.log("⚡️ Data Successfully Seeded! (Happy Tails is ready)");
    process.exit();
  } catch (error) {
    console.error(`❌ Seeding failed: ${error}`);
    process.exit(1);
  }
};

seedDatabase();