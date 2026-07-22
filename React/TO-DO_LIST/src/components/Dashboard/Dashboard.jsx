import { useState } from "react";

const Dashboard = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleAddOrUpdate = () => {
    if (inputValue.trim() === "") {
      return;
    }

    if (editingId !== null) {
      const updatedList = todoList.map((item) =>
        item.id === editingId ? { ...item, text: inputValue } : item
      );
      setTodoList(updatedList);
      setEditingId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodoList([...todoList, newTodo]);
    }

    setInputValue("");
  };

  const handleDelete = (id) => {
    const updatedList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedList);
  };

  const handleToggle = (id) => {
    const updatedList = todoList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodoList(updatedList);
  };

  const handleEdit = (id) => {
    const selectedTodo = todoList.find((item) => item.id === id);
    setInputValue(selectedTodo.text);
    setEditingId(id);
  };

  const completedCount = todoList.filter((item) => item.completed).length;
  const pendingCount = todoList.length - completedCount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <h2 className="text-3xl font-bold text-slate-800">
              To Do Dashboard
            </h2>

            <div className="flex gap-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition">
                Profile
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition">
                Logout
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
              <p className="text-slate-500 text-sm font-medium">Total Tasks</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-2">
                {todoList.length}
              </h3>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 shadow-sm">
              <p className="text-green-700 text-sm font-medium">Completed</p>
              <h3 className="text-2xl font-bold text-green-600 mt-2">
                {completedCount}
              </h3>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 shadow-sm">
              <p className="text-yellow-700 text-sm font-medium">Pending</p>
              <h3 className="text-2xl font-bold text-yellow-600 mt-2">
                {pendingCount}
              </h3>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 md:p-5 mb-8 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-700 mb-4">
              {editingId !== null ? "Update Task" : "Add New Task"}
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter your task"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-slate-400"
              />

              <button
                onClick={handleAddOrUpdate}
                className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                {editingId !== null ? "Update" : "Add"}
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Task List
            </h3>

            {todoList.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                <p className="text-slate-500 text-lg">No tasks added yet</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {todoList.map((item) => (
                  <li
                    key={item.id}
                    className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                  >
                    <span
                      className={`text-lg font-medium ${
                        item.completed
                          ? "line-through text-slate-400"
                          : "text-slate-800"
                      }`}
                    >
                      {item.text}
                    </span>

                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleToggle(item.id)}
                        className={`px-4 py-2 rounded-lg text-white font-medium transition ${
                          item.completed
                            ? "bg-yellow-500 hover:bg-yellow-600"
                            : "bg-green-500 hover:bg-green-600"
                        }`}
                      >
                        {item.completed ? "Undo" : "Complete"}
                      </button>

                      <button
                        onClick={() => handleEdit(item.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;