import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { addTask } from "../features/TaskSlice";
function AddTask() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("to-do");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (title === "" && desc === "") return;
    const newTask = {
      id: uuid4(),
      title,
      description: desc,
      status,
    };
    dispatch(addTask(newTask));
    setDesc("");
    setTitle("");
    setStatus("to-do");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl text-indigo-500 mb-3">Add New Task</h2>
      <div className="mb-4">
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full p-2 border-2 rounded-md outline-none "
          placeholder="Task Title"
        />
      </div>
      <div className="mb-4">
        <textarea
          id="description"
          name="description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="block w-full border-2 rounded-md outline-none p-2 "
        ></textarea>
      </div>
      <div className=" mb-4">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="block w-full p-2 border-2 rounded-md"
        >
          <option value="to-do">To Do</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button className="block w-full bg-indigo-700 text-indigo-100 py-2 rounded-md mb-10">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;
