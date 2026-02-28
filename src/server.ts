import express from "express";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ message: "SmartPix API online 🚀" });
});

const port = Number(process.env.PORT || 3000);

// IMPORTANTÍSSIMO no Railway/Docker:
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});