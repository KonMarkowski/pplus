import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ setActiveLink, activeLink, children }) => {
    return (
        <>
            <Header activeLink={activeLink} setActiveLink={setActiveLink} />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
