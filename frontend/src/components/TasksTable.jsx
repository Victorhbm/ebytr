import { useCallback, useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { getAllTasks } from "../services/apiRequests";
import TableItem from "./TableItem";

function TasksTable() {
  const { userData, setTasks, tasks, filter, sortColumn, sortOrder } = useContext(AppContext);

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

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <section>
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
    </section>
  );
}

export default TasksTable;