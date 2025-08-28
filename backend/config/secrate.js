import dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT;
export const MONGO_URI = process.env.BASE_URL;
export const JWT_SECRET =
  process.env.JWT_SECRET || "your-fallback-secret-key-for-development";
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "30d";
