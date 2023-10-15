import { Routes ,Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'
import Auth from './pages/Auth/Auth'
import Signup from './components/Dashboard/Auth/Register/Signup/Signup'
import Login from './components/Dashboard/Auth/Login/Login'

function App() {
  return (
    <>
    <div className="App">

  <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/authenticate' element={<Auth/>}>
        <Route path='signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>

    </>
  )
}

export default App
