import React from 'react';
import './App.css';
import Character from "./components/Character";
import Wrapper from "./components/Wrapper";

const characters = [
  {
    id: 1,
    name: "Bob",
    imageURL: "images/bob.webp"
  },
  {
    id: 2,
    name: "Linda",
    imageURL: "images/linda.webp"
  },
  {
    id: 3,
    name: "Frond",
    imageURL: "images/frond.webp"
  },
  {
    id: 4,
    name: "Gene",
    imageURL: "images/gene.webp"
  },
  {
    id: 5,
    name: "jimmy jr",
    imageURL: "images/jimmy_jr.webp"
  },
  {
    id: 6,
    name: "Jimmy Pesto",
    imageURL: "images/jimmy_pesto.webp"
  },
  {
    id: 7,
    name: "Louise",
    imageURL: "images/louise.webp"
  },
  {
    id: 8,
    name: "Mort",
    imageURL: "images/mort.webp"
  },
  {
    id: 9,
    name: "Teddy",
    imageURL: "images/teddy.webp"
  },
  {
    id: 10,
    name: "Tina",
    imageURL: "images/tina.webp"
  }
]


class App extends React.Component {
  state = {
    characters
  };

  handleClick = characterID => {
    console.log(characterID);
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
  
  
    return (
      <div>
        <Wrapper>
          {characterCards}
        </Wrapper>
      </div>
    );
  }
}

export default App;
