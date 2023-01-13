import contentImg from "../images/hero-section.png";
import { a, b, c, d, e, f, g, h, i } from "../images/heroSection/index";

const images = [
  { src: a, key: 0 },
  { src: b, key: 1 },
  { src: c, key: 2 },
  { src: d, key: 3 },
  { src: e, key: 4 },
  { src: f, key: 5 },
  { src: g, key: 6 },
  { src: h, key: 7 },
  { src: i, key: 8 },
];

export default function HeroSection(props) {
  return (
    <section className="hero-section">
      <div className="img-container">
        <div className="img-column">
          <img src={images[0].src} />
        </div>
        <div className="img-column">
          <img src={images[1].src} />
          <img src={images[2].src} />
        </div>
        <div className="img-column">
          <img src={images[3].src} />
          <img src={images[4].src} />
        </div>
        <div className="img-column">
          <img src={images[5].src} />
          <img src={images[6].src} />
        </div>
        <div className="img-column">
          <img src={images[7].src} />
          <img src={images[8].src} />
        </div>
      </div>
      <div className="content">
        <div className="title">Online Experiences</div>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
