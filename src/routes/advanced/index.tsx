import { RouteObject } from 'react-router-dom';
/*=====   Page template import   =====*/
import Assignments from 'src/ui/templates/Assignments'
/*=====  Body component import   =====*/

const ReactBasicRoutes: RouteObject = {
  path: 'advanced',
  children: [
    {
      path: '',
      element: <Assignments
        title="Select a project from the navbar above"
        organism={<></>} />
    }
  ]
};

export default ReactBasicRoutes;
