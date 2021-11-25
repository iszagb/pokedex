import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, clean, search, fetchPokemon } from "../../redux/pokemon";
import Button from "../UI/Button";
import Card from "../UI/Card";
import PokemonItem from "./PokemonItem";
import classes from "./Pokemons.module.css";
import PokemonsActions from "./PokemonsActions";
import PokemonSearch from "./PokemonSearch";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Pokemons = (props) => {
  const [randomize, setRandomize] = useState(false);
  const { pokemons, isSearch, isFetching } = useSelector(
    (state) => state.pokemon
  );
  const dispatch = useDispatch();
  useEffect(() => {
    addPokemons();

    return () => dispatch(clean());
  }, []);

  const addPokemons = async (offset) => {
    if (randomize) {
      getRandomPokemons();
    } else {
      if (pokemons.length === 0) {
        dispatch(fetchPokemon(true));
      }
      const result = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=12" + offset
      );
      const allPokemon = await result.json();
      for (const element of allPokemon.results) {
        const res = await fetch(element.url);
        const pokemon = await res.json();
        dispatch(add(pokemon));
      }
      dispatch(fetchPokemon(false));
    }
  };

  const initilizeRandomPokemons = async () => {
    dispatch(fetchPokemon(true));
    setRandomize(true);
    dispatch(clean());
    getRandomPokemons();
  };

  const getRandomPokemons = async () => {
    for (let i = 0; i < 12; i++) {
      const randomId = getRandomInt(898);
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomId);
      const pokemon = await res.json();
      dispatch(add(pokemon));
    }
    dispatch(fetchPokemon(false));
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const cancelSearch = () => {
    dispatch(clean());
    setRandomize(false);
    dispatch(search(false));
    addPokemons();
  };

  return (
    <Card className={classes.pokemons}>
      <PokemonSearch />
      <PokemonsActions onClick={initilizeRandomPokemons} />
      {!isFetching && (
        <ul className={classes["pokemons-list"]}>
            {pokemons.map((pokemon) => (
              <PokemonItem key={pokemon.id} pokemon={pokemon} />
            ))}
        </ul>
      )}
      {isFetching && (
        <AiOutlineLoading3Quarters className={classes["icon-spinner"]} />
      )}
      {pokemons.length == 0 && !isFetching && <p>No pokemons found</p>}
      {!isSearch && (
        <Button
          onClick={() => addPokemons(`&offset=${pokemons.length}`)}
          className={classes["pokemons-button__load"]}
          type="button"
        >
          Load more Pokemón
        </Button>
      )}
      {isSearch && (
        <Button
          onClick={cancelSearch}
          className={classes["pokemons-button__load"]}
          type="button"
        >
          See all Pokemons
        </Button>
      )}
    </Card>
  );
};

export default Pokemons;
