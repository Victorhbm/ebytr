import { useCallback, useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";
import { getAllTasks } from "../services/apiRequests";
import TableItem from "./TableItem";

function TasksTable() {
  const { userData, setTasks, tasks, filter } = useContext(AppContext);
  const [sortColumn, setSortColumn] = useState('id');
  const [sortOrder, setSortOrder] = useState('ASC');

  const getTasks = useCallback(async () => {
    if (userData.token) {
      const fetchTasks = await getAllTasks(userData.token);
  
      setTasks(fetchTasks);
    }
  }, [userData.token, setTasks]);

  const sortTasks = () => {
    const sortedTasks = tasks.sort((a, b) => a[sortColumn] > b[sortColumn] ? 1 : -1);

    if (sortOrder === 'DESC') return sortedTasks.reverse();

    return sortedTasks;
  }

  const changeSort = (col) => {
    setSortColumn(col);
    setSortOrder(sortOrder === 'ASC' ? 'DESC' : 'ASC');
  };

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <table>
      <thead>
        <tr>
          <th>
            Task
            <button
              onClick={ () => changeSort('task') }
            >
              {sortColumn === 'task' && sortOrder === 'DESC'
                ? '▼'
                : '▲'}
            </button>
          </th>
          <th>
            Status
            <button onClick={ () => changeSort('status') }>
              {sortColumn === 'status' && sortOrder === 'DESC'
                ? '▼'
                : '▲'}
            </button>
          </th>
          <th>
            Created At
            <button onClick={ () => changeSort('createdAt') }>
              {sortColumn === 'createdAt' && sortOrder === 'DESC'
                ? '▼'
                : '▲'}
            </button>
          </th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length > 0 && sortTasks()
          .filter((t) => !filter || t.status === filter)
          .map(({ id, task, status, createdAt }) => (
            <TableItem
              key={ id }
              id={ id }
              task={ task }
              status={ status }
              createdAt={ createdAt }
            />
          ))}
      </tbody>
    </table>
  );
}

export default TasksTable;