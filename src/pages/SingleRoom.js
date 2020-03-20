import React, { useContext, useState } from 'react';
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
// we will have access to all the rooms ( + specific ) and the functions too 
import { RoomContext } from '../context'
// Check the StyledHero components.js 
import StyledHero from '../components/StyledHero'



function SingleRoom(props) {

    const get = useContext(RoomContext)
    // where do props come from ? check Room.js , in Link but also the variables above on the same file
    console.log(props.match.params.slug)
    const [state, setstate] = useState({
        slug: props.match.params.slug,
        defaultBcg
    })
    function divide(square) {
        return square / 10, 764
    }
    // remmeber the lines below !! get id ! we also get the "getroom function" created in context

    const getIt = get.getRoom
    const room = getIt(state.slug)
    console.log(room)
    // at that point, we can render the rooms however we can't refresh because it's "undefined". => Can't render anything if you don't click it from the homepage 
    // if the room is undefined !?
    if (!room) {
        return <div className="error">
            <h3> No such room could be found ...</h3>
            <Link to='/rooms' className="btn-primary">
                Back to Rooms
            </Link>
        </div>
    }
    // if room is defined
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
    // const [mainImg,img1,img2] = images;
    const [mainImg, ...defaultImg] = images
    const imgRendered = defaultImg.map((item, index) => { return <img key={index} src={item} alt={name} /> })
    // remmeber the line below !! ternary in a variable ! 
    const maxcapacity = (capacity > 1) ? `${capacity} people` : `${capacity} person` 
    const pet = pets ? 'pets allowed' : "no pets allowed"
    const ext = extras.map((item,index) => {return <li key ={index}>{item}</li>})
 
    return (
        <>
            {/*  remember the StyledHero component !  */}
            <StyledHero img={mainImg || state.defaultBcg}>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className="btn-primary">
                        Back to Rooms
            </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {imgRendered}
                </div>
                <div className="single-room-info">
                    <article className="description">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>price : {price} €</h6>
                        <h6>size : {divide({size})} m²</h6>
                        <h6>{maxcapacity}</h6>
                        <h6>{pet}</h6>
                        <h6>{breakfast && "free breakfast included"} </h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
                {ext}
            </ul>


            </section>
        </>
    )
}

export default SingleRoom;
