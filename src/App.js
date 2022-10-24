import './App.css';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Main from '../src/compnents/layout/Main.jsx'
import Home from '../src/compnents/pages/Home'
import Courses from './compnents/pages/Courses';
import Login from './compnents/pages/Login';
import Faq from './compnents/pages/Faq';
import Blog from './compnents/pages/Blog';
import Profile from './compnents/pages/Profile';
import Register from './compnents/pages/Register';
import Error from './compnents/pages/Error';

function App() {
  const routes = createBrowserRouter([
    {
      path : '/',
      element : <Main></Main>,
      children : [
        // {
        //   path : '/',
        //   element : <Home></Home>
        // },
        {
          path : '/',
          element : <Courses></Courses>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/faq',
          element : <Faq></Faq>
        },
        {
          path : '/blog',
          element : <Blog></Blog>
        },
        {
          path : '/profile',
          element : <Profile></Profile>
        },
        {
          path : '/register',
          element : <Register></Register>
        }
      ],
    },
    {
      path : '*',
      element : <Error></Error>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
