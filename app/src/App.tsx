import React from "react";
import "./App.css";
import { DeckQuery } from "./views/DeckQuery";
import { Header } from "./views/Header";
import { DeckView } from "./views/DeckView";
import { useAppSelector } from "./store/hooks";
import { selectDecks } from "./store/deckSlice";

function App() {
  const deckCodes = useAppSelector(selectDecks);
  return (
    <div className="App">
      <Header />
      <DeckQuery />
      {deckCodes.length  ? (<DeckView />) : null}
    </div>
  );
}

export default App;
