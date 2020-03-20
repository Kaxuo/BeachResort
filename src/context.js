import React, { Component, useState, useEffect } from 'react';
import items from './data'
import Client from "./Contentful"
import axios from "axios";


// if you want to filter something, go to documentation , rest api (search it )
// Client.getEntries({content_type:"beachResortRoom"})
// .then((response) => console.log(response.items))
// .catch(console.error)

console.log(items)

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        // (at first, we did this locally, so loading is overkill)
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        breakfast: false,
        pets: false
    };

    // get data
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type:"beachResortRoom",
                order:"sys.createdAt"
                // order:"fields.price"
            });
            let rooms = this.formatData(response.items)
            let featuredRooms = rooms.filter(room => room.featured === true)
            // we just set up new variables in the state above, but they start at 0 , so we need to update them when the page renders ! . mathmax return the highest number ! 
            let maxPrice = Math.max(...rooms.map(item => item.price))
            let maxSize = Math.max(...rooms.map(item => item.size))
            this.setState({
                // rooms => rooms = rooms (es6 stuff )
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                // price and max price are different , in roomfilter, price is in the center, maxprice is on the right ! 
                price: maxPrice,
                maxPrice,
                maxSize
            })
        } catch(error){
            console.log(error)
        }
    }

    componentDidMount() {
        // items = import from data
        this.getData()
        // WE DID EVERYTHING FROM LOCAL AND THEN COMMENTED OUT
        // let rooms = this.formatData(items)
        // let featuredRooms = rooms.filter(room => room.featured === true)
        // // we just set up new variables in the state above, but they start at 0 , so we need to update them when the page renders ! . mathmax return the highest number ! 
        // let maxPrice = Math.max(...rooms.map(item => item.price))
        // let maxSize = Math.max(...rooms.map(item => item.size))
        // this.setState({
        //     // rooms => rooms = rooms (es6 stuff )
        //     rooms,
        //     featuredRooms,
        //     sortedRooms: rooms,
        //     loading: false,
        //     // price and max price are different , in roomfilter, price is in the center, maxprice is on the right ! 
        //     price: maxPrice,
        //     maxPrice,
        //     maxSize
        // })
    }

    handleChange = event => {

        // thanks to the lines below, we were able to see what we get after selecting a data ! then we use them to "check" them
        // const type = event.target.type => Select one 
        // const name = event.target.name => Type , ==> Because of the name property in "selection"
        // const value = event.target.value => name of the type (all, single, double , ...) ==> COME FROM OPTION , VALUE PROPERTY ! 

        // Event.TARGET MUST  BE USED 
        const target = event.target
        // if the type is equal to the checkbox, we will have a target checked, if not , we will use target value, WE ONLY DO THIS BECAUSE WE HAVE THE CHECKBOX
        // it uses the check attribute here, it won't target the value, but the checked attribute property, that's why we have this line below
        // we put event.type first below, and thus , we couldn't uncheck the box ! 
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name
        console.log(value)
        this.setState(
            {
                //   for ALL MY INPUTS, whatver name property we get back , just check that value in the this.state, and set this to the value we have input, meaning name(like type,capacity, maxprize ! ) = value we get, like event.target.value
                [name]: value
            }, this.filterRooms)

    }

    // asynchronous function, we run this only when the state is changing ( reason why it's in another function above )

    filterRooms = () => {
        // all the rooms
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state
        // transform values
        let tempRooms = [...rooms]
        // make sure we get integers with capacity
        capacity = parseInt(capacity)
        price = parseInt(price)
        // filter by type
        if (type !== 'all') {
            // return roooms that match the type, we changed the value of the type above , in handlechange
            tempRooms = tempRooms.filter(room => room.type === type)
        }
        // filter by capacity
        if (capacity !== 1) {
            // return only me the room bigger or equal to the number we put
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }
        // filter by price  
        tempRooms = tempRooms.filter(room => room.price <= price)
        // filter by size
        // bigger than min , smaller than max
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
        // filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }
        // filter by pets
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }

        // change state
        this.setState({
            sortedRooms: tempRooms
        })
    }

    formatData(items) {
        let tempItems = items.map(itemA => {
            let id = itemA.sys.id
            let images = itemA.fields.images.map(image => image.fields.file.url)
            //    concerning images, we overwrite images property with the variable images above , we those informations above into room
            let room = { ...itemA.fields, images: images, id }
            return room
        })
        return tempItems

    }

    // access slug we're passing 
    // to give access to getRoom to others files, we need to put in as a property ( Roomprovider , getROom :this.getRoom)

    getRoom = (slug) => {
        // we have an array of rooms property in the state, we don't want to copy but ASSIGN
        let tempRooms = [...this.state.rooms]
        // get the room that matches the slug, used AND displyed in single room 
        const room = tempRooms.find(room => room.slug === slug)
        return room
    }


    render() {
        return (
            // that's how you use that getroom function in SInglepageroom.js
            <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const RoomConsumer = RoomContext.Consumer;

// rooom context = whole context, and come case, we only want to access roomconsumer
export { RoomProvider, RoomConsumer, RoomContext };





// const RoomContext = React.createContext()

// function RoomProvider() {

//     const [state, setState] = useState("")

//     return (
//         <RoomContext.Provider value="hello">
//             {state}
//         </RoomContext.Provider>
//     )
// }

// const RoomConsumer = RoomContext.Consumer

// export { RoomProvider, RoomConsumer, RoomContext };


// always put the context in the src
// provider = Allow access , provides the value
// consumer = use to access that information
// we wrap everything(the context) to the index.js