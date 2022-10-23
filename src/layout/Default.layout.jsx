import React from 'react'
import Navbar from '../components/Navbar/navbar.Component'

const DefaultLayoutHoc = (component) => ({ ...props }) => {
    return (
        <div>
            <Navbar />
            <component {...props} />
            <div>Footer</div>
        </div>
    );
};

export default DefaultLayoutHoc;