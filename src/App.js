import React from 'react';
import styled from 'styled-components';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import axios from 'axios';



const Application = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme};
`;

const theme = {
    default: '#2ecc71',
    sunny: '#FDD835',
    rainy: '#34495e',
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
        }

        return (
            <Application theme={theme.default}>
                <Search onGetValue={this.getValue}/>

                {this.state.name !== '' ? <Results value={results} /> : <span></span>}

            </Application>
        )
    }
};


export default App;
