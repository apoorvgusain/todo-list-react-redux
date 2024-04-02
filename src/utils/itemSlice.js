import { createSlice } from "@reduxjs/toolkit";
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("todoListItems");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

const initialState = loadState() || {
    items: [
        { id: 0, task: "learn react", completed: true },
        { id: 1, task: "learn js", completed: false }
    ]
};
const itemSlice = createSlice({
    name: 'todoItem',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const id=state.items.length;
            state.items.push({id:id,task:action.payload,completed:false});
            localStorage.setItem("todoListItems", JSON.stringify(state));
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload);
          
            if (index !== -1) {
                state.items.splice(index, 1);
            }
            localStorage.setItem("todoListItems", JSON.stringify(state));
        },
        toggleComplete: (state, action) => {
            
            console.log(action.payload)
            const itemToUpdate = state.items.find(item => item.id === action.payload);
            if (itemToUpdate) {
                itemToUpdate.completed = !itemToUpdate.completed;
            }
            localStorage.setItem("todoListItems", JSON.stringify(state));
        }
    }
});
localStorage.setItem("todoListItems",JSON.stringify(itemSlice.initialState))
export const { addItem, removeItem, toggleComplete } = itemSlice.actions;
export default itemSlice.reducer;
