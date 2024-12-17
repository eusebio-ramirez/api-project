const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const menusRoutes = require("./routes/menu");
const agendaRoutes = require("./routes/agenda");
const rubrosRoutes = require("./routes/rubros");

app.use("/api/menu", menusRoutes);
app.use("/api/agenda", agendaRoutes);
app.use("/api/rubros", rubrosRoutes);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
