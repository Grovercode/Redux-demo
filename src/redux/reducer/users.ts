import { GET_USERS_SUCCESS } from "../actionTypes";

const initialState: any = { users: [] };

const users = (state = initialState, action: any) => {
  switch (action?.type) {
    case GET_USERS_SUCCESS: {
      return { ...state, users: action?.users };
    }

    default: {
      return state;
    }
  }
};

export default users;
