import React from 'react'
import ReactDom from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import HomePage from './view/homePage'

import Reducers from '../store/index'

import './assets/css/defalut.scss'
import './assets/css/main.scss'

const store = createStore(Reducers)

ReactDom.render(
  <Provider store={store} key="provider">
    <HomePage />
  </Provider>,
  document.getElementById('app')
)


