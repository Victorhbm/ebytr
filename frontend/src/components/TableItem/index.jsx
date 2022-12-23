import { useContext, useState } from "react";
import { FiEdit } from 'react-icons/fi';
import { ImBoxAdd } from 'react-icons/im';
import { TiDeleteOutline } from "react-icons/ti";
import AppContext from "../../context/AppContext";
import { deleteTask, getAllTasks, updateTaskName, updateTaskStatus } from "../../services/apiRequests";
import { ButtonsContainer, Container, FirstLineContainer, SecondLineContainer, StatusButton, UpdateInput } from "./style";

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
    <Container>
      <FirstLineContainer>
        <div>
          { editMode
              ? <UpdateInput
                  type="text"
                  value={ inputTask }
                  onChange={ (e) => setInputTask(e.target.value) }
                  onKeyUp={ handleKeyUp }
                />
              : task }
        </div>

        <ButtonsContainer>
          {editMode ? (
            <button type="button" onClick={ onUpdateTaskName }>
              <ImBoxAdd />
            </button>
          ) : (
            <button type="button" onClick={ () => setEditMode(!editMode) }>
              <FiEdit size={17}  />
            </button>
          )}
          <button type="button" onClick={ onDeleteTask }>
            <TiDeleteOutline size={19} />
          </button>
        </ButtonsContainer>
      </FirstLineContainer>
      
      <SecondLineContainer>
        <StatusButton $status={status} type="button" onClick={ onUpdateStatus }>
          { status }
        </StatusButton>

        <p>{ correctDate.toLocaleDateString() }</p>
      </SecondLineContainer>
    </Container>
  );
}

export default TableItem;