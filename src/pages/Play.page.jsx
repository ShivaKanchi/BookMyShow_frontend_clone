import React from 'react'
import DefaultLayoutHoc from '../layout/Default.layout'
//components
import Poster from "../components/Poster/Poster.Component"
import PlayFilter from '../components/PlayFilter/PlayFilter.Component'

const PlayPage = () => {

    return (
        <>
            <div className='container mx-auto px-4 my-10'>
                <div className='w-full flex flex-col lg:flex-row  gap-4'>
                    <div className='lg:w-1/4 p-4 bg-white rounded'>
                        <h2 className='text-2xl font-bold mb-4'>Filters</h2>
                        <div className='bo'>
                            <PlayFilter
                                title="Date"
                                tags={["Today", "Tommorrow", "This Weeknd"]}
                            />
                            <PlayFilter
                                title="Language"
                                tags={["English", "Tulu", "Telugu"]}
                            />
                        </div>
                        <div className='flex flex-col bottom-0 pt-9'>
                            <h2 className='text-2xl font-bold mb-4'>Closest event near You</h2>
                            <div >
                                <iframe
                                    title='GoogleMap'
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30166.985754601166!2d72.866899!3d19.069311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x645838d411062c7!2zMTnCsDA0JzA5LjUiTiA3MsKwNTInMDAuOCJF!5e0!3m2!1sen!2sus!4v1668469094677!5m2!1sen!2sus"
                                    width="full"
                                    height="200"
                                    style={{ border: "0" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-3/4 p-4 ng-white rounded'>
                        <h2 className='text-2xl font-bold mb-4'>
                            Plays in Mumbai
                        </h2>
                        <div className='flex flex-wrap'>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-start">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00337555-zgahlnqtbq-portrait.jpg"
                                    title="Sunburn ft. DJ SNAKE"
                                /></div>

                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343225-dabsuuflnm-portrait.jpg"
                                    title="Zomato Feeding Concert"
                                /></div>

                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAxNiBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00332998-kdabehrvqj-portrait.jpg"
                                    title="Rambo Circus(Mumbai)"
                                /></div>

                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA5IERlYw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00344195-sbextxzfbn-portrait.jpg"
                                    title="Saregama Live "
                                /></div>

                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00344203-agphzrdxph-portrait.jpg"
                                    title="Rahe Na Rahe Hum"
                                /> </div>

                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343102-vggqvsuukh-portrait.jpg"
                                    title="Open Mic Music"
                                /></div>

                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00344052-gsbrsltzpe-portrait.jpg"
                                    title="Festival of Festive Music"
                                /></div>

                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOSBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343721-hehtsuvmpn-portrait.jpg"
                                    title="MUSIC WEEKEND"
                                /> </div>



                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DefaultLayoutHoc(PlayPage);