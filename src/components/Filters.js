import React, {useState} from "react";

function Filters({onChangeType}) {

  const [filter, setFilter] = useState("all")

  function handleChange(event) {
    setFilter(event.target.value)
  }

  function handleClick() {
    onChangeType(filter)
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={handleChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button onClick={handleClick} className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;