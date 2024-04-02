import React from "react";
import ReactDOM  from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import TodoList from "./src/components/TodoList";

const App = ()=>{
    return(
        <div className="container text-center w-50" >
            <div id="todoListContainer" className="w-75 m-auto p-5">
        <TodoList/>
        </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
