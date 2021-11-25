import Button from "../UI/Button";
import classes from "./PokemonsActions.module.css";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import Filter from "../UI/Filter";
const PokemonsActions = (props) => {
  return (
    <div className={classes["pokemons-actions"]}>
      <Button onClick={props.onClick} className={classes["pokemons-actions__button"]} type="button">
        <GiPerspectiveDiceSixFacesRandom />
        Random
      </Button>
      {/* <Filter /> */}
    </div>
  );
};

export default PokemonsActions;
