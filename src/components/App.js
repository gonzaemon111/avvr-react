import Button from '@material-ui/core/Button';
import React from 'react';
import ButtonAppBar from './default/ButtonAppBar';
import Footer from "./default/Footer";
import MainScreen from "./MainScreen"

function App() {
  return (
    <div class="App">
      <ButtonAppBar></ButtonAppBar>
      <MainScreen></MainScreen>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Footer></Footer>
    </div>
  );
}

export default App;
