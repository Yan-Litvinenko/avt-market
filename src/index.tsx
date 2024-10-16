import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components/layout/Layout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './css/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const router = createBrowserRouter(createRoutesFromElements(<Route id="app" path="/" element={<Layout />}></Route>));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
