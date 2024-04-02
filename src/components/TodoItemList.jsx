import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeItem,toggleComplete} from "../utils/itemSlice";
import EmptyTodoList from "./EmptyTodoList";

const TodoItemList = () => {
  const itemList = useSelector((store) => store.listItem.items);
  console.log(itemList)
  const dispatch= useDispatch();
  const removeItemHandler=(val)=>{
    console.log(val)
   dispatch(removeItem(val));
  }
  const toggleCompleteHandler = (val) => {
    dispatch(toggleComplete(val));
  }
if(itemList.length===0)
return <EmptyTodoList/>
  return (
    <div>
      {itemList.map((item, index) => (
        <div 
          className={`d-flex justify-content-between rounded p-3 my-3 `} 
          key={index} 
          id="listItemContainer"
          
        >
          <div className="task-info align-items-center" onClick={() => toggleCompleteHandler(item.id)}>
            <span className={item.completed? 'completed':""}>{item.task}</span>
          </div>
          <div className="task-action align-items-center">
            <span className="mx-2" onClick={() => removeItemHandler(item.id)}><AiFillDelete /></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItemList;