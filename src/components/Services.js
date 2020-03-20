import React, { useState } from 'react';
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

function Services() {

    const [services] = useState([
        {
            icons: <FaCocktail/>,
            title: "Free cocktails",
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry!'
        },
        {
            icons: <FaHiking />,
            title: "Endless Hiking",
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry!'
        },
        {
            icons: <FaShuttleVan/>,
            title: "Free Shuttle",
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry!'
        },
        {
            icons: <FaBeer/>,
            title: "Strongest Beer",
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry!'
        },
    ])


    return (
        <section className="services">
            <Title title="service" />
            <div className="services-center">
                {/* normally you never put key that way, it needs to be unique, you don't do that if you have changing components, but yeah , you can't add index for the key normally , besides, title, icon and info fit what's above !*/}
                {services.map((item,index) => {
            return  <article key={index} className="service">
                        <span>{item.icons}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
        </section>
    )
}

export default Services;
