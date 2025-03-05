import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { contactRoute } from "./routes/contact.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "https://1electric.nz"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.options("*", cors());

app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Node server listening on port ${PORT}`);
});
