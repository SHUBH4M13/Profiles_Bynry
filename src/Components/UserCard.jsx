import React from 'react'
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot , faXmark } from '@fortawesome/free-solid-svg-icons';


export default function UserCard({ photo, name, desc, location }) {

    const map_api = `AIzaSyCj-YMGBL8x0f2jtXsAbClAB0FvrwttkbU`
    const [view, setView] = useState(false);

    const openmaps = () => {
        setView(true);
    }

    const closemaps = () => {
        setView(false);
    }


    const Navigate = useNavigate();

    function GotoProfile() {
        Navigate("/profile:")
    }


    return (
        <div
            className=' w-[300px] h-[390px] bg-CardBlue px-10 py-5 flex flex-col rounded-xl border-white/30 border-2 hover:border-LightBlue duration-200  '>

            <div
            onClick={GotoProfile} 
            className=' flex justify-center'>
                <img className='w-[100px] h-[100px] rounded-full '
                    src={photo} alt="" />
            </div>

            <div className=' py-5 flex justify-center '>
                <p className='  text-white text-center font-Helvetica '>{name}</p>
            </div>

            <div className=' flex justify-center '>
                <p className='  text-white/70 text-center font-Helvetica  '>{desc}</p>
            </div>

            <div className='flex justify-center  py-5 items-center gap-2'>
                <FontAwesomeIcon icon={faLocationDot} className='text-LightBlue' />
                <p className='font-Helvetica text-white'>{location}</p>
            </div>

            

            <div
                onClick={openmaps}
                className='flex justify-center items-center gap-5'>

                <button className='bg-LightBlue text-white p-3 font-Helvetica rounded-xl cursor-pointer hover:bg-[#1d4fd8d7] duration-200'
                >
                    Summary
                </button>
            </div>

            {view && <APIProvider apiKey={map_api}>
                <div className=' z-10 bg-BgBlue w-[600px] flex justify-evenly items-center'>

                    <div 
                    onClick={closemaps}
                    className=' flex justify-start items-start cursor-pointer'>
                    <FontAwesomeIcon 
                    className=' text-white'
                    icon={faXmark} />
                    </div>
                    <div className=' w-[300px] h-[300px] bg-CardBlue rounded-xl border-white/30 hover:border-LightBlue border-2 duration-300 flex items-center justify-center'>
                        <Map className="rounded-lg w-full h-full"
                            defaultZoom={13} defaultCenter={{ lat: 18.51639455908052, lng: 73.92742612461777 }} />
                        <Marker position={{ lat: 18.5164, lng: 73.9274 }} />
                    </div>
                </div>

            </APIProvider>}

        </div>
    )
}


