import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import auth from "./routes/auth.js"

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/", auth);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on PORT${PORT}`));