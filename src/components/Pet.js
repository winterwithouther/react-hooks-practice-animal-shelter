import React, { useState } from "react";

function Pet({pet, onAdoptPet}) {

  const {name, type, gender, age, weight, isAdopted, id} = pet
  const [adopted, setAdopted] = useState(isAdopted);

  function handleClick() {
    if (!isAdopted) {
      setAdopted(!isAdopted)
      onAdoptPet(id);
    }
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {gender === "male" ? "♂" : "♀"}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={adopted ? "ui primary button" : "ui disabled button"}>Already adopted</button>
        <button className={adopted ? "ui disabled button" : "ui primary button"} onClick={handleClick}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;