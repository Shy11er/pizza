import React from 'react';
import '../css/Footer.css';
import {BsHeartFill} from 'react-icons/bs';
import { SlSocialInstagram, SlSocialFacebook, SlSocialTwitter } from 'react-icons/sl';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer_container">
            <div className="footer_container_top">
                <div className="footer_about">
                    <h1>About Us</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium sapiente neque totam veritatis, assumenda a libero cupiditate suscipit inventore ab?</p>
                    <div className="social_apps">
                        <div className='social_apps_circle'>
                            <SlSocialInstagram className="social_apps_icon" onClick={() => window.open("https://stackoverflow.com/questions/13071967/adding-an-onclick-function-to-go-to-url-in-javascript")} />
                        </div>
                        <div className='social_apps_circle'>
                            <SlSocialFacebook className="social_apps_icon" onClick={() => window.open("https://stackoverflow.com/questions/13071967/adding-an-onclick-function-to-go-to-url-in-javascript")} />
                        </div>
                        <div className='social_apps_circle'>
                            <SlSocialTwitter className="social_apps_icon" onClick={() => window.open("https://stackoverflow.com/questions/13071967/adding-an-onclick-function-to-go-to-url-in-javascript")} />
                        </div>
                    </div>
                </div>
                <div className="blog_about"></div>
                <div className="footer_services"></div>
                <div className="footer_question"></div>
            </div>
            <div className="footer_container_bottom">
                <p>Copyright ©2023 All rights reserved | This template is made with <BsHeartFill size='15px' color='#ffffffb3' style={{margin: '0 5px', }}/> by AJAX</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer