import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { HomeContainer, Image } from "./styled";
import api from "../../api/api";
import Flight from "../../components/Flight";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import SideBar from "../../components/SideBar";

export default function FlighsPage() {

    const [flights, setFlights] = useState()
    const { destino } = useParams()
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)

    useEffect(() => {
        const promise = api.getFlights()
        promise.then(res => setFlights(res.data))
        promise.catch(err => console.log(err))
    }, [])

    return (
        <HomeContainer>
            <Image>
                <Header />
                <Main>
                    {destino !== undefined && <SideBar destino={destino}
                        setMin={setMin}
                        setMax={setMax} />}
                    <Container>
                        {
                            flights !== undefined &&
                            flights.map((item) => {
                                if (item.price >= min && item.price <= max) {
                                    return (
                                        <Flight
                                            key={item.id}
                                            id={item.id}
                                            destino={item.Destino}
                                            origem={item.Origem}
                                            company={item.company}
                                            departureDate={item.departureDate}
                                            arrivalDate={item.arrivalDate}
                                            price={item.price}
                                            local={destino}
                                            min={min}
                                            max={max}
                                        />
                                    );
                                } else if(min === 0 && max === 0) {
                                    return (
                                        <Flight
                                            key={item.id}
                                            id={item.id}
                                            destino={item.Destino}
                                            origem={item.Origem}
                                            company={item.company}
                                            departureDate={item.departureDate}
                                            arrivalDate={item.arrivalDate}
                                            price={item.price}
                                            local={destino}
                                            min={min}
                                            max={max}
                                        />
                                    );
                                }
                                return null;
                            })
                        }
                    </Container>
                </Main>


            </Image>
        </HomeContainer>
    )
}

const Container = styled.div`
    background-color: rgba(102,205,170, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2vh auto;
    width: 75vw;
    height: 80vh;
    overflow: auto;

    
    
`
const Main = styled.div`
    
    width: 75vw;
    height: 85vh;
    display: flex;
    margin: 2vh auto;
`