import { Box, Checkbox, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/actions";

export const Todo = ({ todo }: any) => {
  const dispatch = useDispatch();

  const handleCheck = () => dispatch(toggleTodo(todo?.id));

  return (
    <Box mb={1} p={2}>
      <Checkbox
        colorScheme="teal"
        isChecked={todo?.completed}
        onChange={handleCheck}
      >
        <Text as={todo.completed && "del"}>{todo.content}</Text>
      </Checkbox>
    </Box>
  );
};
