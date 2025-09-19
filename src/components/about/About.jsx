import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import "./about.css"
import video from "../../assets/video.mp4"

const About = () => {

    return (
        <div className='aboout-section section-padding'>
            <div className="aboout-section-container">
                <div className="about-header">
                    <h2 className='heading'>Mall Of: Endless Possibilities</h2>
                    <p className='section-data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="aboout-bottom">
                    <iframe className='video' src={video} frameborder="0"></iframe>
                </div>
                <div className="get-ticket">
                    <h5 className='sub-heading'>25 SR/GUEST</h5>
                    <div className="get-ticket-heading-container">
                        <h2 className='get-ticket-heading'>Get your General Access Ticket</h2>
                        <BsArrowRight className="get-ticket-arrow" />
                    </div>
                    <p className='section-data'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text e</p>
                </div>
            </div>
        </div>
    )
}

export default About