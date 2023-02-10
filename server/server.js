const PORT = process.env.PORT ?? 8000;

// Init express
const express = require("express");
app = express();

// Init cors
const cors = require("cors");
app.use(cors());

// Routes
const systemsRoutes = require("./routes/systemsRoutes");
app.use("/api/v1/systems", systemsRoutes);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
