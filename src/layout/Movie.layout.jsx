import React from 'react'

const MovieLayoutHoc = (component) => ({ ...props }) => {
    return (
        <div>
            <component {...props} />
        </div>
    )
}

export default MovieLayoutHoc