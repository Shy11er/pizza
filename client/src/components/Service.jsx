import React from 'react';
import '../css/Service.css';
import logo1 from '../assets/logo/food.jpeg';
import logo2 from '../assets/logo/deliver.jpg';
import logo3 from '../assets/logo/pizzas.jpeg';
import Fade from 'react-reveal/Fade';

const Service = () => {
    const information = [
        {"logo": logo1, "title": "HEALTHY FOODS", "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo dolor aperiam quisquam tempore iure."},
        {"logo": logo2, "title": "FASTED DELIVERY", "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo dolor aperiam quisquam tempore iure."},
        {"logo": logo3, "title": "ORIGINAL RECIPES", "info": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non illo dolor aperiam quisquam tempore iure."}
    ];

    let itemsList = [];

    const Card = ({data}) => {
        return (
            <div className="service_content_container">
                <div className="service_container_top">
                    <Fade bottom>
                        <div className="image">
                            <img className="img" src={data.logo}></img>
                        </div>
                    </Fade>
                </div>
                <div className="service_container_bottom">
                    <Fade bottom>
                        <h1>{data.title}</h1>
                    </Fade>
                    <Fade bottom>
                        <p>{data.info}</p>
                    </Fade>
                </div>
            </div>
        )
    };

    information.forEach((d) => {
        itemsList.push(<Card data={d} />);
    });

    return (
        <section className='service'>
            <div className="service_content">
                <div className="service_content_top">
                    <Fade bottom>
                        <h1>Our Service</h1>
                    </Fade>
                    <Fade bottom>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam unde mollitia, non facere ab? Perferendis quam unde cupiditate quidem.</p>
                    </Fade>
                </div>
                <div className="service_content_bottom">
                {itemsList}
                </div>        
            </div>
        </section>
    )
}

export default Service