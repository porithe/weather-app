import React from 'react';
import styled from 'styled-components';
import Search from './components/Search/Search';


const Application = styled.div`
  width: 100%;
  height: 100%;
  
`;

const App = () => (
  <Application>
    <Search/>
  </Application>
);


export default App;
