import { useEffect, useState } from "react"
import Header from "../../components/Header"
import { HotelContainer, Image, Container} from "./styled"
import api from "../../api/api"
import Hotel from "../../components/Hotel"
import { useNavigate, useParams } from "react-router-dom"

export default function HotelPage() {

    const [hotels, setHotels] = useState()
    const {destino} = useParams()
    const navigate = useNavigate()

    console.log(destino)

    useEffect(()=>{
        const promise = api.getHotels()
        promise.then(res => setHotels(res.data))
        promise.catch(err => console.log(err))
    }, [])

    return (
        <HotelContainer>

            <Image>
                <Header />
                <Container>
                { (hotels !== undefined) &&
                    hotels.map(item => <Hotel key={item.id}
                                              id={item.id}
                                              name={item.Name}
                                              descricao={item.Descrição}
                                              url={item.url}
                                              price={item.price}
                                              destino={destino}
                                              local={item.name}
                                             
                    />)
                }

                </Container>
            </Image>

        </HotelContainer>
    )
}