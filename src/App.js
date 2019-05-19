import React from 'react';
import styled from 'styled-components';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import axios from 'axios';


const Application = styled.div`
    width: 100%;
    height: 100vh;
    background: ${props => props.theme};
    transition: .8s;
    position: relative;
`;

const theme = {
    default: '#2ecc71',
    Clear: '#42A5F5',
    Rain: '#34495e',
    Clouds: '#90A4AE',
    Snow: '#ecf0f1',
    Mist: '#CFD8DC',
    Thunderstorm: '#2c3e50',
};



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            name: '',
            temp: '',
            weather: '',
            windSpeed: '',
            typeOfWeather: 'default',
        };
    }


    getValue = (city) => {
        this.setState({
            value: city,
        });
        this.getData();



    };

    getData = () => {

      if(this.state.value !== '') {
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=73752f95e0900a6c4855ac9c825beb09&units=metric`)
              .then(response => {

                  this.setState({
                      name: this.state.value,
                      temp: response.data.main.temp,
                      weather: response.data.weather[0].description,
                      windSpeed: response.data.wind.speed,
                      typeOfWeather: response.data.weather[0].main,
                  });

              });
      }
    };



    render() {

        const results = [];

        if(results.length === 0 && this.state.temp !== '') {
            results.push(this.state.name);
            results.push(this.state.temp);
            results.push(this.state.weather);
            results.push(this.state.windSpeed);
            results.push(this.state.typeOfWeather);
        }

        const typeOfTheme = () => {
            switch (this.state.typeOfWeather){
                case 'default':
                    return theme.default;
                case 'Clear':
                    return theme.Clear;
                case 'Rain':
                    return theme.Rain;
                case 'Clouds':
                    return theme.Clouds;
                case 'Snow':
                    return theme.Snow;
                case 'Extreme':
                    return theme.Thunderstorm;
                case 'Thunderstorm':
                    return theme.Thunderstorm;
                case 'Mist':
                    return theme.Mist;
                case 'Haze':
                    return theme.Mist;
            }
        };

        return (
            <Application theme={typeOfTheme}>
                <Search onGetValue={this.getValue}/>
                {this.state.name !== '' ? <Results value={results} /> : <span></span>}

            </Application>
        )
    }
};


export default App;
