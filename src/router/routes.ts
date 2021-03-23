import Page404 from '../views/404';
import Home from '../views/Home';
import About from '../views/About';
import Doc from '../views/Doc';
import DocList from '../views/DocList';
import DocDetail from '../views/DocDetail';

export interface RouteType {
  path: string;
  exact: boolean;
  component: () => JSX.Element;
  children?: RouteType[]
}

export const routes: RouteType[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/doc',
    exact: true,
    component: Doc,
    children: [
      {
        path: '/doc/list/:id',
        exact: false,
        component: DocList,
      },
      {
        path: '/doc/detail/:id',
        exact: false,
        component: DocDetail,
      }
    ]
  },
  {
    path: '/about',
    exact: true,
    component: About
  },
  {
    path: '*',
    exact: true,
    component: Page404
  }
];
