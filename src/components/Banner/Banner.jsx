"use client"

import "./banner.css"
import { usePathname } from "next/navigation"

export default function Banner({props}) {

    const pathname = usePathname()
    
    const {title, description} = props[0]

    return(
        <div className={pathname === "/web-design" ? "heroContainer" : "heroContainer left"}>
            <h1 className="heroTitle">{title}</h1>
            <p className="heroText">{description}</p>
        </div>     
    )
}