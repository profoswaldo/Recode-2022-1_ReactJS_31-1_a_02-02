import {createStore} from 'redux';

import {RootReducer} from '../reducers/rootReducer';

export const Store = createStore(RootReducer);