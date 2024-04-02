import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/itemSlice";
const TodoAddItem=()=>{
    const [addListItem,setAddListItem]= useState("");
    const newItem=useSelector((store)=>store.listItem.items);
    console.log(newItem)
    const dispatch = useDispatch();
    const itemChangeHandler = (e)=>{
    //console.log(e.target.value);
    setAddListItem(e.target.value);
    }
    const addTaskHandler=()=>{
      //  console.log(addListItem);
        dispatch(addItem(addListItem))
        setAddListItem("");
    }
    return (
        <div class="input-group mb-3">
        <input id="addItemInput"
            type="text" 
            className="form-control " 
            placeholder="What you need to do today?" 
            value={addListItem} 
            onChange={itemChangeHandler}
        />
      <button 
            className="btn btn-primary" 
            id="addBtn" 
            onClick={addTaskHandler}
        >
            Add Task
        </button>
    </div>
        
  
      );
}
export default TodoAddItem;