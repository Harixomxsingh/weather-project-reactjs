import "./App.css";
import CreateContext from "./context/CreateContext";
import MainBody from "./pages/MainBody";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center  w-full h-screen bg-gray-200">
      <CreateContext>
        <MainBody />
      </CreateContext>
    </div>
  );
}

export default App;
