import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import AddUsers from './components/AddUsers';

const App = () => {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/users')
    },
    {
      path: '/add/user',
      element: <AddUsers></AddUsers>
    }


  ]);

  return (
    <div>

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
};

export default App;