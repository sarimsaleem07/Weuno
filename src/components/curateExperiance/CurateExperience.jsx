import React from "react";
import Slider from "react-slick";
import experiences from "../../assets/experiences.png";
import events from "../../assets/events.png";
import littleCrazy from "../../assets/littleCrazy.png";
import picnicMarket from "../../assets/picnicMarket.png";
import "./curateExperience.css";
import { BsArrowRight } from "react-icons/bs";

const CurateExperience = () => {
    const experienceData = [
        {
            id: 1,
            title: "Experiences",
            image: experiences,
        },
        {
            id: 2,
            title: "Events",
            image: events,
        },
        {
            id: 3,
            title: "Little Crazy",
            image: littleCrazy,
        },
        {
            id: 4,
            title: "Picnic Market",
            image: picnicMarket,
        },
    ];

    const settings = {
        className: "center",
        autoplay: true,
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 2.5,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        arrows: false,
        cssEase: "linear",
         responsive: [
        {
            breakpoint: 1200, 
            settings: {
                slidesToShow: 2,
                centerPadding: "15px",
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                centerPadding: "40px",
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerPadding: "30px",
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                centerPadding: "0px",
            },
        },
    ],

    };

    return (
        <div className="curate-experience section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                            <div className="curate-experience-header">
                                <h2 className="heading">Curate your experience as you like</h2>
                                <button className='section-button'>Open the Map <BsArrowRight className='right-arrow' /></button>
                            </div>
                    </div>
                    <div className="col-md-7" style={{ padding: "0", overflow: "hidden" }}>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {experienceData.map((item) => (
                                    <div key={item.id} className="curate-card">
                                        <img className="slider-images" src={item.image} alt={item.title} />
                                        <div className="card-content">
                                            <h3>{item.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurateExperience;
