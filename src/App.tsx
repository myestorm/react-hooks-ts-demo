import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import logo from './logo.svg';
import './App.scss';
import MainRoute from './router/index';

import { RootState } from './redux/rootReducer';

function App() {
  const user = useSelector<RootState, RootState['user']>(
    (state) => state.user
  );
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="top-nav">
            <ul>
              <li>
                <NavLink to="/" activeClassName="selected" exact={true}>首页</NavLink>
              </li>
              <li>
                <NavLink to="/doc" activeClassName="selected">文档</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="selected">关于</NavLink>
              </li>
            </ul>
          </nav>
          <div className="uname">
            {user.name}
          </div>
        </header>
        <main className="main-body">
          <MainRoute />
        </main>
      </Router>
    </div>
  );
}

export default App;
