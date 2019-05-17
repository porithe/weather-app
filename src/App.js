import React from 'react';
import styled from 'styled-components';
import Search from './components/Search/Search';
import Result from './components/Result/Result';
import axios from 'axios';
import _ from 'lodash';

const Application = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2ecc71;
`;
const Results = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 481px) and (max-width: 767px) {
    height: 500px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 550px;
  }
  @media (min-width: 1024px) and (max-width: 1280px) {
    height: 600px;
  }
  @media (min-width: 1281px) {
    height: 700px;
  }
`;

class App extends React.Component {

    state = {
        value: '',
        name: '',
        temp: '',
        weather: '',
        windSpeed: '',
        results: [],
        show: false,
    };

    showDebounce = _.debounce(() => {
        this.setState({
            show: true,
        });
    }, 500);

    getValue = (city) => {
        this.setState({
            value: city,
        });
        this.getData();
        this.showDebounce();
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

        const textData = ['City: ', 'Temperature: ', 'Description: ', 'Wind speed: '];

        const valueCity = textData[0] + this.state.name;
        const valueTemperature = textData[1] + this.state.temp;
        const valueDescription = textData[2] + this.state.weather;
        const valueWind = textData[3] + this.state.windSpeed;

        return (
            <Application>
                <Search onGetValue={this.getValue}/>

                { this.state.show === true ? <Results>
                    <Result value={valueCity}/>
                    <Result value={valueTemperature}/>
                    <Result value={valueDescription}/>
                    <Result value={valueWind}/>
                </Results> : <Result /> }

            </Application>
        )
    }
};


export default App;
