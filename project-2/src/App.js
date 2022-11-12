// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState } from 'react/cjs/react.production.min';


function App() {

  return (
    <>
      <Navbar home_= "home" about_= "About"  contect_= "Contect Us"  list_= "List"/>
      <Main text= "Whirt hear" UpperCase_btn="UpperCase" loverCase_btn="LoverCase"/>
    </>
  );
}



export default App;
