import { VISIBILITY_FILTER } from "../components/util";

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  switch (visibilityFilter) {
    case VISIBILITY_FILTER.COMPLETED: {
      return store.todos.filter((todo) => todo.completed);
    }

    case VISIBILITY_FILTER.INCOMPLETETED: {
      return store.todos.filter((todo) => !todo.completed);
    }

    default:
      return store.todos;
  }
};
