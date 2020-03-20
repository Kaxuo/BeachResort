import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

function Home() {

    return (
        <>
            <Hero hero="defaultHero">
                {/* where do title and subtitle come from ? Check the components Banner , mainly, they're props passed along */}
                <Banner title='luxurious rooms' subtitle="deluxe rooms starting at 299€">
                    {/* below , children of Banner  */}
                    <Link to='/rooms' className="btn-primary">
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms/>
        </>
    )
}

export default Home;
