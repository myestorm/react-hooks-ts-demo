import { Link } from 'react-router-dom';
function DocView () {
  return (
    <div>
      <h1>Doc</h1>
      <ul>
        <li><Link to="/doc/list/1">离骚</Link></li>
        <li><Link to="/doc/list/2">九歌</Link></li>
      </ul>
    </div>
  );
}

export default DocView;
