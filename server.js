const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const PORT = process.env.PORT || 2121;
require("dotenv").config();

// MongoDB connection
let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "logitrestructure";

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
  }
);

// View Settings
app.set("view engine", "ejs");
app.use(cors({ origin: true, credentials: true }));

// app.use(express.static(__dirname + ""));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initial Page Request
app.get("/", (request, response) => {
  // Sort array by amount
  db.collection("materials")
    .find()
    .sort({ amount: -1 })
    .toArray()
    .then((data) => {
      response.render("index.ejs", { info: data });
    })
    .catch((error) => console.error(error));
});

// Materials Page Request
app.get("/materials", (request, response) => {
  // Sort array by amount
  db.collection("materials")
    .find()
    .sort({ amount: -1 })
    .toArray()
    .then((data) => {
      response.render("material.ejs", { info: data });
    })
    .catch((error) => console.error(error));
});

// Listing Materials
app.get("/showMaterial", (request, response) => {
  db.collection("materials")
    .find()
    .toArray()
    .then((data) => {
      // console.log(data);
      response.json(data);
    })
    .catch((error) => console.error(error));
});

// // Method for incrementing one
// addOne();
// async function addOne() {
//   try {
//     const response = await fetch("/showMaterial", {
//       method: "get",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         brand: brand,
//         product: product,
//         amount: amount,
//       }),
//     });
//     const data = await response.json();
//     console.log(data);
//     location.reload();
//   } catch (err) {
//     console.log(err);
//   }
// }

// Adding Materials
app.post("/addMaterial", (request, response) => {
  db.collection("materials")
    .insertOne({
      brand: request.body.brand,
      product: request.body.product,
      amount: 0,
    })
    .then((result) => {
      console.log("Material Added");
      response.redirect("/materials");
    })
    .catch((error) => console.error(error));
});

// Increase material count "Add One"
app.put("/addOne", (request, response) => {
  console.log(request.body.brand);
  db.collection("materials")
    .updateOne(
      {
        brand: request.body.brand,
        material: request.body.material,
        amount: request.body.amount,
      },
      {
        $set: {
          amount: request.body.amount + 1,
        },
      },
      {
        sort: { _id: -1 },
        upsert: true,
      }
    )
    .then((result) => {
      console.log("Added One");
      response.json("One Added");
    })
    .catch((error) => console.error(error));
});

// Delete Material
app.delete("/deleteMaterial", (request, response) => {
  db.collection("materials")
    .deleteOne({ brand: request.body.brand })
    .then((result) => {
      console.log("material (brand) deleted");
      response.json("material (brand) deleted");
    })
    .catch((error) => console.error(error));
});

// // TEST START
// // Accessing the path module
// const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

// // TEST END

// Listen on PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
