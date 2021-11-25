import PokemonItem from "../PokemonItem";

import classes from "./PokemonInformationEvolutions.module.css";

const PokemonInformationEvolutions = (props) => {
  return (
    <div className={classes["pokemon-evolutions"]}>
      <span>Evolutions</span>
      <ul className={classes["pokemon-evolutions__list"]}>
        {props.pokemonEvolutions.map((evolution, index) => (
          <PokemonItem key={evolution.id} pokemon={evolution} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonInformationEvolutions;
