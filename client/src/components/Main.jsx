import React from 'react';
import '../css/Main.css';
import Fade from 'react-reveal/Fade';

const Main = () => {
  return (
    <div className='main'>
        <div className="main cover">
          <div className="main_content">
            <Fade bottom><h2>Welcome</h2></Fade>
            <Fade bottom><h1>We cooked your desired pizza recipe</h1></Fade>
            <Fade bottom><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, illo.</span></Fade>
            <div className="main_content buttons">
              <Fade bottom>
                <div className="order_now">
                  <a href="#1">Order Now</a>
                </div>
              </Fade>
              <Fade bottom>
                <div className="view_menu">
                  <a href="#2">View Menu</a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
    </div>

    // <div className='main'>
    // <div className="main cover">
    //   <div className="main_content">
    //     <h2>Welcome</h2>
    //     <h1>We cooked your desired pizza recipe</h1>
    //     <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, illo.</span>
    //     <div className="main_content buttons">
    //       <div className="order_now">
    //         <a href="#1">Order Now</a>
    //       </div>
    //       <div className="view_menu">
    //         <a href="#2">View Menu</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
  )
}

export default Main