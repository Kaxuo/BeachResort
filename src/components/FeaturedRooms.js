import React,{useContext} from 'react';
// we will have access to all the rooms ( + specific ) and the functions too 
import {RoomContext} from '../context'
import Loading from "./Loading"
import Room from "./Room"
import Title from './Title'

function FeaturedRooms() {
    
    const room = useContext(RoomContext)
    // Mistake before , but line below resolved it , you couldn't refresh the page first
    // previous code was room.featuredRooms = ..... , didn't work because you replaced the data , resolved by creating a new variable ! 
    let featured = room.featuredRooms
    // featuredrooms has been renamed to rooms, below , not needed though
    // let {loading, featuredRooms:rooms} = useContext(RoomContext)
    // this is where we display the featured rooms below 
    featured = featured.map(room => {
        return <Room key={room.id} room ={room}/>
    })

    return (
        <section className="featured-rooms">
            <Title title="Featured Rooms"/>
            <div className="featured-rooms-center">
                {room.loading ? <Loading/> : featured}
            </div>
        </section>
    )
}

export default FeaturedRooms;
