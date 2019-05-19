import React from 'react';
import styled from 'styled-components';


const ResultsBlock = styled.div`
    width: 100%;
    height: calc(100vh - 150px);
`;



const CityName = styled.h1`
    text-align: center;
    font-size: 3rem;
    color: #FAFAFA;
    font-weight: 500;
    padding-top: 15px;
    @media (min-width: 420px) and (max-width: 480px) {
        padding-top: 10px;
        font-size: 4.3rem;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        font-size: 5rem;
        padding-top: 10px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 5.5rem;
        padding-top: 10px;
    }
    @media (min-width: 1025px) {
        font-size: 7rem;
        padding-top: 10px;
    }
`;
const TemperatureCity = styled.h1`
    text-align: center;
    font-size: 6rem;
    color: #FAFAFA;
    font-weight: 500;
    padding-top: 15px;
    @media (min-width: 420px) and (max-width: 480px) {
        font-size: 7.5rem;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        font-size: 9rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 10.5rem;
    }
    @media (min-width: 1025px) {
        font-size: 12rem;
    }
`;

const DescriptionCity = styled.h1`
    text-align: center;
    color: #FAFAFA;
    font-weight: 500;
    font-size: 2rem;
    padding: 20px 15px 0 15px;
    @media (min-width: 420px) and (max-width: 480px) {
        font-size: 2.3rem;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        font-size: 2.7rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 3.2rem;
    }
    @media (min-width: 1025px) {
        font-size: 3.7rem;
    }
`;

const WindCity = styled.h1`
    text-align: center;
    color: #FAFAFA;
    font-weight: 500;
    font-size: 2rem;
    padding: 10px 5px 0 5px;
    @media (min-width: 420px) and (max-width: 480px) {
        font-size: 2.3rem;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        font-size: 2.7rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 3.2rem;
    }
    @media (min-width: 1025px) {
        font-size: 3.7rem;
    }
`;

const typeOfIcons = {
    sun: "far fa-sun",
    cloud: "fas fa-cloud",
    rain: "fas fa-cloud-rain",
    snow: "far fa-snowflake",
    moon: "fas fa-moon",
    mist: "fas fa-smog",
    thunderstorm: "fas fa-bolt",
};

class Results extends React.Component {




    render() {



        const city = this.props.value[0];
        let temperature = this.props.value[1];
        temperature = Math.round(temperature);
        const description = this.props.value[2];
        const windSpeed = this.props.value[3];
        const typeOfWeather = this.props.value[4];

        const chooseIcon = () => {
            switch (typeOfWeather) {
                case 'Clear':
                    return typeOfIcons.sun;
                case 'Rain':
                    return typeOfIcons.rain;
                case 'Clouds':
                    return typeOfIcons.cloud;
                case 'Snow':
                    return typeOfIcons.snow;
                case 'Extreme':
                    return typeOfIcons.thunderstorm;
                case 'Thunderstorm':
                    return typeOfIcons.thunderstorm;
                case 'Mist':
                    return typeOfIcons.mist;
                case 'Haze':
                    return typeOfIcons.mist;
            }
        };

        return (


                <ResultsBlock>

                    <CityName>{city} <i className={chooseIcon()}></i></CityName>
                    <TemperatureCity>{temperature}&#8451;</TemperatureCity>
                    <DescriptionCity>{description}</DescriptionCity>
                    <WindCity><i className="fas fa-wind"></i> {windSpeed} m / s</WindCity>

                </ResultsBlock>
        )
    }

}

export default Results;
