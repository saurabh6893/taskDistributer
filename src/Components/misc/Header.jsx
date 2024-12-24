const Header = () => {
  return (
    <div className="bg-gray-800 text-white flex items-center justify-between px-6 py-4 shadow-md">
      <div className="text-2xl font-semibold animate-fadeIn">Hello</div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
        Logout
      </button>
    </div>
  );
};

export default Header;
