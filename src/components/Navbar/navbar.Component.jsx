import React from 'react'
import { BiChevronDown, BiMenu, BiSearch } from 'react-icons/bi'

function NavSm() {
    return <>
        <div className='text-white flex items-center justify-between'>
            <div>
                <h3 className='text-xl font-bold '>It All starts here</h3>
                <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
                    Mumbai <BiChevronDown />
                </span>
            </div>
            <div className='w-8 h-8'>
                <BiSearch className='w-full h-full' />
            </div>
        </div>
    </>;
}
function NavMd() {
    return <>
        <div className='w-full flex items-center gap-3 bg-whitepx-3 py-1 rounded-md'>
            <BiSearch />
            <input type='search' className='w-full bg-transparent border-none focus:outline-none' />
        </div>
    </>;
}
function NavLg() {
    return <>
        <div className='container flex mx-auto px-4 items-center justify-between'>
            <div className='flex items-center w-1/2 gap-3'>
                <div className='w-10 h-10'>
                    <img
                        src='https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png'
                        alt='logo' className='w-full h-full'
                    />
                </div>
            </div>
        </div>
    </>;
}

//main component
const Navbar = () => {
    return (
        <div>Navbar</div>
    )
}

export default Navbar;