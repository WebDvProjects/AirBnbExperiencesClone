import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import {
  katieImg,
  mountainBikeImg,
  weddingImg,
} from "./images/activites/index";

const activities = [
  {
    id: "1",
    title: "Life Lessons with Katie Zaferes",
    imageSrc: katieImg,
    rating: 5.0,
    noOfRatings: 6,
    location: "Online",
    price: 136,
    available: false,
  },
  {
    id: "2",
    title: "Learn Wedding Photography",
    imageSrc: weddingImg,
    rating: 5.0,
    noOfRatings: 30,
    location: "Online",
    price: 125,
    available: true,
  },
  {
    id: "3",
    title: "Group Mountain Bike Tour",
    imageSrc: mountainBikeImg,
    rating: 4.8,
    noOfRatings: 2,
    location: "Norway",
    price: 50,
    available: true,
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <section className="cards">
        {activities.map((activity) => {
          {
            /* can also use spread to make it easier */
            {
              /* e.g <Card key={activity.id} {...activity} />; */
            }
          }
          return <Card key={activity.id} activity={activity} />;
        })}
      </section>
    </div>
  );
}

export default App;
