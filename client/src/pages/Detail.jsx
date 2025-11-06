import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";


export default function Detail() {
  const { id } = useParams();

  const stoneData = {
    amethyst: {
      name: "Amethist",
      description: "Paars en magisch! Deze steen werd vroeger gebruikt tegen nachtmerries.",
      color: "#9b5de5",
      img: "/stones/amethyst.jpg",
      sound: "/sounds/amethyst.mp3"
    },
    rosequartz: {
      name: "Rozenkwarts",
      description: "De steen van liefde en vriendschap. Gebruikt in het oude Egypte!",
      color: "#ff6b9f",
      img: "/stones/rosequartz.jpg",
      sound: "/sounds/rosequartz.mp3"
    },
    obsidian: {
      name: "Obsidiaan",
      description: "Scherp en vulkanisch glas. Ooit gebruikt voor messen.",
      color: "#3b3b3b",
      img: "/stones/obsidian.jpg",
      sound: "/sounds/obsidian.mp3"
    }
  };

  const stone = stoneData[id];

  useEffect(() => {
    setTimeout(() => {
      const audio = new Audio(stone.sound);
      audio.play().catch(() => {});
    }, 200);

    fetch("http://localhost:3001/stone/" + id, { method: "POST" });
    fetch("http://localhost:3001/led", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ color: stone.color })
    });
  }, []);

  return (
    <div className="container">
      <div className="detail-card">
        <h2>{stone.name}</h2>
        <img src={stone.img} className="detail-img" />

        <p>{stone.description}</p>
      </div>

      <Link to="/">
        <button className="back-btn">← Terug</button>
      </Link>
    </div>
  );
}
