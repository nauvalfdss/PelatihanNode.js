import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import FormButton from './FormButton.jsx'
import TodoList from './TodoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FormButton/> */}
    <TodoList />
  </StrictMode>,
)
