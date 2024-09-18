import Navbar from "../../components/Navbar/Navbar";
import "./locations.css";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";

export default function locations() {
  return (
    <div className="locations">
      <Navbar />
      <div className="locationsGlobal">
        <div className="locationsContainer" id="canada">
          <div className="locationsContent">
            <p className="locationsTitle">Canada</p>

            <div className="adressContainer">
              <div className="adressContent">
                <p className="adressTitle">Designo Central Office</p>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div className="adressContent">
                <p className="adressTitle">Contact</p>
                <p>P : +1 253-863-8967</p>
                <p>M : contact..designo.co</p>
              </div>
            </div>
          </div>
          <picture className="locationsPictureContainer">
            <source
              media="(max-width: 768px)"
              srcSet="/assets/locations/tablet/image-map-canada.png"
            />
            <Image
              src="/assets/locations/desktop/image-map-canada.png"
              width={350}
              height={325}
              alt="Designo Canada maps"
              className="locationsImage"
            />
          </picture>
        </div>
        <div className="locationsContainerReverse" id="australia">
          <div className="locationsContent">
            <p className="locationsTitle">Australia</p>

            <div className="adressContainer">
              <div className="adressContent">
                <p className="adressTitle">Designo AU Office</p>
                <p>19 Balonne Street</p>
                <p>New South Wales 2443</p>
              </div>
              <div className="adressContent">
                <p className="adressTitle">Contact</p>
                <p>P : (02) 6720 9092</p>
                <p>M : contact..designo.au</p>
              </div>
            </div>
          </div>
          <picture className="locationsPictureContainer">
            <source
              media="(max-width: 768px)"
              srcSet="/assets/locations/tablet/image-map-australia.png"
            />
            <Image
              src="/assets/locations/desktop/image-map-australia.png"
              width={350}
              height={325}
              alt="Designo Australia maps"
              className="locationsImage"
            />
          </picture>
        </div>
        <div className="locationsContainer" id="uk">
          <div className="locationsContent">
            <p className="locationsTitle">United Kingdom</p>
            <div className="adressContainer">
              <div className="adressContent">
                <p className="adressTitle">Designo UK Office</p>
                <p>13 Colorado Way</p>
                <p>Rhyd-y-fro SA8 9GA</p>
              </div>

              <div className="adressContent">
                <p className="adressTitle">Contact</p>
                <p>P : 078 3115 1400</p>
                <p>M : contact..designo.uk</p>
              </div>
            </div>
          </div>
          <picture className="locationsPictureContainer">
            <source
              media="(max-width: 768px)"
              srcSet="/assets/locations/tablet/image-map-uk.png"
              className="locationsImage"
            />
            <Image
              src="/assets/locations/desktop/image-map-united-kingdom.png"
              width={350}
              height={325}
              alt="Designo United-Kingdom maps"
              className="locationsImage"
            />
          </picture>
        </div>
      </div>
      <Footer />
    </div>
  );
}