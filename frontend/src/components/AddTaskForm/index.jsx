import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { createTask, getAllTasks } from "../../services/apiRequests";
import { Button, Form, Input, InputContainer } from "./style";
import { MdAdd } from 'react-icons/md'

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
    <Form onSubmit={ onSubmit }>
      <InputContainer>
        <Input
          type="text"
          placeholder="Task"
          value={ task }
          onChange={ (e) => setTask(e.target.value) }
        />
        <Button type="submit">
          <MdAdd className="mx-auto" size={25} />
        </Button>
      </InputContainer>
    </Form>
  )
}

export default AddTaskForm;