import React from 'react';
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Slider from './components/Slider/Slider';
import Main from './layouts/Main';
import Quizes from './components/Quizes/Quizes';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <div><h1>Welcome to SkyPearl Edu!</h1><Slider></Slider></div> },
        {
          path: '/home',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/topics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Topics></Topics>
        },
        { path: '/statistics', element: <Statistics></Statistics> },
        { path: '/blog', element: <Blog></Blog> },
        {
          path: '/quizes/:quizesId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizesId}`);
          },
          element: <Quizes></Quizes>
        }
      ]
    },

    { path: '/about', element: <About></About> },
    { path: '*', element: <div>Opps! <br /> Look like you came to wrong way! <br /> Press the back arrow to return.</div> }
  ])
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
};

export default App;
