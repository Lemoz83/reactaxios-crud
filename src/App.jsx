import "./App.css";

import Post from "./component/Post";

function App() {
  return (
    <>
      <div className="flex justify-center mt-10 mb-10">
        <h1 className="font-thin text-6xl text-emerald-500">
          React Axios CRUD{" "}
        </h1>
      </div>

      <Post />
    </>
  );
}

export default App;
