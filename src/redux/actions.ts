import {
  ADD_TODO,
  IMAGES,
  GET_USERS_FETCH,
  SET_FILTER,
  TOGGLE_TODO,
} from "./actionTypes";

let nextTodoId = 0;
export const addTodo = (content: any) => {
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      content,
    },
  };
};

export const toggleTodo = (id: any) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
};

export const setFilter = (filter: any) => {
  return {
    type: SET_FILTER,
    payload: {
      filter,
    },
  };
};

export const getUsersFetch = () => ({
  type: GET_USERS_FETCH,
});

export const loadImages = () => (
  {
    type: IMAGES.LOAD,
  }
)

export const setImages = (images : any)=> ({
  type: IMAGES.LOAD_SUCCESS, 
  images
})

export const setError = (error : any) => ({
  type: IMAGES.LOAD_FAIL,
  error,
})