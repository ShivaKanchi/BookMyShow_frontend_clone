import React, { useContext } from 'react'
import { MovieContext } from '../../Context/Movie.Context'
import MovieInfo from './MovieInfo.Component';
const MovieHero = () => {
    const { movie } = useContext(MovieContext);
    const genres = movie.genres?.map(({ name }) => name).join(", ");
    const { rentMovie, buyMovie } = useContext(MovieContext);

    return (
        <>
            <div>
                {/*mobile screens*/}
                <div className='lg:hidden w-full'>
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt='coverImage'
                        className='m-4 rounded'
                        style={{ width: "calc(100%-2rem)" }}
                    />
                </div>
                <div className='flex flex-col gap-3 lg:hidden'>
                    <div className='flex flex-col-reverse gap-3 px-4 my-3'>
                        <div className=' text-black flex flex-col gap-2 md:px-4'>
                            <h4>4k rating</h4>
                            <h4>English,Tulu,Telugu</h4>
                            <h4>
                                {movie.runtime}min | {genres}
                            </h4>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 md:px-4 md:w-screen text-xl px-4'>
                        <button className='bg-red-500 w-full py-3 text-white font-semibold rounded-lg' onClick={rentMovie}>
                            Rent 149₹
                        </button>
                        <button className='bg-red-600 w-full py-3 text-white font-semibold rounded-lg' onClick={buyMovie}>
                            Buy 599₹
                        </button>
                    </div>
                </div>

                {/*Large Screens*/}
                <div
                    className='relative hidden w-full lg:block'
                    style={{ height: "30rem" }}
                >
                    <div
                        className='absolute z-10 w-full h-full '
                        style={{
                            backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 14.95%, rgba(34, 34, 34) 30.3%, rgba(34, 34, 34, 0.90) 38.3%, rgba(34, 34, 34, 0.60) 58.3%, rgba(34, 34, 34, 0.04) 100%)"
                        }}
                    />
                    <div className='absolute z-30 left-24 top-10 flex items-center gap-10'>
                        <div className='w-64 h-96'>
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt='coverImage'
                                className='w-full h-full rounded-lg'
                            />
                        </div>
                        <div>
                            <MovieInfo movie={movie} />
                        </div>
                    </div>
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt='MovieBackground'
                        className='w-full h-full object-cover object-center'
                    />
                </div>
            </div>
        </>
    )
}

export default MovieHero