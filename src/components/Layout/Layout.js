import React from 'react';
import Header from '../UIElements/Header/Header';

const Layout=({ children })=> {

    return (
        <div>
            <Header />
            {children}
            {/* <footer>React</footer> */}
        </div>
    );
}

export default Layout     
