"use client"
import data from "../data.json"
import "./pages.css"
import Navbar from "@/components/Navbar/Navbar"
import Card from "@/components/Card/Card"
import Image from "next/image"
import Categories from "@/components/Categories/Categories"
import Footer from "@/components/Footer/Footer"
import Banner from "@/components/Banner/Banner"

export default function WebDesign() {

    return(
        <div className="pagesBase">
            <Navbar/>

            <Image 
             src="/assets/shared/desktop/bg-pattern-leaf.svg"
             width={1000}
             height={590}
             alt="Backrgound image"
             className="pageBackground"
            />

            <Banner props={data.web.banner}/>

            <div className="cardContainer">
            {data.web.projects.map((project, index) => (
                <Card key={index} props={project}/>
            ))}
            </div>

            <div className="categories">
                {data.web.others.map((category, index) => (
                    <Categories key={index} props={category} />
                ))}
            </div>

            <Footer />

        </div>

    )
}