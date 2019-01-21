import React from 'react';
import PropTypes from 'prop-types';

class Cat extends React.Component {
  state = {
    isClicked: false
  }
  _onClick = () => {
    alert("Clicked " + this.props.name);
    this.setState({
      isClicked: true
    })
  }
  render(){
    return(
      <p onClick={this.props.isClickable ? this._onClick : ()=>{
        console.log("Sorry not clickable");
      }} 
      className={this.state.isClicked ? "bold" : ""}>
        Breed -- {this.props.name} --
        Probability {this.props.value}
      </p>
    )
  }
}

Cat.propTypes = {
  isClickable: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

class CatRecognition extends React.PureComponent {
  render() {
    return(
      <div className = 'center ma'>
      <div className ="absolute mt2">
      {
        this.props.imageUrl 
        ? <img src={this.props.imageUrl} alt="cats" width='500px' height='auto'/>
        : <p>Please insert an image</p>
      }
       <div className="ph3 mt4">
       {
         this.props.results.map(function(cat){
           return <Cat name={cat.name} value={cat.value} key={cat.id} isClickable={false} />
         })
       }
       </div>
       </div>
      </div>
    
        )
  }
}

CatRecognition.propTypes = {
  results: PropTypes.array.isRequired,
  imageUrl: PropTypes.string
}

export default CatRecognition;