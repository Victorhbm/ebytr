import { useCallback, useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { getAllTasks } from "../services/apiRequests";
import TableItem from "./TableItem";

function TasksTable() {
  const { userData, setTasks, tasks } = useContext(AppContext);

  const getTasks = useCallback(async () => {
    if (userData.token) {
      const fetchTasks = await getAllTasks(userData.token);
  
      setTasks(fetchTasks);
    }
  }, [userData.token, setTasks]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Created At</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length > 0 && tasks.map(({ id, task, status, createdAt }) => (
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