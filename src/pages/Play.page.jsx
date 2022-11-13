import React from 'react'
import DefaultLayoutHoc from '../layout/Default.layout'
//components
import Poster from "../components/Poster/Poster.Component"
import PlayFilter from '../components/PlayFilter/PlayFilter.Component'

const PlayPage = () => {

    return (<>
        <div className='container mx-auto px-4 my-10'>
            <div className='w-full lg:flex-row-reverse gap-4'>
                <div className='lg:w-3/4 p-4 ng-white rounded'>
                    <h2 className='text-2xl font-boold mb-4'>
                        Plays in Mumbai
                    </h2>
                    <div className='flex flex-wrap'>
                        <div className='w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center'>
                            <Poster
                                isPlay={true}
                                src="https://image.tmdb.org/t/p/original/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg"
                                subtitle="Blackadam"
                            /> <Poster
                                isPlay={true}
                                src="https://image.tmdb.org/t/p/original/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg"
                                subtitle="Blackadam"
                            /> <Poster
                                isPlay={true}
                                src="https://image.tmdb.org/t/p/original/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg"
                                subtitle="Blackadam"
                            />
                        </div>

                    </div>
                </div>
                <div className='lg:w-1/4 p-4 bg-white rounded'>
                    <h2 className='text-2xl font-bold mb-4'></h2>
                    <div className=''>
                        <PlayFilter
                            title=""
                            tags={["Today", "Tommorrow", "This Weeknd"]}
                        />
                        <PlayFilter
                            title=""
                            tags={["English", "Tulu", "Telugu"]}
                        />
                    </div>
                </div>
            </div>

        </div>

    </>)
}

export default DefaultLayoutHoc(PlayPage);