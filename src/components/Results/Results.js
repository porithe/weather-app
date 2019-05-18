import React from 'react';
import styled from 'styled-components';


const ResultsBlock = styled.div`
    width: 100%;
    height: calc(100vh - 150px);
    @media (min-width: 768px) {
        height: calc(100vh - 200px);
    }
`;



const CityName = styled.h1`
    text-align: center;
    font-size: 3.4rem;
    color: #ecf0f1;
    font-weight: 500;
    padding-top: 15px;
    @media (min-width: 420px) and (max-width: 480px) {
        padding-top: 10px;
        font-size: 4.7rem;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        font-size: 5.4rem;
        padding-top: 10px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 6rem;
        padding-top: 10px;
    }
    @media (min-width: 1025px) {
        font-size: 7.5rem;
        padding-top: 10px;
    }
`;




class Results extends React.Component {




    render() {


        const city = this.props.value[0];
        let temperature = this.props.value[1];
        temperature = Math.round(temperature);
        const description = this.props.value[2];
        const windSpeed = this.props.value[3];


        return (


                <ResultsBlock>

                    <CityName>{city} {temperature}&#8451;</CityName>

                </ResultsBlock>
        )
    }

}

export default Results;
