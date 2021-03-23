import { useRef, MutableRefObject } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../redux/rootReducer';

import Hello, { HelloEventType } from '../components/Hello';

function HomeView () {
  const dispatch = useDispatch();
  const user = useSelector<RootState, RootState['user']>(
    (state) => state.user
  );
  const company = useSelector<RootState, RootState['company']>(
    (state) => state.company
  );
  const pid = '来自父级的ID';
  const toChild = () => {
    return pid;
  };
  const childRef: MutableRefObject<HelloEventType> = useRef({
    getA: () => ''
  });
  return (
    <div>
      <h1>Home</h1>
      <div>
        用户ID：{user.id}<br />
        用户名：<input type="text" value={user.name} onChange={(e) => {
          dispatch({ type: 'USER_CHANGE', payload: e.target.value });
        }}></input>
      </div>
      <hr />
      <div>
        {company.map((item, index) => {
          return (
            <div key={`c-${index}`}>
              公司ID：{item.id} / 公司名：{item.name}
              <button onClick={() => {
                dispatch({ type: 'COMPANY_ADD', payload: item });
              }}>复制添加</button>
              <button onClick={() => {
                dispatch({ type: 'COMPANY_REMOVE', payload: index });
              }}>删除</button>
            </div>
          );
        })}
      </div>
      <hr></hr>
      <Hello id={1} name="woo" pevent={toChild} ref={childRef} />
      <button onClick={() => {
        dispatch({ type: 'USER_CHANGE', payload: childRef.current.getA() });
      }}>调用子方法</button>
    </div>
  );
}

export default HomeView;
