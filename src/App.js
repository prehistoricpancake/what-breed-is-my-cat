import React, { Component } from 'react';
// import CatRecognition from './components/CatRecognition/CatRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';

import './App.css';

class App extends Component {

  render(){
    return(
      <div className="center">
        <Logo />
         <ImageLinkForm />
        {/* <CatRecognition /> */} 
      </div>

    );
  }

 
  
}

export default App;
