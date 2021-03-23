import { MutableRefObject, useRef, useImperativeHandle, forwardRef, useState } from 'react';
export interface HelloType {
  id: number,
  name: string,
  pevent: () => string
}

export interface HelloEventType {
  getA: () => string;
}

function Hello(props: HelloType, ref: any) {
  const name = '我是Hello';
  const _ref: MutableRefObject<null> = useRef(null);
  const [pid, setPid] = useState('我是初始值');

  useImperativeHandle(ref, () => ({
    getA: () => {
      return name;
    }
  }));
  return (
    <div ref={_ref}>
      id: {props.id} ==== name: {props.name}<br/>
      {pid}
      <button onClick={() => {
        const _pid = props.pevent();
        setPid(_pid);
      }}>调用父方法</button>
      <button onClick={() => {
        setPid('我是初始值');
      }}>重置</button>
    </div>
  );
}

export default forwardRef(Hello);
