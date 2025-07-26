import { useState } from "react";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/TaskSlice";
function Task({ task }) {
  const { title, description, status } = task;
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteTask(id));
  }
  console.log(task, title, description, status);
  return (
    <li className="bg-gray-100 mb-2 flex justify-between items-center px-4 py-3 rounded-md">
      <div className="w-[70%]">
        <h3 className="font-semibold ">{title}</h3>
        {description && <p>{description}</p>}
        <p>
          status : <span className="underline italic">{status}</span>
        </p>
      </div>
      <div className="flex items-center gap-4">
        <EditTask task={task} />
        <button
          className="bg-red-700 text-red-100 px-2 py-1 rounded-md"
          onClick={() => handleDelete(task.id)}
        >
          delete
        </button>
      </div>
    </li>
  );
}

export default Task;
