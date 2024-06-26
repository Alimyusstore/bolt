import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Bolt from './pages/Bolt.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Error from './pages/Error.jsx'
import Contact from './pages/Contact.jsx'
import { pathBolt, pathContact } from './pathNames.js'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,

},{
  path: pathBolt,
  element: <Bolt />,
},{
  path: pathContact,
  element: <Contact/>

},{
  path: "*",
  element: <Error/>
}])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Bolt /> */}
  </React.StrictMode>
);
