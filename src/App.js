import "./App.css";
import CreateContext from "./context/CreateContext";
import MainBody from "./pages/MainBody";

function App() {
  return (
    <div className="App">
      <CreateContext>
        <MainBody />
      </CreateContext>
    </div>
  );
}

export default App;
