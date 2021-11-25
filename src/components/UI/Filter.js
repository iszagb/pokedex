import { CgPokemon } from "react-icons/cg";
const Filter = (props) => {
  return (
    <select>
      <option value="">
        {<CgPokemon />}
      </option>
      <option value="dog">Lowest Number (first)</option>
      <option value="cat">Highest Number (first)</option>
      <option value="hamster">A - Z</option>
      <option value="parrot">Z - A</option>
    </select>
  );
};

export default Filter;
