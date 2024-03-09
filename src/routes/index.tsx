import { RouteObject } from 'react-router-dom';
/*=====    Child route imports   =====*/
import ReactBasicRoutes from 'src/routes/basic';
import ReactAdvancedRoutes from 'src/routes/advanced';
/*=====   Page template import   =====*/
import Assignments from 'src/ui/templates/Assignments';

const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Assignments
      title="Select a project from the navbar above"
      organism={<></>} />
  },
  ReactBasicRoutes,
  ReactAdvancedRoutes
];

export default AppRoutes;