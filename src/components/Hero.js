import React from 'react';

// we put children as props cause we will render different things depending on the situation, hero is mainpage, while children is the single room page
// the hero props + classname hero will be used in Home.js as a classname 



function Hero({ children, hero }) {

    return (
        <header className={hero}>
            {children}
        </header>
    )
}

Hero.defaultProps = {
    hero: "defaultHero"
};

// we do that in case we don't have any image to display(like in error page)

export default Hero;
