import { Card } from "react-bootstrap";
import styled from "styled-components";

export const H1 = styled.h1`
color: red;
`

export const NavButton = styled.header`
    position: fixed;
    height: 55px;
    bottom: 0vh;
    background-color:#FF7674;

    @media (min-width: 500px) {
        top: 20px;
        right: 20px;
        width: 400px !important;
    }
`

export const ImgNavB = styled.section`
    img {
        width: 32px;
        height: 32px; 
    }
    
    &:hover {
        img {
            filter: initial;
        }
    }

    &:focus {
        img {
            filter: initial;
        }
    }
`

export const IMG = styled.img`
border-radius: 50%;
`
export const IMG2 = styled.img`
position: absolute;
top: 93px;
left: 50px;
filter:brightness(100%);
`

export const IMG3 = styled.img`
width: 24px;
height: 24px;
border-radius: 50%;
`

export const SECTION = styled.section`
background-color: white;
width: 90vw;
border-radius: 10px;

 .div-2 {
    width: 90%;
 }
`

export const TEXT = styled(Card)`
text-align: justify;
border: none !important;
`




export const NavTop = styled.header`
    position: absolute;
    top: 25px;
    left: 25px;
`

export const ImgNavT = styled.img`
    width: 12px;
    height: 20px; 

    &:hover {
        cursor: pointer;
        width: 15px;
        height: 26px; 
    }
`