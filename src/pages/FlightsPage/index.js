import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { HomeContainer, Image } from "./styled";
import api from "../../api/api";
import Flight from "../../components/Flight";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function FlighsPage() {

    const [flights, setFlights] = useState()
    const { destino } = useParams()

    useEffect(() => {
        const promise = api.getFlights()
        promise.then(res => setFlights(res.data))
        promise.catch(err => console.log(err))
    }, [])


    return (
        <HomeContainer>
            <Image>
                <Header />
                <Container>
                    {
                        flights !== undefined && flights.map(item =>
                            <Flight
                                key={item.id}
                                id={item.id}
                                destino={item.Destino}
                                origem={item.Origem}
                                company={item.company}
                                departureDate={item.departureDate}
                                arrivalDate={item.arrivalDate}
                                price={item.price}
                                local={destino} />
                        )
                    }
                </Container>


            </Image>
        </HomeContainer>
    )
}

const Container = styled.div`
    background-color: rgba(102,205,170, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10vh auto;
    width: 75vw;
    height: 70vh;
    overflow: auto;
    
`