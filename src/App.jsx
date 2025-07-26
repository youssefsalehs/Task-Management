import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className=" max-w-2xl mx-auto shadow-md bg-white rounded-md p-6">
        <h1 className="text-center text-2xl font-semibold mb-4 text-indigo-500">
          Task Management App 📝
        </h1>
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
