import star from "../assets/Star 1.svg";
// import sampleImg from "../images/katie-zaferes.jpg";

export default function Card(props) {
  let badgeText;
  if (!props.available) {
    badgeText = "SOLD OUT";
  } else if (props.location.toLowerCase() === "online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <img className="card--img" src={props.imgSrc}></img>
      <div className="card--content">
        <div className="rating">
          <img src={star} /> {props.rating}{" "}
          <span className="rated-by">
            ({props.noOfRatings}) • {props.location}
          </span>
        </div>
        <div className="card--title">{props.title}</div>
        <div className="price">
          <strong>From ${props.price}</strong> / person
        </div>
      </div>
      {!!badgeText && <div className="card--status">{badgeText}</div>}
    </div>
  );
}
