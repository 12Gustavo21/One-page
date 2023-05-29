import React, { useState, useEffect } from 'react';

// Styles
import * as S from './style';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <S.ButtonBox>
            <button
                className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
                title='Scroll to top'
            >
                <i class="fa-solid fa-angles-up"></i>
            </button>
        </S.ButtonBox>
    );
};

export default ScrollToTopButton;