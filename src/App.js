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
      results: {}
    }
  }

  // //display results of cat breed I hope
  // displayCatBreed = (data)=> {
  //   const catBreed = data.outputs[0].data.concepts;
  //   const results = document.getElementById('catImageResult');
  //   const breed = results.name;
  //   const probability = results.value;

  //   return{
  //     yourCat: catBreed.name,
  //     itsBreed: catBreed.value

  //   }
  // }

  // //display cat Breed
  // displayResults = (results)=> {
  //   this.setState({results: results});
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
    // console.log(response);
    var concepts = response['outputs'] [0] ['data'] ['concepts']
    console.log(concepts);
    
   },
   function(err) {
     // there was an error
     console.log(err)
     
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
        // results ={this.state.results}
        />
        
        
      </div>

    );
  }

 
  
}

export default App;
