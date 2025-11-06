import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Ontvangt welke steen geopend werd
app.post("/stone/:name", (req, res) => {
  console.log("📌 Steen geopend:", req.params.name);
  res.json({ status: "OK" });
});

// ✅ LED API endpoint
app.post("/led", (req, res) => {
  const { color } = req.body;
  console.log("💡 LED kleur:", color);

  // HIER later Arduino / Raspberry aanroepen:
  // serialPort.write(color)

  res.json({ status: "LED OK" });
});

// ✅ Server starten
app.listen(3001, () => {
  console.log("✅ Express server draait op http://localhost:3001");
});
