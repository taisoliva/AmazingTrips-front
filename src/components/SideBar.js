import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api/api";

export default function SideBar({ destino, setMin, setMax }) {
    const [valueMin, setValueMin] = useState(0);
    const [valueMax, setValueMax] = useState(0);
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [menor, setMenor] = useState(0)
    const [maior, setMaior] = useState(0)


    useEffect(() => {

        const promise = api.getPrice(destino)
        promise.then(res => {
            setMenor(res.data.menor_valor)
            setMaior(res.data.maior_valor)
        })
        promise.catch(err => console.log(err))
    }, [])


    const handleInputChangeMin = (event) => {
        setValueMin(event.target.value);
        setMin(event.target.value)
    };

    const handleInputChangeMax = (event) => {
        setValueMax(event.target.value);
        setMax(event.target.value)
    };

    const handleSliderMouseEnter = () => {
        setTooltipVisible(true);
    };

    const handleSliderMouseLeave = () => {
        setTooltipVisible(false);
    };



    return (

        <>
            {
                menor !== null && <Container>

                    <Text>
                        <p>{"Preço Máximo"}</p>
                        <SliderContainer>
                            <Slider
                                type="range"
                                min={menor}
                                max={maior}
                                step={0.5}
                                value={valueMax}
                                onChange={handleInputChangeMax}
                                onMouseEnter={handleSliderMouseEnter}
                                onMouseLeave={handleSliderMouseLeave}
                            />
                            <Legend>
                                <p>{` ${menor.toFixed(2)}`}</p>
                                <p>{`${maior.toFixed(2)}`}</p>
                            </Legend>
                            {tooltipVisible && <Tooltip>{`R$ ${parseFloat(valueMax).toFixed(2)}`}</Tooltip>}
                        </SliderContainer>
                    </Text>

                    <Text>
                        <p>{"Preço Mínimo"}</p>
                        <SliderContainer>
                            <Slider
                                type="range"
                                min={menor}
                                max={valueMax}
                                step={0.5}
                                value={valueMin}
                                onChange={handleInputChangeMin}
                                onMouseEnter={handleSliderMouseEnter}
                                onMouseLeave={handleSliderMouseLeave}
                            />
                            <Legend>
                                <p>{`${menor.toFixed(2)}`}</p>
                                <p>{valueMax === 0 ? `${maior.toFixed(2)}` : `${parseFloat(valueMax).toFixed(2)}`}</p>
                            </Legend>
                            {tooltipVisible && <Tooltip>{`R$ ${parseFloat(valueMin).toFixed(2)}`}</Tooltip>}
                        </SliderContainer>
                    </Text>


                </Container>
            }
        </>
    );
}

const Container = styled.div`
  background-color: rgba(102, 205, 170, 0.3);
  border: 2px solid black;
  width: 13vw;
  height: 76vh;
  margin: 2vh 0;
  padding: 2vh 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  p {
    font-style: normal;
    font-family: "Roboto";
    font-size: 15px;
    font-weight: 400;
    display: flex;
    justify-content: center;
  }

  margin-bottom: 15px;
  
`;

const SliderContainer = styled.div`
  position: relative;
`;

const Slider = styled.input`
  width: 100px;
`;

const Tooltip = styled.div`
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  width: 6vw;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
`;

const Legend = styled.div`
    width: 10vw;
    height: 3vh;
    margin-top: -30px;
    display: flex;
    justify-content: space-between;
    padding: 5px;

    box-sizing: border-box;
`