// server/index.js
const dontenv = require("dotenv").config();
const express = require("express");

const PORT = process.env.SERVER_PORT || 3001;

const app = express();

const fabdb = require('./fabdb');

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/cards", (req,res) => {
  fabdb.getCards().then(
    body => res.json(body.data)
  )
});

app.get("/deck/:deckCode", (req,res) => {
  fabdb.getDeck(req.params.deckCode).then(
    body => res.json(body.data)
  )
});

app.get("/deck", (req,res) => {
  const decks = req.query.deck;
  if(typeof decks === 'string'){
    return fabdb.getDeck(decks).then(
      body => res.json([body.data])
    )
  };
  Promise.all(
    decks.map(deckCode => fabdb.getDeck(deckCode))
  ).then(body => res.json(body.map(body => body.data)))
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});