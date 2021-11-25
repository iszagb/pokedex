import classes from  "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokemons from "./components/Pokemon/Pokemons";
import PokemonInformation from "./components/Pokemon/PokemonInformation/PokemonInformation";
import Header from "./components/UI/Header";

function App() {
  return (
    <Router>
      <div className={classes.app}>
      <Header />
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="/pokemon/:id" element={<PokemonInformation />} />
      </Routes>
      </div>
  </Router>
  );
}
export default App;
