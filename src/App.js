import React from 'react';
import './App.css';
import Header from "./components/Header";

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


function App() {
  return <Header characters={characters}/>
}

export default App;
