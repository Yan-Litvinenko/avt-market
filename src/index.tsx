import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/home/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './css/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
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
