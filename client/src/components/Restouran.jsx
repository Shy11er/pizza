import React from 'react';
import '../css/Restouran.css';
import Fade from 'react-reveal/Fade';

const Restouran = () => {
  return (
    <section className='restouran'>
      <div className="restouran_left"></div>
      <div className="restouran_right">
        <div className="restouran_right_top_info">
          <Fade bottom>
            <h1>WELCOME TO A <span>PIZZA</span> RESTAURANT</h1>
          </Fade>
        </div>
        <div className="restouran_right_bottom_info">
          <Fade bottom>
            <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default Restouran