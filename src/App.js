import "./App.css";
import Footer from "./Components/Footer";
import WeatherApp from "./Components/WeatherApp/WeatherApp";
import Top from "./Components/WeatherApp/Top";

function App() {
  return (
    <div>
      <div className="sembii">
        <Top />
      </div>
      <div className="App">
        <WeatherApp />
        <Footer />
      </div>
    </div>
  );
}

export default App;
