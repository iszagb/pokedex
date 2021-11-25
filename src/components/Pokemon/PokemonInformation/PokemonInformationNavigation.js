import classes from "./PokemonInformationNavigation.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const PokemonInformationNavigation = (props) => {

  return (
    <div className={classes.navigation}>
      <Link className={classes.link} to={`/pokemon/${props.pokemonNavigator.leftPokemon.id}`}>
      <span className={classes["navigation-left"]}>
        <AiOutlineArrowLeft />
        {props.pokemonNavigator.leftPokemon.name} #{props.pokemonNavigator.leftPokemon.id}
      </span>
      </Link>
      <Link className={classes.link} to={`/pokemon/${props.pokemonNavigator.rightPokemon.id}`}>
      <span className={classes["navigation-right"]}>
        {props.pokemonNavigator.rightPokemon.name} #{props.pokemonNavigator.rightPokemon.id}
        <AiOutlineArrowRight />
      </span>
      </Link>
    </div>
  );
};

export default PokemonInformationNavigation;
