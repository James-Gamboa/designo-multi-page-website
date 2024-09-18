"use client";
import "./card.css";
import Image from "next/image";

export default function Card({ props }) {
  console.log(props);

  return (
    <div className="card">
      <Image
        src={props.images.jpg}
        width={0}
        height={0}
        sizes="100vw"
        className="cardImage"
        alt={props.name}
      />
      <div className="cardContent">
        <h2 className="cardTitle">{props.name}</h2>
        <p className="cardText">{props.description}</p>
      </div>
    </div>
  );
}
