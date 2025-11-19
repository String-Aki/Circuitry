import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { requireAuth } from "@clerk/express";

import clientRoutes from "./routes/clientRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error: ", err));

app.get("/", (req, res) => {
  res.send("Circuitry API is running");
});

app.use("/api/clients", clientRoutes);
app.use("/api/services", serviceRoutes);

app.get("/api/test", (req, res) => {
  res.json({
    message: "Authenticated! You are logged in.",
    userId: req.auth.userId,
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
