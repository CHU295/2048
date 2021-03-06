import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import HomePage from './view/homePage'

import Reducers from '../store/index'

import './assets/css/defalut.scss'
import './assets/css/main.scss'

const store = createStore(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDom.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('app')
)


