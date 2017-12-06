import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import HomePage from './view/homePage'

import Reducers from '../store/index'

import './assets/css/defalut.scss'
import './assets/css/main.scss'

let createStoreWithMiddleware = applyMiddleware()(createStore)

const store = createStore(Reducers)

ReactDom.render(
  <Provider store={store}>
    <HomePage />
  </Provider>,
  document.getElementById('app')
)


