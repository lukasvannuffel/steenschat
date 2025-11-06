import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

import imgAmethyst from "/stones/amethyst.jpg";
import imgObsidian from "/stones/obsidian.jpg";
import imgRose from "/stones/rosequartz.jpg";

const sendColor = async (color) => {
  await fetch("http://localhost:3001/color", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ color }),
  });
};

export default function DetailPage() {
  const { stoneId } = useParams();

  const STONES = {
    amethyst: {
      name: "Amethist",
      emoji: "💜",
      color: "PURPLE",
      sound: "/sounds/amethyst.mp3",
      image: imgAmethyst,
      description:
        "Amethist is een paarse kwartssteen die vroeger werd gebruikt tegen nachtmerries.",
      className: "detail-amethyst",
    },
    obsidian: {
      name: "Obsidiaan",
      emoji: "⚫",
      color: "BLUE",
      sound: "/sounds/obsidian.mp3",
      image: imgObsidian,
      description:
        "Obsidiaan is vulkanisch glas — glanzend en scherp. Het werd vroeger gebruikt voor messen.",
      className: "detail-obsidian",
    },
    rosequartz: {
      name: "Rozenkwarts",
      emoji: "🌸",
      color: "PINK",
      sound: "/sounds/rosequartz.mp3",
      image: imgRose,
      description:
        "Rozenkwarts is de steen van liefde en vriendschap. Hij werd gebruikt in het oude Egypte.",
      className: "detail-rose",
    },
  };

  const stone = STONES[stoneId];

  if (!stone) {
    return (
      <div className="detail-wrapper">
        <h1>❌ Steen niet gevonden</h1>
        <Link className="back-btn" to="/">← Terug</Link>
      </div>
    );
  }

  useEffect(() => {
    sendColor(stone.color);
    const audio = new Audio(stone.sound);
    audio.play();
    return () => sendColor("OFF");
  }, [stone]);

  return (
    <div className={`detail-wrapper ${stone.className}`}>
      <Link to="/" className="back-btn">← Terug</Link>

      <h1 className="detail-title">{stone.emoji} {stone.name}</h1>

      <img src={stone.image} alt={stone.name} className="detail-image" />

      <p className="detail-text">{stone.description}</p>
    </div>
  );
}
