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
import CourseContent from './compnents/shared/CourseContent';
import Checkout from './compnents/shared/Checkout';
import PrivateRoute from './compnents/Providers/PrivateRoute';

function App() {
  const routes = createBrowserRouter([
    {
      path : '/',
      loader : ()=> fetch('https://binary-learning-server.vercel.app/topics'),
      element : <Main></Main>,
      children : [
        {
          path : '/',
          loader : ()=> fetch('https://binary-learning-server.vercel.app/topics'),
          element : <Home></Home>
        },
        {
          path : '/courses',
          loader : ()=> fetch('https://binary-learning-server.vercel.app/topics'),
          element : <Courses></Courses>,
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
          element : <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path : '/register',
          element : <Register></Register>
        },
        {
          path : 'topics/:id',
          loader : ({params})=>{
            // const id = params.id;
            return fetch(`https://binary-learning-server.vercel.app/topics/${params.id}`)
          },
          element : <CourseContent></CourseContent>
        },
        {
          path : 'topics/:id/checkout/:id',
          loader : ({params})=> fetch(`https://binary-learning-server.vercel.app/checkout/${params.id}`),
          element : <PrivateRoute><Checkout></Checkout></PrivateRoute>
        },{
          path : '*',
          element : <Error></Error>
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
