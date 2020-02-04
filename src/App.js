import React from 'react';
import './App.css';
import Character from "./components/Character";
import Wrapper from "./components/Wrapper";
import update from "immutability-helper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import characters from "./characters.json";


class App extends React.Component {
  state = {
     topScore: 0,
     score: 0,
     headerText: "Don't click the same image twice!",
     characters
  }


// On click function to handle each time a char card is clicked on.
handleClick = characterID => {

  let charArr = this.state.characters;

  // iterate through the char array to see if the character that was clicked
  // has already been clicked.  If it hasn't, then increase score. If it has,
  // then compare old top score to current score.  If current score > top score replace top score. 
  // Reset score and then characters clicked state to false

  for(let i = 0; i < charArr.length; i++) {
    console.log("charArr is: " +charArr[0].id)

    if(characterID === charArr[i].id) {

      if(charArr[i].clicked === false){
         
        this.setState({
          score:  this.state.score + 1,
          characters: update(this.state.characters, {[i]: {clicked: {$set: true}}}),
          headerText: "You guessed correctly!"
        })


      } else {

        if(this.state.score > this.state.topScore){
          this.setState({
            topScore: this.state.score,
            score: 0,
            headerText: "You guessed incorrectly!",
            characters
          },
          () => {
            console.log('Updated new top score!')
          });

        }

        if(this.state.score <= this.state.topScore){
          this.setState({
            score: 0,
            headerText: "You guessed incorrectly!",
            characters
          },
          () => {
            console.log('Reset-- you did not beat the top score!')
          });
        }

      }

   }
  }


};

// shuffle array function so that chars are rendered in a random order each time on render.
shuffleArray = array => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

  render() {
    let characterCards = this.state.characters.map((item) =>
    <Character
      name = {item.name}
      image = {item.imageURL}
      key = {item.id}
      id = {item.id}
      handleClick = {this.handleClick}
    />
  )

  //shuffle the array, so that they can be in a random order each time the site renders

  let shuffledCards = this.shuffleArray(characterCards)
  
  
    return (
      <div>
        <Header score={this.state.score} topScore = {this.state.topScore} headerText = {this.state.headerText}/>
          <Wrapper>
            {shuffledCards}
          </Wrapper>
        <Footer/>
      </div>
    );
  }
}

export default App;
