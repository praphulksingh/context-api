import { Provider } from 'react-redux'
import { store } from './app/store'

import Todos from './components/Todos'


import './App.css'
import TodoForm from './components/AddTodo'

function App() {
   

  return (
  
      <Provider store={store}>
      <h1 >this is a redux tool kit project</h1>
      <TodoForm/>
      <Todos/>
      </Provider>
  )
}

export default App
