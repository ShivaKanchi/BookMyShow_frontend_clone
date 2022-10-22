import React from 'react'
import Navbar from '../compnents/Navbar/navbar.Component'

const DefaultLayoutHoc = (component) => ({ ...props }) => {
    return (
        <div>
            <Navbar />
            <component {...props} />
        </div>
    )
}

export default DefaultLayoutHoc