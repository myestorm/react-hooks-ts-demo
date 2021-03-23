import { Switch, Route } from 'react-router-dom';
import { RouteType, routes } from './routes'

import _ from 'lodash';

function flatTree (arr: RouteType[] = [], result: RouteType[] = []): RouteType[] {
  arr.forEach(item => {
    const _item = _.cloneDeep(item);
    const _children = _item?.children;
    result.push(_item);
    if (_children && _children.length > 0) {
      flatTree(_children, result)
    }
  });
  return result;
};

const _routes = flatTree(routes);

function router () {
  return (
    <Switch>
      {_routes.map((route: RouteType, index: number) => (
        <Route
          key={`route-${index}`}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default router;
