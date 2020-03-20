import React from 'react';
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'


function RoomsFilter({ rooms }) {

    const context = useContext(RoomContext)
    const { handleChange, type, capacity, price, maxPrice, minPrice, minSize, maxSize, breakfast, pets } = context
    // get unique values , REMEMBER THE STEPS BELOW BECAUSE THEY RE REALLY USEFUL
    const getUnique = (items, value) => {
        return [...new Set(items.map(item => item[value]))]
    }
    // getunique types, types as a parameters, and rooms as the array used !
    let types = getUnique(rooms, 'type')
    // and  below, you add the "all" in types
    types = ["all", ...types]
    // map to jsx
    types = types.map((item, index) => {
        // check context , value is important too 
        return <option value={item} key={index}>{item}</option>
    })


    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item} >{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                {/* {selec type} */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    {/* in select name, we NEED to use type(used to change data) because it's the same as in context (in the handle change function), the type,is THE ROOM TYPE */}
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
                </div>
                {/* end select type  */}
                {/* {Guests } */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    {/* in select name, we NEED to use capacity because it's the same as in context (in the handle change function), the type,is THE ROOM TYPE */}
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{people}</select>
                </div>
                {/* end select type  */}
                {/* roomprice */}
                <div className="form-group">
                    {/* why 600 € ? because in context, we made a function math.max to put the highest in price */}
                    <label htmlFor="price" >room price {price} € </label>
                    {/* to change it , you need the name=price , and eveytime you change it, the price changes in the state*/}
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
                {/* end roomprice */}
                {/* size */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* end size */}
                {/* extra */}
                <div className="form-grou">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
                {/* end of extra */}
            </form>
        </section>
    )
}

export default RoomsFilter;
