import express from "express";
import cors from "cors";
import SerialPort from "serialport";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Pas je COM-poort aan:
const port = new SerialPort.SerialPort({
  path: "/dev/tty.usbmodem1102", // macOS: /dev/tty.usbmodem101
  baudRate: 9600,
});

app.post("/color", (req, res) => {
  const { color } = req.body;
  console.log("→ LED kleur:", color);
  port.write(`COLOR ${color}\n`);
  res.json({ status: "ok" });
});

app.listen(3001, () => console.log("✅ Server draait op http://localhost:3001"));
