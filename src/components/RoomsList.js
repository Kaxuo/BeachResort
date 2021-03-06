import React from 'react';
import Room from "./Room"



// parameters in roomlist is the same as in RoomsContainer.JS

function RoomsList({ rooms }) {

    // console.log(rooms)

    const roomDisplayed = rooms.map(item => {
        return <Room key={item.id} room={item} />
    })

// if in context, we remove "sorted room", we shouldn't have anything below 

    const roomlist = (rooms.length === 0) ?
        (
            <div className="empty-search">
                <h3> unfortunately no rooms matched your search parameters</h3>
            </div>
        ) : (
            <section className="roomslist">
                <div className="roomslist-center">
                    {roomDisplayed}
                </div>
            </section>
        )


    return (
        <>
            {roomlist}
        </>
    )
}

export default RoomsList;
