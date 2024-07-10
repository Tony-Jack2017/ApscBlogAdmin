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
          components: {
            Button: {
              colorPrimary: '#2f3ab2',
              algorithm: true, // 启用算法
            }
          }
      }}
    >
    <div className="App">
      <RouterProvider router={router}/>
    </div>
    </ConfigProvider>
  );
}

export default App;
