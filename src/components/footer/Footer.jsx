import React from 'react'
import playStore from "../../assets/playStore.svg"
import appStore from "../../assets/appStore.svg"
import mastercardLogo from "../../assets/mastercardLogo.png"
import maskGroup from "../../assets/maskGroup.png"
import visaCard from "../../assets/visaCard.svg"
import footerLogo from "../../assets/footer-logo.png"
import { SiSnapchat } from 'react-icons/si'
import { BsTwitterX } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer section-padding">
            <div className="container">
                <div className="row">
                    <div className="footer-top">
                        <div className="col-md-7 col-lg-7">
                            <div className="footer-heading">
                                <h2 className="heading">
                                    Join us for an unforgettable experience
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5">
                            <div className="footer-download-app">
                                <div className="footer-download-inner">
                                    <h5 className="sub-heading">
                                        Download the groves app
                                    </h5>
                                    <div className="footer-app-links">
                                        <img src={playStore} alt="Play Store" className="footer-app-img" />
                                        <img src={appStore} alt="App Store" className="footer-app-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="footer-info">
                        <div className="col-md-4 col-lg-4">
                            <h6 className="footer-info-title">Location</h6>
                            <ul className="footer-info-list">
                                <li>Al-Hizam Park</li>
                                <li>Al-Semairi, Yanbu Al Bahr 46455</li>
                                <li>Riyadh Saudi Arabia</li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <h6 className="footer-info-title">Working Hours</h6>
                            <ul className="footer-info-list">
                                <li>Sunday until Thurs: 4:00 PM</li>
                                <li>Fri & Sat 2:30 PM</li>
                            </ul>
                            <ul className="footer-info-list" style={{ marginTop: "20px" }}>
                                <li>Gates Close at</li>
                                <li>Sat until Wed: 12:00 AM</li>
                                <li>Thu & Fri 12:30 AM</li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-4" >
                            <h6 className="footer-info-title">Guest Service Call</h6>
                            <ul className="footer-info-list">
                                <li>cc@thegroves-sa.com</li>
                                <li>920001672</li>
                            </ul>
                            <ul className="footer-info-list" style={{ marginTop: "20px" }}>
                                <li>+966556631309</li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="footer-middle">
                        <div className="col-md-8 col-lg-8">
                            <div className="footer-logo-wrapper">
                                <img src={footerLogo} alt="Footer Logo" className="footer-logo" />
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="footer-social-icons">
                                <FaTiktok className="footer-icon" />
                                <AiFillInstagram className="footer-icon" />
                                <BsTwitterX className="footer-icon" />
                                <SiSnapchat className="footer-icon" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="footer-bottom">
                        <div className="col-md-8 col-lg-8">
                            <ul className="footer-links">
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>&copy; 2023 The Groves for Entertainment</li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="footer-payment-methods">
                                <img src={visaCard} alt="Visa" className="footer-payment-icon" />
                                <img src={mastercardLogo} alt="Mastercard" className="footer-payment-icon" />
                                <img src={maskGroup} alt="Payment Logo" className="footer-payment-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
