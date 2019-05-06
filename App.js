import React, { Component} from 'react'
import {Provider} from 'react-redux' ;
import {createStore} from 'redux' ;
import {reducer} from './redux/todoListRedux' ;

import TodoListApp from './TodoListApp' ;

export default class App extends Component {
  render() {
    const store = createStore(reducer) ;
    return (
      <Provider store={store}>
        <TodoListApp />
      </Provider>
    );
  }
}