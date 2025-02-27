import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './reducers/item-list-reducer'

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)


export type RootState = ReturnType<typeof store.getState>

export type Dispatch = typeof store.dispatch