import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface DocRouteType {
  id: string
}

interface DocType {
  aid: number,
  title: string
};
interface DocListType {
  id: number;
  title: string;
  children: DocType[]
}

const data: DocListType[] = [
  {
    id: 1,
    title: '离骚',
    children: [
      {
        aid: 1,
        title: '路漫漫其修远兮，吾将上下而求索'
      },
      {
        aid: 2,
        title: '亦余心之所善兮，虽九死其犹未悔'
      },
      {
        aid: 3,
        title: '忳郁邑余侘傺兮，吾独穷困乎此时也'
      }
    ]
  },
  {
    id: 2,
    title: '九歌',
    children: [
      {
        aid: 1,
        title: '操吴戈兮被犀甲，车错毂兮短兵接'
      },
      {
        aid: 2,
        title: '旌蔽日兮敌若云，矢交坠兮士争先'
      },
      {
        aid: 3,
        title: '凌余阵兮躐余行，左骖殪兮右刃伤'
      }
    ]
  }
];

function DocListView () {
  let { id } = useParams<DocRouteType>();
  let content = data.find(item => item.id === +id)
  return (
    <div>
      <h1>List ID: {id} - {content?.title}</h1>
      <ul>
      {content?.children.map((item, index) => {
        return <li key={`list-${index}`}>{index + 1}<Link to={`/doc/detail/${item.aid}`}>{item.title}</Link></li>
      })}
      </ul>
    </div>
  );
}

export default DocListView;
