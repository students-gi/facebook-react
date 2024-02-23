import './App.css';

// Component imports
import Heading1 from "./ui/atoms/Heading1";
import Card from "./ui/molecules/Card";
import GuessANumber from "./ui/molecules/GuessANumber";

function App() {
  return (
    <div id="App">
      <Heading1 title='Creating Cards' />

      <Card
        title='Hello from 1st card&apos;s title!'
        subtitle='and a &quot;hey&quot; from 1st card&apos;s subtitle'
      />
      <Card
        title='Hello from 2nd card&apos;s title!'
        subtitle='and a &quot;hey&quot; from 2nd card&apos;s subtitle'
        paragraph='This card even has its own paragraph!'
      />
      <Card
        title='Hello from 3rd card&apos;s title!'
      />

      <hr/>
      <Heading1 title='Buttons and their Click events' />

      <GuessANumber />
    </div>
  );
}

export default App;
