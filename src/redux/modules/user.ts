export interface UserState {
  id: number;
  name: string;
}

export interface UserActionType {
  type: string;
  payload: any
}

const initState: UserState = {
  id: 1,
  name: '用户名'
};

const user = (state = initState, action: UserActionType) => {
  switch (action.type) {
    case 'USER_CHANGE': {
      return { ...state, name: action.payload };
    }
    default:
      return state;
  }
};

export default user;
