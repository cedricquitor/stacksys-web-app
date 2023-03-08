const PORT = process.env.PORT ?? 8000;

// Init express
const express = require("express");
app = express();

// Init cors
const cors = require("cors");
app.use(cors());
// JSON body
app.use(express.json());

// Routes
const systemsRoutes = require("./routes/systemsRoutes");
app.use("/api/v1/systems", systemsRoutes);
const authRoutes = require("./routes/authRoutes");
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
  console.log(`http://localhost:8000/`);
});
