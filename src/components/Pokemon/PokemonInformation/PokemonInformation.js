import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import classes from "./PokemonInformation.module.css";
import PokemonInformationNavigation from "./PokemonInformationNavigation";
import { Link } from "react-router-dom";
import PokemonInformationContent from "./PokemonInformationContent";
import PokemonInformationEvolutions from "./PokemonInformationEvolutions";
const PokemonInformation = (props) => {
  const params = useParams();
  const [pokemon, setPokemon] = useState();
  const [pokemonNavigator, setPokemonNavigator] = useState();
  const [pokemonEvolutions, setPokemonEvolutions] = useState([]);

  const loadPokemon = () => {
    getPokemonNavigator(params.id);
  };

  const getPokemonNavigator = async (id) => {
    const initialId = +id;
    let leftPokemonId = 0;
    let rightPokemonId = 0;
    if (initialId - 1 === 0) {
      leftPokemonId = 898;
    } else {
      leftPokemonId = initialId - 1;
    }
    if (initialId === 898) {
      rightPokemonId = 1;
    } else {
      rightPokemonId = initialId + 1;
    }
    const leftResult = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${leftPokemonId}`
    );
    const leftPokemon = await leftResult.json();
    const rightResult = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${rightPokemonId}`
    );
    const rightPokemon = await rightResult.json();
    setPokemonNavigator({ leftPokemon, rightPokemon });
    initializePokemon();
  };

  const initializePokemon = async () => {
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.id}`
    );
    const pokemonDescription = await result.json();
    const speciesResult = await fetch(pokemonDescription.species.url);
    const pokemonSpecies = await speciesResult.json();
    setPokemon({ ...pokemonDescription, ...pokemonSpecies });
    const evolutionResult = await fetch(pokemonSpecies.evolution_chain.url);
    const evolutions = await evolutionResult.json();
    setPokemonEvolutions([]);
    getEvolutions(evolutions.chain);
  };

  const getEvolutions = async (chain) => {
    if (chain.evolves_to.length === 0) {
      const result = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + chain.species.name
      );
      const evolution = await result.json();
      setPokemonEvolutions((prevState) => {
        return [...prevState, evolution];
      });
      return;
    } else {
      const result = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + chain.species.name
      );
      const evolution = await result.json();
      setPokemonEvolutions((prevState) => {
        return [...prevState, evolution];
      });
      getEvolutions(chain.evolves_to[0]);
    }
  };

  useEffect(() => {
    loadPokemon();
  }, [params.id]);
  return (
    <Card className={classes["pokemon-information"]}>
      {pokemon && (
        <>
          <PokemonInformationNavigation pokemonNavigator={pokemonNavigator} />
          <h1 className={classes.name}>
            {pokemon.name} <span>#{pokemon.id}</span>
          </h1>
          <PokemonInformationContent pokemon={pokemon} />
          <PokemonInformationEvolutions pokemonEvolutions={pokemonEvolutions} />
          <Link to={`/`}>
            <Button className={classes["pokemons-button"]} type="button">
              Explore more Pokemon
            </Button>
          </Link>
        </>
      )}
    </Card>
  );
};

export default PokemonInformation;
