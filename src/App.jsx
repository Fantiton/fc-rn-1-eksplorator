import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./FileItem"
import "./FolderItem"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FolderItem/>
      <FileItem/>
      <FileItem/>
      <FileItem/>
    </>
  )
}

export default App
