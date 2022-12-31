import React from 'react';
import { SlSocialInstagram, SlSocialFacebook, SlSocialTwitter } from 'react-icons/sl';
import { AiOutlineAim, AiOutlineClockCircle, AiOutlinePhone } from 'react-icons/ai';
import '../css/Info.css';
import Fade from 'react-reveal/Fade';

const Info = () => {

  return (
    <section className='info'>
      <div className="left_content">
        <div className="container ">
          <Fade bottom>
            <div className="container_logo">
              <AiOutlinePhone className ='content_logo' size='25px' color='#fac564'/>
            </div>
            <div className='container_info'>
              <div className="content">
                <a href="tel:8987116415">8 987 116-94-15</a>
              </div>
              <span>Lorem ipsum dolor.</span>  
            </div>
          </Fade>
        </div>
        <div className="container ">
          <Fade bottom>
            <div className="container_logo">
              <AiOutlineAim className ='content_logo' size='25px' color='#fac564'/>
            </div>
            <div className='container_info'>
              <div className="content">
                <p>198 West 21th Street</p>
              </div>
              <span>Lorem ipsum dolor.</span>
            </div>
          </Fade>             
        </div>
        <div className="container ">
          <Fade bottom>
            <div className="container_logo">
              <AiOutlineClockCircle className ='content_logo' size='25px' color='#fac564'/>
            </div>
            <div className='container_info'>
              <div className="content">
                <p>Open Monday-Friday</p>
              </div>
              <span>8:00am - 9:00pm</span>
            </div>
          </Fade>
        </div>
      </div>
      <div className="right_content">
        <div className="social ">
          <Fade bottom>
            <SlSocialInstagram 
              className='social_logo' 
              size='30px' 
              color='#fff'
              onClick={() => window.open("https://stackoverflow.com/questions/13071967/adding-an-onclick-function-to-go-to-url-in-javascript") }/>
          </Fade>
          <Fade bottom>
            <SlSocialFacebook 
              className='social_logo' 
              size='30px' 
              color='#fff'
              onClick={() => window.open("https://stackoverflow.com/questions/13071967/adding-an-onclick-function-to-go-to-url-in-javascript") }/>
          </Fade>
          <Fade bottom>
            <SlSocialTwitter 
              className='social_logo'
              size='30px' 
              color='#fff'
              onClick={() => window.open("https://stackoverflow.com/questions/13071967/adding-an-onclick-function-to-go-to-url-in-javascript") }/>  
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Info