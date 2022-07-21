import React, { useEffect } from "react";
import Entry from "./Entry.js";
// import { getMaterials } from "./functions/materials/js";
// import fetchMaterials from "./api/index.js";
import axios from "axios";

function Main() {
  const [entries, setEntries] = React.useState([
    { key: 1, brand: "asdf", product: "fdas", amount: 1 },
  ]);
  // useEffect(() => {
  //   getMaterials()
  //     .then((res) => {
  //       console.log(res);
  //       setEntries(res);
  //     })
  //     .catch((err) => console.log(err));
  // });

  // useEffect(() => {
  //   fetchMaterials()
  //     .then((res) => {
  //       console.log(res);
  //       setEntries(res);
  //     })
  //     .catch((err) => console.log(err));
  // });

  useEffect(() => {
    // http://localhost:${PORT}
    // const PORT = process.env.PORT || 2121;
    axios.get(`/showMaterial`).then((response) => {
      console.log(response);
      setEntries(response.data);
    });
  }, []);

  const listElements = entries.map((entry) => (
    <Entry
      // key={entry.id}
      brand={entry.brand}
      product={entry.product}
      amount={entry.amount}
    />
  ));
  return (
    <div className="Main">
      <section>
        <div>
          <div>
            <div>
              <h1>Inventory:</h1>

              {listElements}
            </div>

            <div>
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
        </div>
      </section>
    </div>
  );
}

export default Main;
