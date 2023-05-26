import styled from "styled-components"
import homePhoto from "../../assets/trolltunga-noruega.jpg"

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
                      rgba(0, 0, 0, 0.3)), url(${homePhoto});
    background-size: cover;
    background-position: center;
`


export const Menu = styled.div`
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 22.031px;
    width: 80vw;
    height: 50px;
    margin: 20vh auto;

    display: flex;
    align-items: center;
    
    
`
export const Input = styled.select`
    background-color: rgba(255, 255, 255, 0);
    width: 25vw;
    height: 30px;
    margin-left: 20px;
    border: none;

        font-style: normal;
        font-family: 'Roboto';
        font-size: 15px;
        font-weight: 400;
        display: flex;
        align-items: center;
        
        color: #CDC5C5;

    option{
        background-color: rgba(215, 232, 233, 0.35);
        font-style: normal;
        font-family: 'Roboto';
        font-size: 15px;
        font-weight: 400;
        display: flex;
        align-items: center;

        color:#373737
    }
`
export const Button = styled.button`
    position: absolute;
    right:200px;

    background: #FFFFFF;
    border-radius: 30px;
    width: 100px;
    height: 4vh;

    font-style: normal;
    font-weight: 700;
    font-size: 15px;
   
    color: #2659C3;

    opacity: 0.7;
`