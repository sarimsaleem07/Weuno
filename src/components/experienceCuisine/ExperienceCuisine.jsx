import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "./experienceCuisine.css";

import experienceCuisine from "../../assets/experianceCuisine.png";
import experienceCuisine2 from "../../assets/experianceCuisine2.png";
import experienceCuisine3 from "../../assets/experianceCuisine3.png";
import experienceCuisine4 from "../../assets/experianceCuisine4.png";

const ExperienceCuisine = () => {
  const data = {
    heading: "Experience the Finest Cuisine",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    cards: [
      { id: 1, name: "Vida Vera", price: "100 SR PER GUEST", image: experienceCuisine },
      { id: 2, name: "Zama Zulu", price: "100 SR PER GUEST", image: experienceCuisine2 },
      { id: 3, name: "Khawaja Yanni", price: "100 SR PER GUEST", image: experienceCuisine3 },
      { id: 4, name: "Yamagata", price: "100 SR PER GUEST", image: experienceCuisine4 },
    ],
  };

  return (
    <section className="cuisine-section section-padding">
      <div className="cuisine-section-container">
        <div className="cuisine-header">
          <h2 className="heading">{data.heading}</h2>
          <p className="section-data">{data.paragraph}</p>
        </div>

        <div className="row g-4 cuisine-cards">
          {data.cards.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-6">
              <div className="cuisine-card">
                <img src={item.image} alt={item.name} className="cuisine-card-image" />

                <div className="cuisine-card-bottom">
                  <div>
                    <h3 className="cuisine-card-title">{item.name}</h3>
                    <button className="section-button">{item.price}</button>
                  </div>

                  <div className="cuisine-card-icon">
                    <BsArrowRight className="right-arrow" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCuisine;
