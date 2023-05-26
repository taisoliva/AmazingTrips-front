import { Link } from "react-router-dom"
import styled from "styled-components"
export default function Hotel({ id, name, descricao, url, price }) {
    return (
        <Item>
            <Link to={`/hotels/${id}`}>
                <Imagem url={url} />
                <Text>
                    <h1> {name}</h1>
                    <p> {descricao}</p>
                </Text>
                <Text>
                    <h2>{`R$ ${price.toFixed(2)}`}</h2>
                    <p> {"Preço por Noite"}</p>
                </Text>
            </Link>
        </Item>
    )
}

const Item = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    width: 50vw;
    height: 300px;

    margin: 5vh auto;
    margin-bottom: 40px;

    display: flex;

    border-radius: 20px;

    padding: 5px;

    a{
        text-decoration: none;
        display: flex;
        color: #373737;
        

        width: 50vw;
    }

    &:hover{
        box-shadow: 0 0 10px rgba(210, 105, 30, 1);
    }
`

const Imagem = styled.div`
    width: 200px;
    height: 250px;
    background: url(${props => props.url});
    background-size: cover;
    background-position: center center;

    margin-right: 50px;

    border-radius: 20px;

`
const Text = styled.div`
    
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 220px;
    padding-top: 20px;
    margin-right: 20px;

    h1{
        font-style: normal;
        font-family: 'Roboto';
        font-size: 20px;
        font-weight: 400;
        display: flex;
        align-items: center;
        margin-left: 5px;
    }

    h2{
        font-style: normal;
        font-family: 'Roboto';
        font-size: 20px;
        font-weight: 400;
        display: flex;
        align-items: center;
        margin-left: 5px;
    }


    p{
        font-style: normal;
        font-family: 'Roboto';
        font-size: 13px;
        font-weight: 400;
        display: flex;
        align-items: center;
        margin-top: 15px;
        margin-left: 5px;
    }

   
`