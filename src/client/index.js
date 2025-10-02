import React from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import {storeStateMiddleWare} from './middleware/storeStateMiddleWare'
import reducer from './reducers'
import App from './containers/app'
import {alert} from './actions/alert'

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeStateMiddleWare),
  devTools: process.env.NODE_ENV !== 'production'
})

const container = document.getElementById('tetris')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)

store.dispatch(alert('Soon, will be here a fantastic Tetris ...'))
