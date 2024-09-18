import Navbar from "../../components/Navbar/Navbar";
import "./about.css";
import Image from "next/image";
import Cities from "../../components/Cities/Cities";
import Footer from "../../components/Footer/Footer";

export default function Company() {
  return (
    <div className="about">
      <Navbar />
      <Image
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        width={1000}
        height={590}
        alt="Backrgound image"
        className="backgroundImageLeft"
      />
      <div className="aboutHero">
        <div className="aboutHeroContainer">
          <div className="aboutHeroContent">
            <h1 className="aboutHeroTitle">About Us</h1>
            <p className="aboutHeroText">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </div>
        <Image
          src="/assets/about/desktop/image-about-hero.jpg"
          width={0}
          height={0}
          sizes="100%"
          alt="Brainstorming team"
          className="aboutHeroImage"
        />
      </div>
      <div className="aboutExpertise">
        <Image
          src="/assets/about/desktop/image-world-class-talent.jpg"
          width={0}
          height={0}
          sizes="100%"
          alt="Woman seen from behind contemplating frames"
          className="aboutExpertiseImage"
        />
        <div className="aboutExpertiseContainer">
          <div className="aboutExpertiseContent">
            <h1 className="aboutExpertiseTitle">World-class talent</h1>
            <p className="aboutExpertiseText">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p>
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        width={1000}
        height={590}
        alt="Backrgound image"
        className="backgroundImageRight"
      />
      <Cities />
      <div className="aboutInfo">
        <div className="aboutInfoContainer">
          <div className="aboutInfoContent">
            <h1 className="aboutInfoTitle">The real deal</h1>
            <p className="aboutInfoText">
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <p>
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>
        </div>
        <Image
          src="/assets/about/desktop/image-real-deal.jpg"
          width={0}
          height={0}
          sizes="100%"
          alt="Woman seen from behind contemplating frames"
          className="aboutInfoImage"
        />
      </div>
      <Footer />
    </div>
  );
}
