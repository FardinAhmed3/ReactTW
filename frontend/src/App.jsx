import { useState } from 'react'
import { Introduction } from './Pages/Introduction'
import './App.css'

function App() {
  const title= "King"
  return (
    <div children="p-10">
    <h1 class="text-amber-300 border-8 text-7xl">Hello {title}</h1>
    <Introduction/>
    </div>
  )
}

export default App
