import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import AddUsers from './components/AddUsers';
import UpdateData from './components/UpdateData';

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
    },
    {
      path: '/update/:id',
      element: <UpdateData></UpdateData>,
      loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)

    }


  ]);

  return (
    <div>

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
};

export default App;