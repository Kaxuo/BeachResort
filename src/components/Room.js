import React from 'react';
import { Link } from "react-router-dom"
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'

// room is the same as the proprety in featured rooms.js
function Room({ room }) {

    // console.log(room)
    const { name, slug, images, price } = room

    return (
        <article className="room">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt="single room"/>
                <div className="price-top">
                    <h6>{price} €</h6>
                    <p>per night</p>
                </div>
                {/* link to single page room , thanks to the slug */}
                <Link to={`/rooms/${slug}`} className="btn-primary room-link"> Features</Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    )
}

export default Room;

// make sure the props received are those below
Room.propTypes={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}