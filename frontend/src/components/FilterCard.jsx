import { useContext } from "react";
import AppContext from "../context/AppContext";

function FilterCard() {
  const { setFilter } = useContext(AppContext);

  return (
    <div>
      <button type="button" onClick={ () => setFilter('') }>
        All
      </button>

      <button type="button" onClick={ () => setFilter('To do') }>
        To do
      </button>

      <button type="button" onClick={ () => setFilter('In Progress') }>
        In Progress
      </button>

      <button type="button" onClick={ () => setFilter('Done') }>
        Done
      </button>
    </div>
  );
}

export default FilterCard;