import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import "./booking.css"
import Slider from "react-slick";
import resturants from "../../assets/resturants.png";
import littleCrazy from "../../assets/littleCrazy.png";
import picnicMarket from "../../assets/picnicMarket.png";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";

const Booking = () => {

    const experienceData = [
        {
            id: 1,
            title: "Lucaworld",
            image: slider1,
        },
        {
            id: 2,
            title: "Hawanim Groves City",
            image: slider2,
        },
        {
            id: 3,
            title: "Resturants",
            image: resturants,
        },
        {
            id: 4,
            title: "Little Crazy",
            image: littleCrazy,
        },
        {
            id: 5,
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
        slidesToShow: 4,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        arrows: false,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "40px",
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "30px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "60px",
                }
            },
            {
                breakpoint: 576, // mobile
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                }
            }
        ]
    };

    return (
        <div className='booking section-padding'>
            <div className="container">
                <div className="booking-header">
                    <h2 className="heading">Book General Access ticket and enjoy the attractions for free</h2>
                    <button className='section-button'>Book General Access Ticket <BsArrowRight className='right-arrow' /></button>
                </div>
                <div className="row">
                    <div className="col-md-12" style={{ padding: "0", overflow: "hidden" }}>
                        <div className="booking-slider-container">
                            <Slider {...settings}>
                                {experienceData.map((item) => (
                                    <div key={item.id} className="curate-card">
                                        <img className="booking-slider-images" src={item.image} alt={item.title} />
                                        <div className="booking-card-content">
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
    )
}

export default Booking