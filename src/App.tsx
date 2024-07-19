import React from 'react';
import './styles/main.scss'
import './styles/common.scss'
import './styles/layuot.scss'
import './styles/commponent.scss'
import {RouterProvider} from "react-router-dom";
import router from "./router";
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: '#2f3ab2',
          borderRadius: 4,
        },
      }}
    >
    <div className="App">
      <RouterProvider router={router}/>
    </div>
    </ConfigProvider>
  );
}

export default App;
