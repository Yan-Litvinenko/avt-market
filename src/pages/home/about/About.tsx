import React from 'react';
import styles from './About.module.scss';

export const About = (): React.JSX.Element => {
    return (
        <div className={styles.about}>
            <div className="container">
                <div className={styles.about__inner}>
                    <h1 className={styles.about__title}>Об автоцентре</h1>
                    <div className={styles.about__text}>
                        <p className={styles.about__description}>
                            Компания «YouAuto» на автомобильном рынке функционирует с 2013 года. Мы посвятили много
                            времени и усилий нашему профессионализму в продажах и обслуживании за эти годы. В автопарке
                            нашего автосалона мы собрали множество автомобилей с пробегом, которые прошли техническую и
                            юридическую экспертизу. Проверка каждого автомобиля начинается с этапа закупки и
                            продолжается во время предпродажной подготовки.
                        </p>
                        <p className={styles.about__description}>
                            В «YouAuto» представлены автомобили более 40 марок, что позволит Вам найти подходящий
                            вариант в стенах одного автосалона. Мы создали комфортные и доступные условия для своих
                            покупателей, позволяющие безопасно совершить покупку. Выгодные кредитные условия, подробная
                            информация об автомобилях, техническая гарантия и подарки - то, ради чего люди приходят в
                            наш автосалон.
                        </p>
                        <p className={styles.about__description}>Ждем Вас в «YouAuto»!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
