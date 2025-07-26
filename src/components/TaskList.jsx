import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [value, setValue] = useState("All");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handlefilter() {
    if (value === "All") return tasks;
    return tasks.filter((task) => task.status === value);
  }
  const filteredtasks = handlefilter();

  return (
    <>
      <div className="flex justify-between mb-4 px-4">
        <h1 className="text-xl font-semibold">Tasks</h1>
        <div>
          <label className=" font-semibold mr-4">Filter</label>
          <select
            onChange={(e) => setValue(e.target.value)}
            value={value}
            defaultValue={"All"}
          >
            <option value="to-do">To Do</option>
            <option value="completed">Completed</option>
            <option value="All">All</option>
          </select>
        </div>
      </div>
      <ul>
        {filteredtasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
