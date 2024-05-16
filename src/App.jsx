import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Register from './pages/Register'
// import AdminHome from './admin/AdminHome'
import Dashboard from './admin/Dashboard'
import Users from './admin/Users'
import Forms from './admin/Forms'
import Tables from './admin/Tables'
import Charts from './admin/Charts'
import Settings from './admin/Settings'


// const router = createBrowserRouter(
//   createRoutesFromelements(
//     <>
//     </>
//   )
// )

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login"/>
        <Route element={<About />} path="/about"/>
        <Route element={<Register />} path="/register"/>

        <Route element={<ProtectedRoutes />}>

          <Route element={<Home />} path="/"/>
          <Route element={<Profile />} path="/profile"/>
          {/* <Route element={<AdminProfile />} path="/adminprofile"/> */}
          {/* <Route element={<AdminHome />} path="/adminhome"/> */}
          <Route element={<Dashboard />} path="/dashboard"/>
          <Route element={<Users />} path="/users"/>
          <Route element={<Forms />} path="/forms"/>
          <Route element={<Tables />} path="/tables"/>
          <Route element={<Charts />} path="/charts"/>
          <Route element={<Settings />} path="/settings"/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
