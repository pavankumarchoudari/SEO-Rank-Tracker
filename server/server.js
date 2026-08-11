import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import rankRouter from "./routes/rankRoutes.js";
import analysisRouter from "./routes/analysisRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("SEO Rank Tracker API is running");
});

app.use("/api/auth", authRouter);
app.use("/api/rank", rankRouter);
app.use("/api/analysis", analysisRouter);

// Connect to MongoDB
connectDB();

// Run local server only when not deployed on Vercel
if (!process.env.VERCEL) {
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export Express app for Vercel
export default app;