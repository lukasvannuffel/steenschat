import { Link } from "react-router-dom";
 // Als je een aparte home CSS hebt

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">🪨 De Steenschat</h1>

      <p className="home-subtitle">
        Kies een steen en ontdek zijn geheimen!
      </p>

      <div className="stone-buttons">
        <Link to="/stone/amethyst" className="stone-card amethyst">
          <span>💜 Amethist</span>
        </Link>

        <Link to="/stone/obsidian" className="stone-card obsidian">
          <span>⚫ Obsidiaan</span>
        </Link>

        <Link to="/stone/rosequartz" className="stone-card rosequartz">
          <span>🌸 Rozenkwarts</span>
        </Link>
      </div>
    </div>
  );
}
