import './App.css';

// Component imports
import Heading1 from "./ui/atoms/Heading1";
import Greeting from "./ui/atoms/Greeting";

function App() {
  return (
    <div id="App">
      <Heading1 />

      <Greeting name="Bob" />
      <Greeting name="Jack" />
    </div>
  );
}

export default App;
