import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(()=>{
    fetch("http://127.0.0.1:3001/pets")
    .then(response => response.json())
    .then(data => {
      setPets(data);
    })
  }, [])

  function onChangeType(newFilter) {
    setFilters({ type: newFilter})
  }

  const filteredPets = pets.filter(pet => {
    if (filters.type === "all") {
      return true;
    } else {
      return pet.type === filters.type;
    }
  })

  function onAdoptPet(id) {
    fetch(`http://127.0.0.1:3001/pets/${id}`, {
      method: "PATCH",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({isAdopted: true})
    })
    .then(response => response.json())
    .then(data => {
      const petFound = pets.find((pet)=>{
        return pet.id === id
      })
      petFound.isAdopted = data.isAdopted
      setPets([...pets]);
    })
  }

  console.log(pets)

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={filteredPets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;