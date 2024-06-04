import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/home/Home.jsx';
import SingleProduct from './Pages/home/SingleProduct.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import cấu hình i18n


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}> 
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>,
);
