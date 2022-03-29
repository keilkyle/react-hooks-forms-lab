import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, itemSetter }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setFilteredCategory] = useState("")
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleFilterChange(event) {
    setFilteredCategory(event.target.value)
  }

  function formSubmitHandler(item) {
    itemSetter(item)  
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedFilter === "") {
        if (selectedCategory === "All") return true;
        return item.category === selectedCategory;
    } else {
      return item.name.match(selectedFilter);
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={formSubmitHandler}/>
      <Filter search={selectedFilter} onSearchChange={handleFilterChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
