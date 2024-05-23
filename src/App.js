function ShoppingListForm(props) {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <label htmlFor="itemName">Item Name: </label>
      <input
        type="text"
        id="itemName"
        name="itemName"
        onChange={props.handleItemNameChange}
      ></input>
      <button type="submit">Add Item</button>
    </form>
  );
}

function ShoppingList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const items = ["Shampoo", "Soap", "Laundry Detergent", "Sponges"];

  const handleItemNameChange = (event) => {
    console.log(event);
  };

  const handleFormSubmit = (event) => {
    console.log(event);
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ShoppingListForm
        handleItemNameChange={handleItemNameChange}
        handleFormSubmit={handleFormSubmit}
      />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
