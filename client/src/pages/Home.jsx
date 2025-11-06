import { Link } from "react-router-dom";

const sendColor = async (color) => {
  await fetch("http://localhost:3001/color", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ color }),
  });
};

export default function Home() {
  return (
    <div className="home-wrapper">
      <h1 className="title">🪨 De Steenschat</h1>
      <p className="subtitle">Kies een steen en ontdek zijn geheimen!</p>

      <div className="card-grid">
        <Link
          to="/stone/amethyst"
          className="stone-card card-amethyst"
          onClick={() => sendColor("PURPLE")}
        >
          💜 Amethist
        </Link>

        <Link
          to="/stone/obsidian"
          className="stone-card card-obsidian"
          onClick={() => sendColor("BLUE")}
        >
          ⚫ Obsidiaan
        </Link>

        <Link
          to="/stone/rosequartz"
          className="stone-card card-rose"
          onClick={() => sendColor("PINK")}
        >
          🌸 Rozenkwarts
        </Link>
      </div>
    </div>
  );
}
