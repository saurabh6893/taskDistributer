import  { useRef } from "react";

const CreateTask = () => {
  const formRef = useRef(null);

  const handleFocus = () => {
    if (formRef.current) {
      const formRect = formRef.current.getBoundingClientRect();
      const offset =
        formRect.top +
        window.scrollY -
        window.innerHeight / 2 +
        formRect.height / 2;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-[400px] p-8 bg-gradient-to-br from-gray-800/30 via-gray-700/20 to-gray-900/10 backdrop-blur-xl shadow-lg border border-gray-600/50 rounded-xl animate-glassPop transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
        action=""
        ref={formRef}
      >
        <h2 className="text-2xl font-semibold text-white mb-6">Create Task</h2>

        <label className="block text-sm text-gray-300 mb-2">Task Title</label>
        <input
          onFocus={handleFocus}
          type="text"
          placeholder="Make a UI design"
          className="w-full px-4 py-2 mb-4 bg-gray-700/20 text-white rounded-lg shadow-sm border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Description */}
        <label className="block text-sm text-gray-300 mb-2">Description</label>

        {/* Date */}
        <label className="block text-sm text-gray-300 mb-2">Date</label>
        <input
          onFocus={handleFocus}
          type="date"
          className="w-full px-4 py-2 mb-4 bg-gray-700/20 text-white rounded-lg shadow-sm border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Assign To */}
        <label className="block text-sm text-gray-300 mb-2">Assign To</label>
        <input
          onFocus={handleFocus}
          type="text"
          placeholder="Employee name"
          className="w-full px-4 py-2 mb-4 bg-gray-700/20 text-white rounded-lg shadow-sm border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Category */}
        <label className="block text-sm text-gray-300 mb-2">Category</label>
        <input
          onFocus={handleFocus}
          type="text"
          placeholder="Design, Dev, etc."
          className="w-full px-4 py-2 mb-6 bg-gray-700/20 text-white rounded-lg shadow-sm border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          cols="30"
          rows="4"
          onFocus={handleFocus}
          placeholder="Describe the task"
          className="w-full px-4 py-2 mb-4 bg-gray-700/20 text-white rounded-lg shadow-sm border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
