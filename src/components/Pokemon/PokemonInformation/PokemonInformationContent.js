import classes from './PokemonInformationContent.module.css';

const PokemonInformationContent = (props) => {
  return (
    <div className={classes["pokemon-content"]}>
      <div className={classes["pokemon-stats"]}>
        <img
          className={classes["pokemon-content__image"]}
          src={props.pokemon.sprites.front_default}
          alt="front image of pokemon"
        />
      </div>
      <div className={classes["pokemon-description"]}>
        <p>
          {props.pokemon.flavor_text_entries[1].flavor_text
            .replace("\f", " ")
            .replace("POKéMON", "pokemon")}
        </p>
        <div className={classes["pokemon-attributes"]}>
          <div className={classes["pokemon-attributes__group"]}>
            <span className={classes["pokemon-attributes__title"]}>
              Height:
            </span>
            <span className={classes["pokemon-attributes__value"]}>
              {props.pokemon.height}
            </span>
          </div>
          <div className={classes["pokemon-attributes__group"]}>
            <span className={classes["pokemon-attributes__title"]}>
              Category:
            </span>
            <span className={classes["pokemon-attributes__value"]}>
              {props.pokemon.genera[7].genus}
            </span>
          </div>
          <div className={classes["pokemon-attributes__group"]}>
            <span className={classes["pokemon-attributes__title"]}>
              Weight:
            </span>
            <span className={classes["pokemon-attributes__value"]}>
              {props.pokemon.weight}
            </span>
          </div>
          <div className={classes["pokemon-attributes__group"]}>
            <span className={classes["pokemon-attributes__title"]}>
              Abilitites:
            </span>
            <span className={classes["pokemon-attributes__value"]}>
              {props.pokemon.abilities.map((ability, index) => (
                <span
                  key={index}
                  className={classes["pokemon-attributes__ability"]}
                >
                  {ability.ability.name}
                </span>
              ))}
            </span>
          </div>
        </div>
        <span className={classes["pokemon-type__title"]}>Type</span>
        <div className={classes["pokemon-type__group"]}>
          {props.pokemon.types.map((type, index) => (
            <span
              key={index}
              className={classes.type + " " + classes[type.type.name]}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonInformationContent;
