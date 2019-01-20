import React, { Component } from 'react';
import CatRecognition from './components/CatRecognition/CatRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: '7d5e7412bf3b49ecac7031d13d8fab3b'
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
   app.models.predict("Cat Breeds", "https://tailandfur.com/wp-content/uploads/2016/01/30-Cute-Smiling-Cat-Pictures-6.jpg").then(
    function(response) {
      // do something with response
      console.log(response);
    },
    function(err) {
      // there was an error
      console.log(err);
      
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
