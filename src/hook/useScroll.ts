import React from 'react';
import type { UseScroll } from '../interfaces/hook.interface';

export const useScroll = (): UseScroll => {
    const scrollPosition = React.useRef(0);

    const scrollOff = () => {
        scrollPosition.current = window.scrollY;
        document.body.style.cssText = `
        overflow: hidden;
        padding-right: ${window.innerWidth - document.body.offsetWidth}px;
        position: fixed;
        top: -${scrollPosition.current}px;
        left: 0;
        height: 100vh;
        width: 100vw;
      `;
        document.documentElement.style.scrollBehavior = 'unset';
    };

    const scrollOn = () => {
        document.body.style.cssText = '';
        window.scrollTo({
            top: scrollPosition.current,
        });
        document.documentElement.style.scrollBehavior = '';
    };

    return { scrollOff, scrollOn };
};
