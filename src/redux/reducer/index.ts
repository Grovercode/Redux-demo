import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import users from "./users";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  todos,
  visibilityFilter,
  users,
  form: formReducer,
});
