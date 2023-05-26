import { Link} from "react-router-dom"
import styled from "styled-components"

export default function Header(){
    return (
        <Barra>
            <Name >
                <p> {"Amazing Trips "}</p>
            </Name>

            <AccessLinks >
                <Link to="/" > {"Home"} </Link>
                <Link to="/tickets" > {"Voos"} </Link>
                <Link to="/hotels" > {"Hotéis"} </Link>
                <Link to="/home" > {"Locais"} </Link>
                

            </AccessLinks>
        </Barra>
    )
}

const Barra = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
`

 const Name = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 44.0621px;
    line-height: 51px;

    margin-top: 10px;

    text-shadow: 0px 4px 4px rgba(15, 49, 168, 0.25), 0px 4px 4px rgba(52, 48, 207, 0.25);
   


color: #FFFFFF;
`

const AccessLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:400px;

    font-style: normal;
    font-family: 'Roboto';
    font-size: 22.031px;
    font-weight: 400;
    
    line-height: 25px;
    
    opacity: 0.7;
    a {
    text-decoration: none;
    margin: 10px;
    color: #FFFFFF;
    &:hover {
      text-decoration: underline
    }
    
    
  }
`

