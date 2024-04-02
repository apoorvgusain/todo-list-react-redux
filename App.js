import React from "react";
import ReactDOM  from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import TodoList from "./src/components/TodoList";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
const App = ()=>{
    return(
        <Provider store={appStore}>
         <div id="todoListContainer" className="w-50 m-auto my-5 p-5">
        <TodoList/>
        </div>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
