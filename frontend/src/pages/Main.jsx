import AddTaskForm from "../components/AddTaskForm";
import Header from "../components/Header";
import TasksTable from "../components/TasksTable";

function Main() {
  return (
    <>
      <Header />
      <AddTaskForm />
      <TasksTable />
    </>
  )
}

export default Main;