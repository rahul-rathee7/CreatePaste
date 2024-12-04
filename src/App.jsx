import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Navbar/Home'
import Paste from './Navbar/Paste'
import Nav from './Navbar/Nav'
import NotFound from './Navbar/NotFound'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:
      <div>
        <Nav />
        <Home />
      </div>
    },
    {
      path:'/Paste',
      element:
      <div>
        <Nav />
        <Paste />
      </div>
    },
    {
      path:'*',
      element:
      <div>
        <NotFound />
      </div>
    }
  ]
)

function App() {
  return (
   <div className="bg-white text-black">
    <RouterProvider router={router}/>
   </div>
  )
}

export default App
