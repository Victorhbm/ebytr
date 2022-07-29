import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { createTask, getAllTasks } from "../services/apiRequests";

function AddTaskForm() {
  const { userData, setTasks } = useContext(AppContext);
  const [task, setTask] = useState('');

  const getTasks = async () => {
    if (userData.token) {
      const fetchTasks = await getAllTasks(userData.token);
  
      setTasks(fetchTasks);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await createTask({ task }, userData.token);
    getTasks();

    setTask('');
  };

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Task"
        value={ task }
        onChange={ (e) => setTask(e.target.value) }
      />

      <button type="submit">
        Add
      </button>
    </form>
  )
}

export default AddTaskForm;