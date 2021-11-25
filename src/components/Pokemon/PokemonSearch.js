import Button from "../UI/Button";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { add, clean, search, fetchPokemon } from "../../redux/pokemon";
import classes from "./PokemonSearch.module.css";
import { useRef } from "react";
import Input from "../UI/Input";

const PokemonSearch = (props) => {
  const dispatch = useDispatch();
  const searchInputRef = useRef();
  const searchHandler = async (e) => {
    if (searchInputRef.current.value.trim().length > 0) {
      dispatch(clean());
      dispatch(search(true));
      dispatch(fetchPokemon(true));
      const result = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + searchInputRef.current.value
      );
      if (result.status === 200) {
        const pokemon = await result.json();
        dispatch(add(pokemon));
      }
      dispatch(fetchPokemon(false));
      searchInputRef.current.value = "";
    }
  };
  return (
    <div className={classes["pokemons-search"]}>
      <Input
        ref={searchInputRef}
        id="pokemonSearch"
        type="text"
        placeholder="Enter pokemon name"
      />
      <Button
        onClick={searchHandler}
        className={classes["pokemons-search__button"]}
        type="button"
      >
        <FaSearch />
      </Button>
    </div>
  );
};

export default PokemonSearch;
