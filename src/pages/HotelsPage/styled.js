import styled from "styled-components";
import sol from "../../assets/sol.jpg"


export const HotelContainer = styled.div`
    display: flex;
   flex-direction: column;
`

export const Image = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, 
                      rgba(0, 0, 0, 0) 13.65%), 
                      linear-gradient(0deg, rgba(0, 0, 0, 0.5), 
                      rgba(0, 0, 0, 0.3)), url(${sol});
    background-size: cover;
    background-position: center;
`

export const Container = styled.div`

    width: 70vw;
    height: 70vh;
    background-color: rgba(255,228,181, 0.4);
    margin: 10vh auto;
    display: flex;
    flex-direction: column;
    overflow: auto;

`
