/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
 */

/*  // Baasic example
 import { createStore, applyMiddleware } from 'redux';
 import { logger } from 'redux-logger';

 const INITIAL_STATE = {
    value: 0
 };

 const reducer = (state, action) => {
     switch(action.type) {
         case 'ADD':
            return Object.assign({}, state, {
                value: state.value + action.payload 
            });
         case 'REMOVE':
            return Object.assign({}, state, {
                value: state.value - action.payload
            })
        default:
            return state;
     }
 }
 const middleware = applyMiddleware(logger);
 const store = createStore(reducer, INITIAL_STATE, middleware);

 store.subscribe(() => {
    console.log(store.getState());
 });

 store.dispatch({type: 'ADD', payload: 2});
 store.dispatch({type: 'ADD', payload: 4});
 store.dispatch({type: 'REMOVE', payload: 2});

  */

 /*  // Example using thunk
  import { createStore, applyMiddleware } from 'redux';
  import logger from 'redux-logger';
  import thunk from 'redux-thunk';

  const middleware = applyMiddleware(logger, thunk);
  const INITIAL_STATE = {
      todo: {},
      error: null,
      pending: false,
      done: false
  };

  const reducer = (state, action) => {
      switch(action.type){
          case 'ADD_TODO_STARTED':
            return {...state, error: null, pending: true, done: false};
          case 'ADD_TODO_COMPLETED':
            return {...state, todo : action.payload, error: null, pending: false, done: true};
          case 'ADD_TODO_ERROR':
            return {...state, todo: {}, error: action.payload, pending: false, done: false};
          default:
            return state;
      }
  }
  const addTodo = (param) => {
    return new Promise((resolve, reject) => {
        if(param === 'OK'){
            setTimeout(()=> resolve({
                taskName: 'Tehnologii Web',
                priority: 'Medium',
                duration: 15
            }), 1500)
        } else {
            reject("Eroare");
        }
    });
  }
  const store = createStore(reducer, INITIAL_STATE, middleware);


  //We dispatch a function instead of an action
  store.dispatch((dispatch) => {
    dispatch({type: 'ADD_TODO_STARTED'})
    addTodo('OK').then((todo) => {
        dispatch({type: 'ADD_TODO_COMPLETED', payload: todo});
    }).catch((err) =>{
        dispatch({type:'ADD_TODO_ERROR', payload: err});
    });
  });

   */

   import { createStore, applyMiddleware } from 'redux';
   import logger from 'redux-logger';
   import promise from 'redux-promise-middleware';


  const INITIAL_STATE = {
       todo: {},
       error: null,
       pending: false,
       done: false
   };

   const middleware = applyMiddleware(promise(), logger);
   
   const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO_PENDING':
          return {...state, error: null, pending: true, done: false};
        case 'ADD_TODO_FULFILLED':
          return {...state, todo : action.payload, error: null, pending: false, done: true};
        case 'ADD_TODO_REJECTED':
          return {...state, todo: {}, error: action.payload, pending: false, done: false};
        default:
          return state;
        }
    }
    const addTodo = (param) => {
        return new Promise((resolve, reject) => {
            if(param === 'OK'){
                setTimeout(()=> resolve({
                    taskName: 'Tehnologii Web',
                    priority: 'Medium',
                    duration: 15
                }), 1500)
            } else {
                reject("Eroare");
            }
        });
      }

   const store = createStore(reducer, INITIAL_STATE, middleware);
   store.dispatch({
    type: 'ADD_TODO',
    payload: addTodo('OK')
   });

   