import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./carousel.css";
import carousel from "../../assets/carousel.png"
import { BsArrowRight } from "react-icons/bs";

const slides = [
    {
        id: 1,
        title: "The new era of luxury",
        subtitle: "KHAWAJA YANNI",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
        button: "Book reservation now",
        image: carousel
    },
    {
        id: 2,
        title: "Dine in Elegance",
        subtitle: "FINE DINING",
        description: "Experience world-class cuisine in an unforgettable ambiance.",
        button: "Explore dining",
        image:
            "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1600&q=80",
    },
    {
        id: 3,
        title: "Unforgettable Events",
        subtitle: "EXCLUSIVE",
        description: "Luxury events crafted to perfection for every occasion.",
        button: "Discover events",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    },
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    return (
        <div className="carousel">
            <AnimatePresence>
                <motion.div
                    key={slides[current].id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="carousel-slide"
                >
                    <img
                        src={slides[current].image}
                        alt={slides[current].title}
                        className="carousel-image"
                    />
                    <div className="carousel-overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="carousel-data">
                                        <h5 className="sub-heading">{slides[current].subtitle}</h5>
                                        <h1 className="carousel-title">{slides[current].title}</h1>
                                        <p className="section-data">{slides[current].description}</p>
                                        <button className='section-button'>{slides[current].button} <BsArrowRight className='right-arrow' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`dot ${index === current ? "active" : ""}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
