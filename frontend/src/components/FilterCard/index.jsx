import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Button, Container } from "./style";

function FilterCard() {
  const { filter, setFilter } = useContext(AppContext);

  return (
    <Container>
      <Button
        $filter={filter}
        $button=""
        type="button"
        onClick={ () => setFilter('') }
      >
        All
      </Button>

      <Button
        $filter={filter}
        $button="To do"
        type="button"
        onClick={ () => setFilter('To do') }
      >
        To do
      </Button>

      <Button
        $filter={filter}
        $button="In Progress"
        type="button"
        onClick={ () => setFilter('In Progress') }
      >
        In Progress
      </Button>

      <Button
        $filter={filter}
        $button="Done"
        type="button"
        onClick={ () => setFilter('Done') }
      >
        Done
      </Button>
    </Container>
  );
}

export default FilterCard;