import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };
  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <FormControl>
          <Input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder="Enter Todo Item"
            borderBottomRightRadius={0}
            borderTopRightRadius={0}
          />
        </FormControl>
        <Button
          colorScheme="teal"
          type="submit"
          disabled={!value}
          borderBottomLeftRadius={0}
          borderTopLeftRadius={0}
        >
          Add Todo
        </Button>
      </Flex>
    </form>
  );
};
