import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MovieHunterMainPage from "./pet-projects/MovieHunter/MovieHunterMainPage";
import Calculator from "./calculator/calculator";



const router = createBrowserRouter([
  
  
   // {
   // path: "/",
   // element: <MovieHunterMainPage/>,
   // },

    {
      path: "/",
      element: <Calculator/>,
      },
     

     

      
    

]);

const rootElement = document.getElementById("root")

ReactDOM.createRoot(rootElement!).render(

 
  <RouterProvider router={router} />
  

);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
