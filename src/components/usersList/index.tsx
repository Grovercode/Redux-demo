import { useDispatch, useSelector } from "react-redux";

import { getUsersFetch } from "../../redux/actions";
import { Button, Flex, Heading } from "@chakra-ui/react";

export const UsersList = () => {
  const { users } = useSelector((state) => state);
  console.log("users = ", users);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "100px" }}>
      <Flex
        alignItems="center"
        alignContent={"center"}
        justifyContent={"space-between"}
      >
        <Heading my="4">Click to fetch users list (sagas) </Heading>
        <Button onClick={() => dispatch(getUsersFetch())}>Get users: </Button>
      </Flex>
      <div>
        {users?.users?.map((user: any) => (
          <div key={user?.id}>{user?.name}</div>
        ))}
      </div>
    </div>
  );
};
