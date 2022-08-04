import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { deleteTask, getAllTasks, updateTaskName, updateTaskStatus } from "../services/apiRequests";

function TableItem({ id, task, status, createdAt }) {
  const { userData, setTasks } = useContext(AppContext);
  const [inputTask, setInputTask] = useState(task);
  const [editMode, setEditMode] = useState(false);
  const correctDate = new Date(createdAt);

  const getTasks = async () => {
    if (userData.token) {
      const fetchTasks = await getAllTasks(userData.token);
  
      setTasks(fetchTasks);
    }
  };

  const onDeleteTask = async () => {
    await deleteTask(id, userData.token);

    getTasks();
  };

  const onUpdateTaskName = async () => {
      await updateTaskName(id, userData.token, inputTask);

      setEditMode(false);
      getTasks();
  }

  const handleKeyUp = async (e) => {
    const key = e.which || e.keyCode;

    if (key == 13) {
      await onUpdateTaskName();
    }
  };

  const onUpdateStatus = async () => {
    let newStatus;

    if (status === 'To do') newStatus = 'In Progress';
    else if (status === 'In Progress') newStatus = 'Done';
    else newStatus = 'To do';

    await updateTaskStatus(id, userData.token, newStatus);

    getTasks();
  };

  return (
    <tr>
      <td>
        { editMode
            ? <input
                type="text"
                value={ inputTask }
                onChange={ (e) => setInputTask(e.target.value) }
                onKeyUp={ handleKeyUp }
              />
            : task }
      </td>
      <td>
        <button type="button" onClick={ onUpdateStatus }>
          { status }
        </button>
      </td>
      <td>{ correctDate.toLocaleDateString() }</td>
      <td>
        {editMode ? (
          <button type="button" onClick={ onUpdateTaskName }>
            Save
          </button>
        ) : (
          <button type="button" onClick={ () => setEditMode(!editMode) }>
            Edit
          </button>
        )}
      </td>
      <td>
        <button type="button" onClick={ onDeleteTask }>
          X
        </button>
      </td>
    </tr>
  );
}

export default TableItem;