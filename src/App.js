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
      imageUrl:'',
      results: []
    }
  }
 
 onInputChange = (event) => {
    this.setState({input : event.target.value});
 }

 // Clarifai cat breeds model

 
onButtonSubmit = () => {
  const self = this;
  app.models.predict("Cat Breeds", this.state.input).then(
   function(response) {

    var concepts = response['outputs'] [0] ['data'] ['concepts']
    self.setState({
      results: response['outputs'] [0] ['data'] ['concepts'],
      imageUrl: self.state.input
    });
    
   },
   function(err) {
     // there was an error
     console.log(err)
     
   });  
   }
  
  render(){


    return(
      <div className="centre">
        <Logo />
         <ImageLinkForm 
         onInputChange = {this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
        />
        <CatRecognition imageUrl={this.state.imageUrl} 
        results={this.state.results}
        />
        
        
      </div>

    );
  }

 
  
}

export default App;
