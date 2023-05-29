import styled from "styled-components"
import Header from "./Header"
import sol from "../assets/sol.jpg"
import { useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import api from "../api/api"
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa"


export default function ItemHotel() {

    const { id } = useParams()
    const [items, setItems] = useState()
    const [photos, setPhotos] = useState()
    const contentRef = useRef(null)

    useEffect(() => {
        const promise = api.getHotel(id)
        promise.then(res => setItems(res.data))
        promise.catch(err => console.log(err))

        const promise2 = api.getPhoto(id)
        promise2.then(res => setPhotos(res.data))
        promise2.catch(err => console.log(err))

    }, [])

    function scrollRight() {
        if (contentRef.current) {
            contentRef.current.scrollLeft += 100; // ajuste o valor conforme necessário
        }
    }

    function scrollLeft(){
        if(contentRef.current){
            contentRef.current.scrollLeft -= 100;
        }
    }

    return (
        <HotelContainer>

            <Image>
                <Header />
                <Container>
                    <IconeEsquerda onClick={scrollLeft}>
                        <FaArrowCircleLeft style={{ color: 'black', marginRight: '10px', fontSize: '30px' }} />
                    </IconeEsquerda>
                    <ContainerPhoto ref={contentRef}>
                        {photos !== undefined && photos.map(item => <img src={item.url} />)}
                    </ContainerPhoto>
                    <IconeDireita onClick={scrollRight}>
                        <FaArrowCircleRight style={{ color: 'black', marginRight: '10px', fontSize: '30px' }} />
                    </IconeDireita>

                    <p>{"Comodidades"}</p>
                    {
                        items !== undefined && <ul>
                            {items.map(item => <li>
                                {item.name}
                            </li>)}
                        </ul>
                    }

                </Container>
            </Image>

        </HotelContainer>
    )

}

const HotelContainer = styled.div`
    display: flex;
   flex-direction: column;
`

const Image = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, 
                      rgba(0, 0, 0, 0) 13.65%), 
                      linear-gradient(0deg, rgba(0, 0, 0, 0.5), 
                      rgba(0, 0, 0, 0.3)), url(${sol});
    background-size: cover;
    background-position: center;
`


const Container = styled.div`

    width: 50vw;
    height: 70vh;
    background-color: rgba(255,228,181, 0.7);
    margin: 10vh auto;
    display: flex;
    flex-direction: column;
    overflow: auto;

    p{
        margin-top: 20px;
        font-style: normal;
        font-family: 'Roboto';
        font-size: 23px;
        font-weight: 400;
        display: flex;
        align-items: center;
        margin-left: 5px;
        margin-bottom: 10px;
        text-decoration: underline;
    }

    li{
        margin-top: 20px;
       font-style: normal;
        font-family: 'Roboto';
        font-size: 20px;
        font-weight: 400;
        display: flex;
        align-items: center;
        margin-left: 5px;
        margin-bottom: 10px;
}

`

const ContainerPhoto = styled.div`

    height: 30vh;
    display:flex;
    padding: 10px;
    background-color: rgb(210, 105, 30,0.6);

    img{
        width: 200px;
        height: 250px;
        background: url(${props => props.url});
        background-size: cover;
        background-position: center center;

         margin-right: 50px;

        border-radius: 20px;
    }

    overflow: hidden;
    position: relative;
    
`
const IconeDireita = styled.div`
    z-index: 1;
    position: absolute;
    width: 2vw;
    height: 3vh;
    top:30vh;
    right: 27vw;
    border-radius: 100px;
    box-shadow: 0 0 20px 5px #ffffff;
`

const IconeEsquerda = styled.div`
    z-index: 1;
    position: absolute;
    width: 2vw;
    height: 3vh;
    top:30vh;
    left: 27vw;
    border-radius: 100px;
    box-shadow: 0 0 20px 5px #ffffff;
`