import React, { useState } from 'react';
import '../css/WorkInfo.css';
import { GiCook, GiPizzaSlice } from 'react-icons/gi';
import { FaAward } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import Fade from 'react-reveal/Fade';
import { useSpring, animated } from 'react-spring';


const WorkInfo = () => {
  const info = [
    {'logo': GiPizzaSlice, "number": 100, "title": "Pizza Branches"},
    {"logo": FaAward, "number": 85, "title": "Number of Awards"},
    {"logo": IoMdPeople, "number": 10567, "title": "Happy Customer"},
    {"logo": GiCook, "number": 900, "title": "Staff"}
  ];
  
  let items = [];

  const Number = ({n}) => {
    const { number } = useSpring({
      from: { number: 0},
      number: n,
      delay: 300,
      config: { mass: 1, tension: 10, friction: 10},
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
  }

  const Icon = ({data}) => {
    return (
      <div className="icon_block">
        <div className="icon_image">
            <data.logo className='icon_image_img'/>
        </div>
        <div className="icon_info">
          <h1 className='icon_info_h1'>
            <Number n={data.number} />
          </h1>
          <p>{data.title}</p>
        </div>
      </div>
    )
  }

  info.forEach((el) => {
    items.push(<Icon data={el}/>);
  });

  const [scroll, setScroll] = useState(0); 

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section className='workInfo' style={{backgroundPosition : `50% ${window.scrollY*1.1 - 3000}px`}}>
        <div className="overlay">
          <div className="workInfo_content" >
            <Fade bottom>
              {items}
            </Fade>
          </div>
        </div>
    </section>
  )
}

export default WorkInfo