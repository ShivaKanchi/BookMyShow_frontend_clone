import React, { useContext } from 'react'
import { BiChevronDown, BiMenu, BiSearch, BiShareAlt } from 'react-icons/bi'
import { MovieContext } from '../../Context/Movie.Context'
import { Link } from 'react-router-dom';

const MovieNavbarSm = () => {
    const { movie } = useContext(MovieContext);
    return (
        <>
            <div className='tex-gray-700 flex items-center justify-center'>
                <div>
                    <h3 className='text-xl font-bold'>
                        {movie.original_title}
                    </h3>
                </div>
                <div className='w-8 h-8'>
                    <BiShareAlt className='w-full h-full' />
                </div>
            </div>

        </>
    )
}

const MovieNavbarLg = () => {
    return (<>
        <div className='container flex mx-auto px-4 items-center justify-between'>
            <div className='flex items-center w-1/2 gap-3 '>
                <div className='w-8 h-8'>
                    <Link to='/' className='cursor-pointer' >
                        <img
                            src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png'
                            alt='logo' className='w-full h-full'
                        />
                    </Link>
                </div>
                <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
                    <BiSearch />
                    <input
                        type='search'
                        className='w-full bg-transparent border-none focus:outline-none'
                        placeholder='Search for movies, events, plays, sports and acitivties'
                    />
                </div>
            </div>
            <div className='flex items-center gaps-3'>
                <span className='text-gray-200 text-base flex items-center cursor-pointer hover:text-white'>
                    Mumbai Sub<BiChevronDown />
                </span>
                <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>
                    Sign in
                </button>
                <div className='w-8 h-8 text-white'>
                    <BiMenu className='w-full h-full' />
                </div>
            </div>
        </div>
    </>)
}

const MovieNavbar = () => {

    return (
        <>
            <nav className='bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4'>
                <div className='lg:hidden'>
                    {/* For mobile screens*/}
                    <MovieNavbarSm />
                </div>
                <div className='hidden w-full lg:flex'>
                    {/* For Large screens*/}
                    <MovieNavbarLg />
                </div>
            </nav>
        </>
    )
}

export default MovieNavbar;