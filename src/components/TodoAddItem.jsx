

const TodoAddItem=()=>{
    return (
        <div className="d-flex">
            <input type="text" className="form-control addItem" placeholder="What you need to do today?"/>
            <button className="btn btn-primary mr-2">Add Task</button>
        </div>
      );
}
export default TodoAddItem;