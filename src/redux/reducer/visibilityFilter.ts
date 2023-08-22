import { VISIBILITY_FILTER } from "../../components/util";
import { SET_FILTER } from "../actionTypes";

const initialState = VISIBILITY_FILTER.ALL;

const visibilityFilter = (state = initialState, action: any) => {
  switch (action?.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }

    default: {
      return state;
    }
  }
};

export default visibilityFilter;
