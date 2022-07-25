import React, { useEffect } from "react";
import Entry from "./Entry.js";
import axios from "axios";
import { nanoid } from "nanoid";

function Main() {
  // const [entries, setEntries] = React.useState([
  //   { key: 1, brand: "asdf", product: "fdas", amount: 1 },
  // ]);

  const [entries, setEntries] = React.useState([]);

  useEffect(() => {
    axios.get(`/showMaterial`).then((response) => {
      // console.log(response);
      setEntries(response.data);
    });
  }, [entries]);

  const listElements = entries.map((entry) => (
    <Entry
      // key={nanoid()}
      // id={nanoid()}
      brand={entry.brand}
      product={entry.product}
      amount={entry.amount}
    />
  ));
  return (
    <div className="Main">
      <div className="projects-container">
        <h1>Inventory:</h1>
        {listElements}
      </div>
      <div className="project-controls-container">
        <h2>Add A Material:</h2>
        <form action="/addMaterial" method="POST">
          <input type="text" placeholder="Brand" name="brand" />
          <input type="text" placeholder="Product" name="product" />
          <div>
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Main;
