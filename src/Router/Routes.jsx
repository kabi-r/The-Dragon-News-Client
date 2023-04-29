import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Category from "../Component/Category/Category";

import NewsLayout from "../Layout/NewsLayout";
import Main from "../Layout/Main";
import News from "../Component/News/News";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Category></Category>,
          loader:()=>fetch('http://localhost:5000/news')
        },
        {
          path: "/category/:id",
          element: <Category></Category>,
          loader:({params}) =>fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path:'/news',
      element:<NewsLayout></NewsLayout>,
      children:[
        {
          path:'/news/:id',
          element:<News></News>,
          loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }

      

  ]);
export default router;