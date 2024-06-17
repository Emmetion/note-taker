import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import MyNotes from './pages/MyNotes/MyNotes.jsx';
import CreateNote from './pages/CreateNote/CreateNote.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App page={<HomePage/>}/>
  }, 
  {
    path: '/my-notes',
    element: <App page={<MyNotes/>}/>
  },   
  {
    path: '/create-note',
    element: <App page={<CreateNote/>}/>
  },
  {
    path: '/login',
    element: <App page={<LoginPage/>}/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
