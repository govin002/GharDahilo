import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
const router = createBrowserRouter([
 {
  path:"/",
  element:<Home/>,
 }


])

const Body = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default Body