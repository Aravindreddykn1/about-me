import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import contactRoutes from "./routes/contact.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ status: "ok", service: "portfolio-backend" });
});

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
