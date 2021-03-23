export interface CompanyState {
  id: number;
  name: string;
}

export interface CompanyActionType {
  type: string;
  payload: any
}

const initState: CompanyState[] = [
  {
    id: 1,
    name: '天上'
  },
  {
    id: 2,
    name: '人间'
  }
]

const company = (state = initState, action: CompanyActionType) => {
  switch (action.type) {
    case 'COMPANY_ADD': {
      const _state = [ ...state];
      _state.push(action.payload);
      return _state;
    }
    case 'COMPANY_REMOVE': {
      const _state = [ ...state];
      _state.splice(action.payload, 1);
      return _state;
    }
    default:
      return state;
  }
};

export default company;
