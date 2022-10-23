import React from 'react'
import Navbar from '../components/Navbar/navbar.Component'

const DefaultLayoutHoc = (Component) => ({ ...props }) => {
    return (
        <div>
            <Navbar />
            <Component {...props} />
            <div>Footer</div>
        </div>
    );
};

export default DefaultLayoutHoc;