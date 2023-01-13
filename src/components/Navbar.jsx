import airbnbLogo from "../assets/airbnb-logo.svg";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <img src={airbnbLogo} alt="Airbnb logo" />
    </nav>
  );
}
