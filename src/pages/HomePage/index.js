import { useEffect, useState } from "react"
import { HomeContainer, Image, Menu, Input,Button } from "./styled"
import Header from "../../components/Header"
import api from "../../api/api"
import {FallingLines} from "react-loader-spinner"
import { useNavigate } from "react-router-dom"

export default function HomePage() {

    const [cities, setCities] = useState()
    const [selectedOption, setSelectedOption] = useState("")
    const [disableButton, setDisabledButton] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const promise = api.getCities();
        promise.then(res => setCities(res.data))
        promise.catch((err) => console.log(err))
    }, [])

    function handleOption(event) {
        setSelectedOption(event.target.value)
    }

    function changeButton(){
        if(disableButton === false) setDisabledButton(true)
        else setDisabledButton(false)

        navigate("/tickets")
    }

    return (

        <Image >
            <HomeContainer>
                
                <Header/>

                <Menu>
                    <Input value={selectedOption} onChange={handleOption}>
                        <option value=""> {"Pesquisar Locais"}</option>
                        { cities !== undefined && cities.map((item) => <option key={item.id} value={`${item.name}`}>
                                {`${item.name}, 
                                  ${item.stateName}, 
                                  ${item.countryName}`
                                }
                            </option>)
                        }
                    </Input>
                    <Button onClick={changeButton}>
                        {disableButton ? <FallingLines color="#08246C" timeout={6000}/> : "Pesquisar"}
                    </Button>

                </Menu>
            </HomeContainer>
        </Image>
    )
}