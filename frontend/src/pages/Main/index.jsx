import AddTaskForm from "../../components/AddTaskForm";
import FilterCard from "../../components/FilterCard";
import Header from "../../components/Header";
import SortCard from "../../components/SortCard";
import TasksTable from "../../components/TasksTable";
import { Container } from "./style";

function Main() {
  return (
    <Container>
      <Header />
      <AddTaskForm />
      <FilterCard />
      <SortCard />
      <TasksTable />
    </Container>
  )
}

export default Main;