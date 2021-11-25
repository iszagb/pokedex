import pokeballmage from "../../assets/images/pokeball.png";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/`}>
      <div className={classes.header}>
        <img src={pokeballmage} alt="pokeball" />
        <h1 className={classes.title}>Pokedex</h1>
      </div>
    </Link>
  );
};

export default Header;
