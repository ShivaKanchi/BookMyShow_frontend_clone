import React from 'react'
import { AiFillYoutube, AiFillSkype, AiFillTwitterSquare } from "react-icons/ai";
const Footer = () => {
    return (
        <>
            <div className="footer items-center pt-4 bg-neutral text-neutral-content bg-darkBackground-700">
                <div className="items-center grid-flow-col">
                    <p className='text-center text-white'>Copywrite © 2022 - All right not reserved</p>
                </div>
                <div className="p-2 flex flex-row gap-5 items-center justify-center ">

                    <div className='flex flex-col items-center justify-center'>
                        <AiFillYoutube className='w-8 h-8 cursor-pointer' />
                        <h2 className='text-gray-400 align-middle'>YouTube</h2>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <AiFillTwitterSquare className='w-8 h-8 cursor-pointer' />
                        <h2 className='text-gray-400 align-middle'>Twitter</h2>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <AiFillSkype className='w-8 h-8 cursor-pointer' />
                        <h2 className='text-gray-400 align-middle'>Skype</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer