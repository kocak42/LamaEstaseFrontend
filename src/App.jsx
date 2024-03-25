import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";

import Homepage from "./routes/homepage/homePage";
import ProfilePage from "./routes/profilePage/profilePage";


function App() {
  const router = createBrowserRouter([
  
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<Homepage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:postId",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
       
       
      ]
    }
  ]);

  return (
    

    <RouterProvider router={router}/>
  );
}

export default App;