import { Routes ,Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <>
    <div className="App">

  <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>
    </div>

    </>
  )
}

export default App
