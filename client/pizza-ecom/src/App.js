import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import HomeScreen from "./pages/HomeScreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeScreen/>
    </div>
  );
}

export default App;
