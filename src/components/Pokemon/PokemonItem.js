import { Link } from "react-router-dom";

import classes from './PokemonItem.module.css';
const PokemonItem = (props) => {
  return (
    <li className={classes['pokemon-information']}>
      <Link to={`/pokemon/${props.pokemon.id}`}  className={classes['pokemon-information__image']}>
      <img
        src={props.pokemon.sprites.front_default}
        alt="front image of pokemon"
      /></Link>
      <span className={classes['pokemon-information__id']}>#{props.pokemon.id}</span>
      {props.pokemon.name}
      <div className={classes['pokemon-information__specification']}>
      {props.pokemon.types.map((type, index) => (
        <span key={index} className={classes.type + ' ' + classes[type.type.name]}>{type.type.name}</span>
      ))}
      </div>
    </li>
  );
};

export default PokemonItem;
