import styled from 'styled-components'
import defaultImg from '../images/room-1.jpeg'

// check the url background !! , you need to remember the "img" because it will the property used in the SingleRoom.JS

const StyledHero = styled.header`
    min-height: 60vh;
    background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

`

export default StyledHero