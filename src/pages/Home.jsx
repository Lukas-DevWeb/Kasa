import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";
import img from "../assets/home_pic.jpg";

export default function Home() {
  return (
    <main>
      <Banner
        image={img}
        text="Chez vous, partout et ailleurs"
        alt="Image de la bannière"
      />
      <section className="cardsContainer">
        {logements.map((location, index) => (
          <Card location={location} key={index} />
        ))}
      </section>
    </main>
  );
}