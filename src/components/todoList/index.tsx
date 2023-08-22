import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Todo } from "../todo";
import { getTodosByVisibilityFilter } from "../../redux/selector";

export const TodoList = () => {
  const { todos, visibilityFilter } = useSelector((state) => state);
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);

  return (
    <Box my={3}>
      {filterTodos?.length ? (
        filterTodos.map((todo: any) => <Todo key={todo?.id} todo={todo} />)
      ) : (
        <Box textAlign="center" my="4">
          No Todos yet!
        </Box>
      )}
    </Box>
  );
};
