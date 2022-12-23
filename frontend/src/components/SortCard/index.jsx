import { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Button, Container, Span, TriangleDown, TriangleUp } from "./style";

function SortCard() {
  const { sortColumn, sortOrder, setSortColumn, setSortOrder } = useContext(AppContext);

  const changeSort = (col) => {
    setSortColumn(col);
    setSortOrder(sortOrder === 'ASC' ? 'DESC' : 'ASC');
  };

  return (
    <Container>
      <Button
        onClick={ () => changeSort('task') }
      >
        Task
        <Span>
          {sortColumn === 'task' && sortOrder === 'DESC'
            ? <TriangleDown />
            : <TriangleUp />}
        </Span>
      </Button>

      <Button onClick={ () => changeSort('status') }>
        Status
        <Span>
          {sortColumn === 'status' && sortOrder === 'DESC'
            ? <TriangleDown />
            : <TriangleUp />}
        </Span>
      </Button>

      <Button onClick={ () => changeSort('createdAt') }>
        Created At
        <Span>
          {sortColumn === 'createdAt' && sortOrder === 'DESC'
            ? <TriangleDown />
            : <TriangleUp />}
        </Span>
      </Button>
    </Container>
  );
}

export default SortCard;