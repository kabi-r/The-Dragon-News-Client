import { Navigate, createBrowserRouter } from "react-router-dom";
import Category from "../Component/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import Main from "../Layout/Main";
import News from "../Component/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Component/Authentication/Login";
import Register from "../Component/Authentication/Register";
import PrivetRouter from "./PrivetRouter";
import Treams from "../Component/Treams";

const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element:<Navigate to='/category/0'></Navigate>
      },
      {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: 'terms',
        element: <Treams></Treams>
    }
    ]
  },
    {
      path: "category",
      element: <Main></Main>,
      children:[
        {
          path: ":id",
          element: <Category></Category>,
          loader:({params}) =>fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path:'news',
      element:<NewsLayout></NewsLayout>,
      children:[
        {
          path:':id',
          element:<PrivetRouter><News></News></PrivetRouter>,
          loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    },

      

  ]);
export default router;