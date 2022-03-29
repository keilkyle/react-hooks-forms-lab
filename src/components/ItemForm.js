import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  
  let [name, nameChanger] = useState("Bob")
  let [category, categoryChanger] = useState("Produce")

  function nameHandler(e) {
    nameChanger(e.target.value)
  }
  
  function categoryHandler(e) {
    categoryChanger(e.target.value)
  }
  
  function submitHandler(e) {
    e.preventDefault();
    let newItem = {
      id: uuid(),
      name: name,
      category: category,
    };
    props.onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={nameHandler}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={categoryHandler}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={submitHandler}>Add to List</button>
    </form>
  );
}

export default ItemForm;
