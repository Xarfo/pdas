import  AnimalShow  from "./AnimalShow";
import { useState } from "react";


function App() {
  // State
  const [animals, setAnimals] = useState([])

  const handleClick = () => setAnimals([...animals,'', getRandomAnimal()])
  
  const getRandomAnimal = () => {
    const animals = ['cow', 'bird', 'horse', 'dog', 'cat', 'fish'];
    const randomIndex = Math.floor(Math.random() * animals.length);
    return animals[randomIndex];
  }

  const renderedAnimals = animals.map((animal) => {
    return <AnimalShow type={animal}  />;
  })

  return (
    // JSX
    <div className="App">
      <button type="button" onClick={handleClick}>
        Add Animal
      </button>
    <div>Animals:{renderedAnimals}</div>
    </div> 
  );
}

export default App;
