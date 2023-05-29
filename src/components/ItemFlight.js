import styled from "styled-components"
import flightPhoto from "../assets/pedra-da-mina.jpg"
import Header from "./Header"
import { useEffect, useState } from "react"
import api from "../api/api"
import { useNavigate, useParams } from "react-router-dom"
import dayjs from "dayjs"

export default function ItemFlight() {

    const { id } = useParams()
    const [flight, setFlight] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const promise = api.getFlight(id)
        promise.then(res => setFlight(res.data))
        promise.catch(err => console.log(err))
    }, [])


    return (
        <HotelContainer>
            <Image>
                <Header />

                {
                    flight !== undefined &&
                    <Main>
                        <Titulo>
                            <p>{`Passagem para ${flight.Destino}`}</p>
                        </Titulo>

                        <Lista>
                            <ul>
                                <li> {`Cidade de Destino: ${flight.Destino}`} </li>
                                <li> {`Cidade de Origem: ${flight.Origem}`} </li>
                                <li> {`Companhia aérea: ${flight.company}`} </li>
                                <li> {`Horário de Partida: ${dayjs(flight.departureDate).format('DD-MM-YYYY HH:mm').split(" ")[1]}`} </li>
                                <li> {`Horário previsto de Chegada: ${dayjs(flight.arrivalDate).format('DD-MM-YYYY HH:mm').split(" ")[1]}`} </li>
                                <li> {`Preço da Passagem: R$ ${flight.price.toFixed(2)}`} </li>
                            </ul>
                        </Lista>

                        <Footer>
                            <Button onClick={() => navigate("/")}>
                                {"Ok"}
                            </Button>
                            <Button onClick={() => navigate(`/hotels/${flight.Destino}`)}>
                                {`Ver Hoteis em ${flight.Destino}`}
                            </Button>
                        </Footer>

                    </Main>
                }

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
                      rgba(0, 0, 0, 0.3)), url(${flightPhoto});
    background-size: cover;
    background-position: center;
`

const Main = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    width: 60vw;
    height: 40vh;

    margin: 0 auto;

    margin-top: 5vh;
`
const Titulo = styled.div`
    height: 5vh;

    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-style: normal;
        font-family: 'Roboto';
        font-size: 20px;
        font-weight: 400;
        display: flex;
        align-items: center;
        margin-left: 5px;
    }
`

const Lista = styled.div`

display: flex;
margin-top: 5vh;

li{
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
const Footer = styled.div`
    margin-top: 3vh;
    display: flex;
    align-items: center;
    justify-content: space-around;


`

const Button = styled.button`
background-color:rgba(102,205,170)

`