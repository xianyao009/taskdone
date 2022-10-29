import mongoose from "mongoose";

const DATABASE_URI = process.env.DATABASE_URI;

if (!DATABASE_URI) {
  throw new Error(
    "Please define the DATABASE_URI environment variable inside .env.local"
  );
}

const dbConnect = async () => {
  console.log("Database Connection Establishing...");
  await mongoose
    .connect(DATABASE_URI as string)
    .catch((err) => console.log(err));
  console.log("Database Connection Established!");
};

export default dbConnect;
