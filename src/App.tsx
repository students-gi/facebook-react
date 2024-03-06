import './App.css';

// Component imports
import Heading1 from "./ui/atoms/Heading1";
import CardDisplay from "./ui/organisms/CardDisplay";
import GuessANumber from "./ui/organisms/GuessANumber";
import RegistrationForm from "./ui/organisms/RegistrationForm"
import MealDisplay from  "./ui/organisms/MealDisplay"
import WalletDisplay from  "./ui/organisms/WalletDisplay"

function App() {
  return (
    <div id="App">
      <Heading1 title='Creating Cards' />
      <CardDisplay />
      <hr/>

      <Heading1 title='Buttons and their Click events' />
      <GuessANumber />
      <hr/>

      <Heading1 title="React hooks & forms (kinda)" />
      <RegistrationForm />
      <hr/>

      <Heading1 title="React contexts" />
      <MealDisplay />
      <hr/>

      <Heading1 title="React reducer hook" />
      <WalletDisplay />
    </div>
  );
}

export default App;
