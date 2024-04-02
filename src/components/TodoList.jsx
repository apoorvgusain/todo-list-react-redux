import TodoAddItem from "./TodoAddItem";
import TodoItemList from "./TodoItemList";

const TodoList=()=>{
    return (<>
        <h1 className="text-center pt-4">Todo List </h1>
        <TodoAddItem/>
        <TodoItemList/>
    </>);
}
export default TodoList;