import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home/home';
import Menu from './Menu/menu';
import Banners from './BANNERS/banners';
import Trending from './TRENDING/trending';
import RouterCustom from './routes/RouterCustom'
import { BrowserRouter } from 'react-router-dom';
// import App from './App2';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home /> */}

    {/* <Menu /> */}
    <BrowserRouter>
      <RouterCustom />
    </BrowserRouter>
    <Banners />
    <Trending />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
