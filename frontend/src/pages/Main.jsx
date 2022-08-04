import AddTaskForm from "../components/AddTaskForm";
import FilterCard from "../components/FilterCard";
import Header from "../components/Header";
import TasksTable from "../components/TasksTable";

function Main() {
  return (
    <>
      <Header />
      <AddTaskForm />
      <FilterCard />
      <TasksTable />
    </>
  )
}

export default Main;