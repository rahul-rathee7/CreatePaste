import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Navbar/Home'
import About from './Navbar/About'
import Contact from './Navbar/Contact'
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
      path:'/About',
      element:
      <div>
        <Nav />
        <About />
      </div>
    },
    {
      path:'/Contact',
      element:
      <div>
        <Nav />
        <Contact />
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
   <div className="w-screen h-screen bg-white text-red-500">
    <RouterProvider router={router}/>
   </div>
  )
}

export default App
