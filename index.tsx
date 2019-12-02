import React, { Component } from 'react';

// let data=
// {
//   todos:[{},{},{}],
//   filters:
// };
import {createStore,combineReducers} from 'redux';
import todosReducer from './reducers/todoReducer';
import filterReducer from './reducers/filterReducer';
import colorReducer from './reducers/colorReducer';
import {addToDo} from './actions/actionCreator';
import {toggleToDO} from './actions/actionCreator';
import {setFilter} from './actions/actionCreator';
import {setColor} from './actions/actionCreator';


let store=createStore(combineReducers({todos: todosReducer,filter: filterReducer, color:colorReducer}));

store.subscribe(()=>console.log(console.log(store.getState())));

store.dispatch(addToDo("Onion"));
store.dispatch(addToDo("Pen"));
 store.dispatch(addToDo("Milk"));
 store.dispatch(toggleToDO("Onion"));
 store.dispatch(setFilter("SHOW_COMPLETED"));
 store.dispatch(setColor("blue"));
