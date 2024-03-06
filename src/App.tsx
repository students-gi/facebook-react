import './App.css';

// Component imports
import Heading1 from "./ui/atoms/Heading1";
import CardDisplay from "./ui/organisms/CardDisplay";
import GuessANumber from "./ui/organisms/GuessANumber";
import RegistrationForm from "./ui/organisms/RegistrationForm"
import MealDisplay from "./ui/organisms/MealDisplay"
import WalletDisplay from "./ui/organisms/WalletDisplay"
import DayTitles from "./ui/organisms/DayTitles"
import ImageImport from "./ui/organisms/ImageImport"
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div id="App">
      <nav className='top-nav'>
        <Link to='/card'>Cards</Link>
        <Link to='/guess'>Number Guesser</Link>
        <Link to='/register'>Registration</Link>
        <Link to='/meals'>Meal list</Link>
        <Link to='/wallet'>Wallet</Link>
        <Link to='/day'>Day names</Link>
        <Link to='/images'>Images</Link>
      </nav>
      <Routes>
        <Route path='card' element={
          <>
            <Heading1 title='Creating Cards' />
            <CardDisplay />
          </>
        } />
        <Route path='guess' element={
          <>
            <Heading1 title='Buttons and their Click events' />
            <GuessANumber />
          </>
        } />
        <Route path='register' element={
          <>
            <Heading1 title="React hooks & forms (kinda)" />
            <RegistrationForm />
          </>
        } />
        <Route path='meals' element={
          <>
            <Heading1 title="React contexts" />
            <MealDisplay />
          </>
        } />
        <Route path='wallet' element={
          <>
            <Heading1 title="React reducer hook" />
            <WalletDisplay />
          </>
        } />
        <Route path='day' element={
          <>
            <Heading1 title="A conditional render based on the current weekday" />
            <DayTitles />
          </>
        } />
        <Route path='images' element={
          <>
            <Heading1 title="The various ways to import an image" />
            <ImageImport />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
