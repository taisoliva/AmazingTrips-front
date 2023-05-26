import styled from "styled-components"
import Header from "./Header"
import sol from "../assets/sol.jpg"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../api/api"

export default function ItemHotel() {

    const {id} = useParams()
    const [items, setItems] = useState()
    const [photos, setPhotos] = useState()
  
    useEffect(()=>{
        const promise = api.getHotel(id)
        promise.then(res => setItems(res.data))
        promise.catch(err => console.log(err))

        const promise2 = api.getPhoto(id)
        promise2.then(res => setPhotos(res.data))
        promise2.catch(err => console.log(err))
        
    },[])

    console.log(photos)

    return (
        <HotelContainer>

            <Image>
                <Header />
                <Container>
                    <ContainerPhoto>
                        {photos !== undefined && photos.map (item => <img src={item.url}/>)}
                    </ContainerPhoto>
                {
                    items!== undefined && <ul>
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
    background-color: rgba(255,228,181, 0.4);
    margin: 10vh auto;
    display: flex;
    flex-direction: column;
    overflow: auto;

`

const ContainerPhoto = styled.div`

    background-color: yellow;
    height: 30vh;
    display:flex;
    padding: 10px;

    img{
        width: 200px;
        height: 250px;
        background: url(${props => props.url});
        background-size: cover;
        background-position: center center;

         margin-right: 50px;

        border-radius: 20px;
    }

    overflow: auto;
    
`