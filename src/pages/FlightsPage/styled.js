import styled from "styled-components";
import flightPhoto from "../../assets/pedra-da-mina.jpg"

export const HomeContainer = styled.div`
   display: flex;
   flex-direction: column;
   
`

export const Image = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, 
                      rgba(0, 0, 0, 0) 13.65%), 
                      linear-gradient(0deg, rgba(0, 0, 0, 0.5), 
                      rgba(0, 0, 0, 0.3)), url(${flightPhoto});
    background-size: cover;
    background-position: center;
`