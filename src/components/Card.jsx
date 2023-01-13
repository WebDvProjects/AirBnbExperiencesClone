import star from "../assets/Star 1.svg";
// import sampleImg from "../images/katie-zaferes.jpg";

export default function Card(props) {
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
      <div className="card--status">
        {props.available ? "ONLINE" : "SOLD OUT"}
      </div>
    </div>
  );
}
