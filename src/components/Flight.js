import styled from "styled-components"
import Azul from "../assets/Azul.jpg"
import Latam from "../assets/Latam.jpg"
import Gol from "../assets/Gol.jpg"
import { useEffect, useState } from "react"
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa"
import dayjs from "dayjs"
import { Link } from "react-router-dom"


export default function Flight({ id, destino, origem, company, departureDate, arrivalDate, price, local }) {

    const [logo, setLogo] = useState()
    const dataOrigem = dayjs(departureDate).format('DD/MM/YYYY HH:mm').split(" ")[0]
    const dataDestino = dayjs(arrivalDate).format('DD/MM/YYYY HH:mm').split(" ")[0]
    const horaOrigem = dayjs(departureDate).format('DD-MM-YYYY HH:mm').split(" ")[1]
    const horaDestino = dayjs(arrivalDate).format('DD-MM-YYYY HH:mm').split(" ")[1]


    useEffect(() => {
        if (company === "Azul") setLogo(Azul)
        if (company === "Latam") setLogo(Latam)
        if (company === "Gol") setLogo(Gol)

    }, [company])

    console.log(local)


    return (
        <>
            {(local === destino || local === undefined) &&
                <FlightContainer>
                    <Link>
                        <Image >
                            <img src={logo} alt={company} />
                            <p> {company}</p>
                        </Image>

                        <Container>
                            <FaPlaneDeparture style={{ color: 'black', marginRight: '10px', fontSize: '30px' }} />
                            <Text>
                                <p> {origem} </p>
                                <p> {dataOrigem}</p>
                                <p> {horaOrigem} </p>
                            </Text>
                        </Container>

                        <Container>
                            <FaPlaneArrival style={{ color: 'black', marginRight: '10px', fontSize: '30px' }} />
                            <Text>
                                <p> {destino} </p>
                                <p> {dataDestino}</p>
                                <p> {horaDestino} </p>
                            </Text>
                        </Container>

                        <Container>
                            <Text>
                                <p> {`R$ ${price.toFixed(2)}`} </p>
                            </Text>
                        </Container>
                    </Link>
                </FlightContainer>
            }
        </>
    )
}

const FlightContainer = styled.div`

    height: 10vh;
    width: 50vw;
    margin-bottom: 30px;
    background-color: rgba(255, 255, 255, 0.8);

    padding: 10px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;

    a{
        text-decoration: none;
        display: flex;
        color: #373737;
    }

    &:hover{
        box-shadow: 0 0 10px rgba(0, 0, 100, 1);
    }
`
const Image = styled.div`
   
    display: flex;
    align-items: center;
    padding: 5px;

    p{
        font-style: normal;
        font-family: 'Roboto';
        font-size: 15px;
        font-weight: 400;
        display: flex;
        align-items: center;
        margin-left: 5px;
    }
`
const Container = styled.div`
   
    width: 150px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 10px;
    margin-left: 30px;
    
    p{
        font-style: normal;
        font-family: 'Roboto';
        font-size: 15px;
        font-weight: 400;
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        text-align: center;
    }
`

const Text = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`