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
import {addToDo} from './actions/actionCreator'


let store=createStore(combineReducers({todos: todosReducer,filter: filterReducer, color:colorReducer}));

store.subscribe(()=>console.log(console.log(store.getState())));

store.dispatch(addToDo("Onion"));
store.dispatch({type:"ADD_TODO",text:"Pen"});
 store.dispatch({type:"ADD_TODO",text:"Milk"});
 store.dispatch({type:"TOGGLE_TODO",text:"Onion"});
 store.dispatch({type:"SET_FILTER",visibility:"SHOW_COMPLETED"});
 store.dispatch({type:"SET_COLOR",color:"blue"});
