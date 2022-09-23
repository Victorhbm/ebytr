import AddTaskForm from "../components/AddTaskForm";
import FilterCard from "../components/FilterCard";
import Header from "../components/Header";
import SortCard from "../components/SortCard";
import TasksTable from "../components/TasksTable";

function Main() {
  return (
    <>
      <Header />
      <AddTaskForm />
      <FilterCard />
      <SortCard />
      <TasksTable />
    </>
  )
}

export default Main;