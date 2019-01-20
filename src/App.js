import React, { Component } from 'react';
import CatRecognition from './components/CatRecognition/CatRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'f8fb7dcf2f9648e384f5cf0f56804a31'
});

class App extends Component {
  constructor(){
    super();
    this.state ={
      input : '' ,
    }
  }
 onInputChange = (event) => {
    console.log(event.target.value);
    
 }

 onButtonSubmit = () => {
   console.log('click');
   app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
      console.log(response);
    },
    function(err) {
      // there was an error
      
    }
  );
 }
  render(){


    return(
      <div className="centre">
        <Logo />
         <ImageLinkForm 
         onInputChange = {this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
        />
        <CatRecognition /> 
      </div>

    );
  }

 
  
}

export default App;
