import { useSelector,useDispatch } from "react-redux";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import {getTodos} from "../../api/todos";
import {useEffect } from "react"
import { addTodos } from "./todoSlice";

const TodoList = () => {
  // get the data from store
  const todos = useSelector((state) => {
    return state.todoList;
  });

  const dispatch = useDispatch();

  useEffect(()=> {
    getTodos().then((response) => {
      dispatch(addTodos(response.data));
    })
  }, [dispatch]);
  

  return (
    <>
      <TodoGroup todos={todos} />
      <TodoGenerator />
    </>
  );
};

export default TodoList;
