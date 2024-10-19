import React from 'react';
import ReactDOM from 'react-dom/client';
import { About } from './pages/home/about/About';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { homeLoader } from './loader/homeLoader';
import { Layout } from './components/layout/Layout';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './css/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} loader={homeLoader} />
            <Route path="about" element={<About />} />
        </Route>,
    ),
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
