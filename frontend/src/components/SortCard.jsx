import { useContext } from "react";
import AppContext from "../context/AppContext";

function SortCard() {
  const { sortColumn, sortOrder, setSortColumn, setSortOrder } = useContext(AppContext);

  const changeSort = (col) => {
    setSortColumn(col);
    setSortOrder(sortOrder === 'ASC' ? 'DESC' : 'ASC');
  };

  return (
    <div>
      <button
        onClick={ () => changeSort('task') }
      >
        Task
        {sortColumn === 'task' && sortOrder === 'DESC'
          ? '▼'
          : '▲'}
      </button>

      <button onClick={ () => changeSort('status') }>
        Status
        {sortColumn === 'status' && sortOrder === 'DESC'
          ? '▼'
          : '▲'}
      </button>

      <button onClick={ () => changeSort('createdAt') }>
        Created At
        {sortColumn === 'createdAt' && sortOrder === 'DESC'
          ? '▼'
          : '▲'}
      </button>
    </div>
  );
}

export default SortCard;