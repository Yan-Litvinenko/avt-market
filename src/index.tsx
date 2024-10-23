import React from 'react';
import ReactDOM from 'react-dom/client';
import { About } from './pages/about/About';
import { Banks } from './pages/banks/Banks';
import { Buyout } from './pages/buyout/Buyout';
import { Contacts } from './pages/contacts/Contacts';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { homeLoader } from './loader/homeLoader';
import { banksLoader } from './loader/banksLoader';
import { InitialProvider } from './hoc/InitialProvider';
import { Installment } from './pages/installment/Installment';
import { Layout } from './components/layout/Layout';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { TradeIn } from './pages/tradeIn/TradeIn';
import './css/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!);
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} loader={homeLoader} />
            <Route path="installment" element={<Installment />} />
            <Route path="buyout" element={<Buyout />} />
            <Route path="exchange" element={<TradeIn />} />
            <Route path="banks" element={<Banks />} loader={banksLoader} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="about" element={<About />} />
        </Route>,
    ),
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <InitialProvider>
                <RouterProvider router={router} />
            </InitialProvider>
        </Provider>
    </React.StrictMode>,
);
