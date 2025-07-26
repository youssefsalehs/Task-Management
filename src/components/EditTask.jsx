import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/TaskSlice";

function EditTask({ task }) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();
  const id = task.id;
  function handleEdit() {
    dispatch(editTask({ id, title, desc, status }));
    setIsEdit(false);
  }
  return (
    <div>
      {isEdit ? (
        <div className="absolute bg-white p-4 rounded-md shadow-lg ">
          <h2 className="text-xl text-indigo-500 mb-3">Edit Task</h2>
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
              <option value="To do">To Do</option>
              <option value="In progress">In progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              className="block  bg-indigo-700 text-indigo-100 py-2 px-2 rounded-md  "
              onClick={handleEdit}
            >
              Edit Task
            </button>
            <button
              className="bg-gray-300  text-indigo-800 px-2 rounded-md py-2 "
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <button
            className="bg-indigo-700 text-indigo-100 px-2 py-1 rounded-md"
            onClick={() => setIsEdit((is) => !is)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default EditTask;
