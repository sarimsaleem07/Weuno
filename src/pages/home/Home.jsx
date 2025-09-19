import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header, About, Footer, FindYourPlace, ExperienceCuisine, CurateExperience, Carousel, Booking } from '../../components';


const Home = () => {
    return (
        <div>
            <Header />
            <Carousel />
            <About />
            <Booking />
            <ExperienceCuisine />
            <CurateExperience />
            <FindYourPlace />
            <Footer />
        </div>
    )
}

export default Home