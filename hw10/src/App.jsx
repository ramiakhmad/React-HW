import { useState } from 'react'
import './App.css'
import DynamicForm from './components/DynamicForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>React Hook Form</h1>
        <DynamicForm />

    </>
  )
}

export default App
