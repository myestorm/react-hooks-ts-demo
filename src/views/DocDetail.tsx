import { useParams } from 'react-router-dom';

interface DocRouteType {
  id: string
}
function DocDetailView () {
  let { id } = useParams<DocRouteType>();
  return (
    <div>
      <h1>Detail: {id}</h1>
    </div>
  );
}

export default DocDetailView;
