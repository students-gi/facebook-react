import { RouteObject } from 'react-router-dom';
/*=====   Page template import   =====*/
import Assignments from 'src/ui/templates/Assignments'
/*=====  Body component import   =====*/
import CardDisplay from 'src/ui/organisms/CardDisplay';
import GuessANumber from 'src/ui/organisms/GuessANumber';
import RegistrationForm from 'src/ui/organisms/RegistrationForm';
import MealDisplay from 'src/ui/organisms/MealDisplay';
import WalletDisplay from 'src/ui/organisms/WalletDisplay';
import DayTitles from 'src/ui/organisms/DayTitles';
import ImageImport from 'src/ui/organisms/ImageImport';
import Soundboard from 'src/ui/organisms/Soundboard';
import Calculator from 'src/ui/organisms/Calculator';

const ReactBasicRoutes: RouteObject = {
  path: 'basic',
  children: [
    {
      path: '',
      element: <Assignments
        title="Select a project from the navbar above"
        organism={<></>} />
    },
    {
      path: 'card',
      element: <Assignments
        title="Creating Cards"
        organism={<CardDisplay />} />
    },
    {
      path: 'guess',
      element: <Assignments
        title="Buttons and their Click events"
        organism={<GuessANumber />} />
    },
    {
      path: 'register',
      element: <Assignments
        title="React hooks & forms (kinda)"
        organism={<RegistrationForm />} />
    },
    {
      path: 'meals',
      element: <Assignments
        title="React contexts"
        organism={<MealDisplay />} />
    },
    {
      path: 'wallet',
      element: <Assignments
        title="React reducer hook"
        organism={<WalletDisplay />} />
    },
    {
      path: 'day',
      element: <Assignments
        title="A conditional render based on the current weekday"
        organism={<DayTitles />} />
    },
    {
      path: 'images',
      element: <Assignments
        title="The various ways to import an image"
        organism={<ImageImport />} />
    },
    {
      path: 'sounds',
      element: <Assignments
        title="A way to import audio into React"
        organism={<Soundboard />} />
    },
    {
      path: 'calc',
      element: <Assignments
        title="The 'Simplest Working Calculator' that Facebook could come up with"
        organism={<Calculator />} />
    }
  ]
};

export default ReactBasicRoutes;
