"use client";
import Image from "next/image";
import "./categories.css";
import Link from "next/link";

export default function Categories({ props }) {
  return (
    <Link href={props.slug} className="categoriesContainer">
      <div className="categoriesOverlay"></div>
      <Image src={props.images} width={0}  height={0} sizes="100vw" className="categoriesImage" alt={props.name}/>
      <h2 className="categoriesTitle">{props.name}</h2>
      <div className="categoriesContent">
        <p>VIEW PROJECTS</p>
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1l4 4-4 4"
            stroke="#E7816B"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </Link>
  );
}
