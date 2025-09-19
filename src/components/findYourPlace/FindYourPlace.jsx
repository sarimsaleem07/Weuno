import React from 'react'
import findYourPlace from "../../assets/findYourPlace.png"
import { BsArrowRight } from 'react-icons/bs'
import "./findYourPlace.css"

const FindYourPlace = () => {
    return (
        <div className='find-your-Page section-padding'>
            <div className="container">
                <div className="row find-your-page-container">
                        <div className="col-md-7">
                            <div className="find-your-place-image">
                                <img src={findYourPlace} alt="" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="find-your-place-data">
                                <h5 className='sub-heading'>Experience the groves</h5>
                                <h2 className='heading'>Find your place</h2>
                                <p className='section-data'>Our interactive map will show you the way to the shops and restaurants that you want to see.</p>
                                <button className='section-button'>Open the Map <BsArrowRight className='right-arrow' /></button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default FindYourPlace