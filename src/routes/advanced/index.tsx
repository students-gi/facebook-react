import { RouteObject } from 'react-router-dom';
/*=====   Page template import   =====*/
import Assignments from 'src/ui/templates/Assignments'
/*=====  Body component import   =====*/
import DessertList from 'src/ui/_advanced/DessertList';

const ReactBasicRoutes: RouteObject = {
  path: 'advanced',
  children: [
    {
      path: '',
      element: <Assignments
        title="Select a project from the navbar above"
        organism={<></>} />
    },
    {
      path: 'desserts',
      element: <Assignments
        title="User-side transformation of database data"
        organism={<DessertList />} />
    }
  ]
};

export default ReactBasicRoutes;
