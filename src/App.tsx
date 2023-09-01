import { Button, Container, Heading } from "@chakra-ui/react";
import { AddTodo } from "./components/addTodo";
import { TodoList } from "./components/todoList";
import { VisibilityFilter } from "./components/visibilityFilter";
import { UsersList } from "./components/usersList";
import ReduxForm from "./components/reduxForm";
import MultipleEntryForm from "./components/MultipleEntryForm";
import ReactHookForm from "./components/reactHookForm";
import {useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  
  const showValue = (values: any) => {
    console.log("values in parent = ", values);
  };
  return (
    <Container maxW="container.sm">
      <Heading my="4">Todo List</Heading>
      <AddTodo />
      <TodoList />
      <VisibilityFilter />
      <UsersList />
      <ReduxForm onSubmit={showValue} />
      <MultipleEntryForm />
      <ReactHookForm />
      <Heading my="4">Galery app </Heading>
      <Button onClick={()  => {navigate('/gallery');}}> Click to go to gallery app
      </Button> 
    </Container>
  );
}

export default App;
