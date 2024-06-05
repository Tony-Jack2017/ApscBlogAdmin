import React from 'react';
import './styles/main.scss'
import './styles/common.scss'
import './styles/layuot.scss'
import './styles/commponent.scss'
import {RouterProvider} from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;