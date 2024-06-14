import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './routes/Routes';
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="rounded-lg max-w-7xl mx-auto mt-5 mb-5">
    <React.StrictMode>
      <AuthProvider>

        <RouterProvider router={router} />
        <Toaster></Toaster>
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
