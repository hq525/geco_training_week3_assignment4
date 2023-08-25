import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  var [pets] = useState([
    {
      species: "cat",
      breed: "ragdoll",
      color: "white"
    },
    {
      species: "dog",
      breed: "pug",
      color: "white"
    },
    {
      species: "rabbit",
      breed: "havana",
      color: "white"
    }
  ])

  var [obj, setObj] = useState({
    randNum: Math.random(),
    currTime : new Date().toTimeString().split(" ")[0]
  })

  var updateObj = () => {
    setObj({
      randNum: Math.random(),
      currTime : new Date().toTimeString().split(" ")[0]
    })
  }

  return (
    <div className="App">
      <h1>Pets</h1>
      {pets.map((pet) => {
        return(
          <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            Species: {pet.species}
            <br />
            Breed: {pet.breed}
            <br />
            Color: {pet.color}
          </div>
        )
      })}
      <h1>Object</h1>
      <div style={{ border: "1px solid black", width: "fit-content", margin: "10px", padding: "10px", display: "block", marginLeft: "auto", marginRight: "auto" }}>
        Random Number: {obj.randNum}
        <br />
        Current Time: {obj.currTime}
        <br />
        <button onClick={updateObj}>Update</button>
      </div>
    </div>
  );
}

export default App;
