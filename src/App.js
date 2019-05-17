import React from 'react';
import styled from 'styled-components';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import axios from 'axios';

const Application = styled.div`
  width: 100%;
  height: 100%;
  
`;

class App extends React.Component {

    state = {
        value: '',
        name: '',
        temp: '',
        weather: '',
        windSpeed: '',
    };

    getValue = (city) => {
        this.setState({value: city});
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


        return (
            <Application>
                <Search onGetValue={this.getValue}/>
                <Results />

            </Application>
        )
    }
};


export default App;
