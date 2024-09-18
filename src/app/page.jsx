import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/Button/Button";
import Link from "next/link";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <section className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className={styles.heroText}>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link href="#service">
            <Button props={"LEARN MORE"} />
          </Link>
        </div>
        <Image
          src="/assets/home/desktop/image-hero-phone.png"
          width={640}
          height={930}
          alt="Backrgound image"
          className={styles.heroImage}
        />
      </section>
      <Image
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        width={1000}
        height={590}
        alt="Backrgound image"
        className={styles.backgroundImageLeft}
      />
      <section className={styles.category} id="service">
        <Link href="/web-design" className={styles.imageLeftContainer}>
          <div className={styles.categoryOverlay}></div>
          <h2 className={styles.categoryTitle}>WEB DESIGN</h2>
          <div className={styles.categoryContent}>
            <p className={styles.categoryText}>VIEW PROJECTS</p>
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
        <div className={styles.imageRightContainer}>
          <Link href="/app-design" className={styles.categoryImageTop}>
            <div className={styles.categoryOverlay}></div>
            <h2 className={styles.categoryTitle}>APP DESIGN</h2>

            <div className={styles.categoryContent}>
              <p className={styles.categoryText}>VIEW PROJECTS</p>

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
          <Link href="/graphic-design" className={styles.categoryImageBottom}>
            <div className={styles.categoryOverlay}></div>
            <h2 className={styles.categoryTitle}>GRAPHIC DESIGN</h2>

            <div className={styles.categoryContent}>
              <p className={styles.categoryText}>VIEW PROJECTS</p>

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
        </div>
      </section>
      <Image
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        width={1000}
        height={590}
        alt="Backrgound image"
        className={styles.backgroundImageRight}
      />
      <section className={styles.skills}>
        <div className={styles.skillsContent}>
          <div className={styles.skillsImageContainer}>
            <Image
              src="/assets/home/desktop/illustration-passionate.svg"
              width={202}
              height={202}
              alt="Happy man working in front of his tablet"
            />
            <svg
              className={styles.skillsBackgroundLeft}
              width="215"
              height="220"
              viewBox="0 0 650 550"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                  <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                  <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
                </linearGradient>
              </defs>
              <circle
                fill="url(#a)"
                transform="matrix(0 -1 -1 0 640 640)"
                cx="320"
                cy="320"
                r="320"
                fillRule="evenodd"
                opacity=".309"
              />
            </svg>
          </div>
          <div className={styles.skillsTextContainer}>
            <p className={styles.skillsTitle}>PASSIONATE</p>
            <p className={styles.skillsText}>
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>
        <div className={styles.skillsContent}>
          <div className={styles.skillsImageContainer}>
            <Image
              src="/assets/home/desktop/illustration-resourceful.svg"
              width={202}
              height={202}
              alt="Man back view working on his office"
            />
            <svg
              className={styles.skillsBackgroundCentered}
              width="215"
              height="220"
              viewBox="0 0 650 550"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                  <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                  <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
                </linearGradient>
              </defs>
              <circle
                fill="url(#a)"
                transform="matrix(0 -1 -1 0 640 640)"
                cx="320"
                cy="320"
                r="320"
                fillRule="evenodd"
                opacity=".309"
              />
            </svg>
          </div>
          <div className={styles.skillsTextContainer}>
            <p className={styles.skillsTitle}>RESOURCEFUL</p>
            <p className={styles.skillsText}>
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        <div className={styles.skillsContent}>
          <div className={styles.skillsImageContainer}>
            <Image
              src="/assets/home/desktop/illustration-friendly.svg"
              width={202}
              height={202}
              alt="Man and women working together"
            />
            <svg
              className={styles.skillsBackgroundRight}
              width="215"
              height="220"
              viewBox="0 0 650 550"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
                  <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
                  <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
                </linearGradient>
              </defs>
              <circle
                fill="url(#a)"
                transform="matrix(0 -1 -1 0 640 640)"
                cx="320"
                cy="320"
                r="320"
                fillRule="evenodd"
                opacity=".309"
              />
            </svg>
          </div>
          <div className={styles.skillsTextContainer}>
            <p className={styles.skillsTitle}>FRIENDLY</p>
            <p className={styles.skillsText}>
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}