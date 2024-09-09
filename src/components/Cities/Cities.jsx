import "./cities.css"
import Image from "next/image"
import Link from "next/link"

export default function Cities() {

    return(
        <section className="cities">

        <div className="citiesContent">
          <div className="citiesImageContainer">
            <Image
              src="/assets/shared/desktop/illustration-canada.svg"
              width={202}
              height={202}
              alt="CN Tower canada illustration"
            />
            <svg className="citiesBackgroundLeft" width="220" height="220" viewBox="0 0 650 690" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%"y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0"offset="0%"/><stop stopColor="#5D0202" stopOpacity=".498"offset="100%"/></linearGradient></defs><circle fill="url(#a)"transform="matrix(0 -1 -1 0 640 640)" cx="320" cy="320" r="320"fillRule="evenodd" opacity=".309"/></svg>
          </div>

          <div className="citiesTextContainer">
            <p className="citiesTitle">CANADA</p>
            <Link href="/locations#canada">
                <button className="citiesButton">SEE LOCATION</button>
            </Link>
          </div>
        </div>

        <div className="citiesContent">
          <div className="citiesImageContainer">
            <Image
              src="/assets/shared/desktop/illustration-australia.svg"
              width={202}
              height={202}
              alt="Sidney opera illustration"
            />
            <svg className="citiesBackgroundCentered" width="210" height="220" viewBox="0 0 650 550" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%"y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0"offset="0%"/><stop stopColor="#5D0202" stopOpacity=".498"offset="100%"/></linearGradient></defs><circle fill="url(#a)"transform="matrix(0 -1 -1 0 640 640)" cx="320" cy="320" r="320"fillRule="evenodd" opacity=".309"/></svg>
          </div>

          <div className="citiesTextContainer">
            <p className="citiesTitle">AUSTRALIA</p>
            <Link href="/locations#australia">
                <button className="citiesButton">SEE LOCATION</button>
            </Link>
          </div>
        </div>

        <div className="citiesContent">
          <div className="citiesImageContainer">
            <Image
              src="/assets/shared/desktop/illustration-united-kingdom.svg"
              width={202}
              height={202}
              alt="Tower bridge UK illustration"
            />
            <svg className="citiesBackgroundRight" width="210" height="220" viewBox="0 0 650 550" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%"y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0"offset="0%"/><stop stopColor="#5D0202" stopOpacity=".498"offset="100%"/></linearGradient></defs><circle fill="url(#a)"transform="matrix(0 -1 -1 0 640 640)" cx="320" cy="320" r="320"fillRule="evenodd" opacity=".309"/></svg>
          </div>            

          <div className="citiesTextContainer">
            <p className="citiesTitle">UNITED KINGDOM</p>
            <Link href="/locations#uk">
                <button className="citiesButton">SEE LOCATION</button>
            </Link>
          </div>
        </div>
      </section>
    )
}