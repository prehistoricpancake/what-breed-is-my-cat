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
      // response: []
    }
  }

  // catRecognitionResults = (data) => {
  //   const catResults = data.response.outputs[0].data.concepts;
  //   const imageResult = document.getElementById('')
    
  // }


 onInputChange = (event) => {
    this.setState({input : event.target.value});
    
 }

 // Clarifai cat breeds model

 
onButtonSubmit = () => {
  this.setState({imageUrl: this.state.input})
  app.models.predict("Cat Breeds", this.state.input).then(
   function(response) {
     // do something with response
    
    // this.setState ({response})
    console.log(response)
   },
   function(err) {
     // there was an error
     
   });  
   }
  

// onButtonSubmit = () => {
//   this.setState({imageUrl: this.state.input})
//   app.models.initModel({id: "Cat Breeds"}).then(catBreeds =>{
//     return catBreeds.predict(this.state.input);
//   }).then(response => {
//     var concepts = response['outputs'] [0] ['data'] ['concepts']
//   })

//  }
  render(){


    return(
      <div className="centre">
        <Logo />
         <ImageLinkForm 
         onInputChange = {this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
        />
        <CatRecognition imageUrl={this.state.imageUrl} 
        // response ={this.state.response}/> 
        />
      </div>

    );
  }

 
  
}

export default App;
