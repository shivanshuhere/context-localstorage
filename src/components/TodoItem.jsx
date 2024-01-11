import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false);
    const { toggleDone, deleteTodo, updateTodo } = useTodo();
    const handleToggle = () => {
        return toggleDone(todo.id);
    };

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black 
            ${todo.done ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}
            `}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.done}
                onChange={handleToggle}
            />
            <input
                value={todo.title}
                type="text"
                className={`border-transparent outline-none w-full bg-transparent rounded-lg 
                    ${todo.done ? "line-through" : ""}
                   `}
                //    ${
                //        !editable ? "border-black/10 px-2" : "border-transparent"
                //    }
                // onChange={(e) => updateTodo(todo.id, e.target.value)}
                onChange={() => console.log("value change")}
                // readOnly={!editable}
            />

            {/* Edit, Save Button */}
            {/* <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.done) return;

                    if (editable) {
                        updateTodo(todo.id);
                    } else setEditable((prev) => !prev);
                }}
                disabled={todo.done}
            >
                {editable ? "📁" : "✏️"}
            </button> */}
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
