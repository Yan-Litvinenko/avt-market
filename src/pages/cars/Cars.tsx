import React from 'react';
import { CarSelection } from '../../components/carSelection/CarSelection';
import { InStockList } from '../../components/inStockList/InStockList';
import { CarsFilter } from '../../components/carsFilter/CarsFilter';
import { useParams } from 'react-router-dom';
import { BreadCrumpPage } from '../../components/breadCrumpPage/BreadCrumpPage';

export const Cars = (): React.JSX.Element => {
    const { brand, model, generation } = useParams();

    return (
        <div className="container">
            <div className={`page`}>
                <BreadCrumpPage
                    links={[
                        { name: 'Главная', url: '/' },
                        { name: 'Авто с пробегом', url: '/cars' },
                    ]}
                />
                <h1 className={`page__title`}>
                    {!brand ? 'Купить автомобиль в Москве' : `${brand} ${model || ''} ${generation || ''}`}
                </h1>
                <InStockList />
                <CarSelection />
                <CarsFilter />
            </div>
        </div>
    );
};