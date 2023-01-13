import star from "../assets/Star 1.svg";
// import sampleImg from "../images/katie-zaferes.jpg";

export default function Card(props) {
  let badgeText;
  if (!props.activity.available) {
    badgeText = "SOLD OUT";
  } else if (props.activity.location.toLowerCase() === "online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <img className="card--img" src={props.activity.imageSrc}></img>
      <div className="card--content">
        <div className="rating">
          <img src={star} /> {props.activity.rating}{" "}
          <span className="rated-by">
            ({props.activity.noOfRatings}) • {props.activity.location}
          </span>
        </div>
        <div className="card--title">{props.activity.title}</div>
        <div className="price">
          <strong>From ${props.activity.price}</strong> / person
        </div>
      </div>
      {!!badgeText && <div className="card--status">{badgeText}</div>}
    </div>
  );
}
