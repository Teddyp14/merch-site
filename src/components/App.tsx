import './App.css'
import Body from './Body'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from '../reducers/item-list-reducer'

const store = createStore(reducer);

function App() {
  return (
    <>
      <Provider store={store}>
        <Body />
      </Provider>
    </>
  )
}

export default App