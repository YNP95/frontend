// import logo from './logo.svg';
// import './App.css';
import  { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import router from './routes';

function App() {
  return (
    <ChakraProvider>
      <React.StrictMode>
        <RouterProvider router={router}/>
      </React.StrictMode>
    </ChakraProvider>
  );
}

export default App;
