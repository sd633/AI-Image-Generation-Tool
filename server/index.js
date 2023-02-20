import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

let PORT = 4000 || process.env.PORT;

app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get("/", async (req, res) => {
    res.json("Dall-E says hello");
})

try {
    connectDB(process.env.MONGO_URL);
} catch (error) {
    console.log(error);
}

app.listen(PORT, () => {
    console.log("Server started at port 4000")
})