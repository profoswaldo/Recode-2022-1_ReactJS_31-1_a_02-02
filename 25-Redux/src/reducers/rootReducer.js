import {combineReducers} from 'redux';

import {TodoReducer} from './todoReducer'

export const RootReducer = combineReducers({todoAction: TodoReducer});