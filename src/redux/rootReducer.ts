import { combineReducers } from 'redux';

import user, { UserState } from './modules/user';
import company, { CompanyState } from './modules/company';

export interface RootState {
  user: UserState,
  company: CompanyState[]
}

const rootReducer = combineReducers({
  user,
  company
});

export default rootReducer;
