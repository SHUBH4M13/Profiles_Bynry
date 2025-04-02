import React from 'react';
import { APIProvider, Map , Marker } from '@vis.gl/react-google-maps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const map_api = `AIzaSyCj-YMGBL8x0f2jtXsAbClAB0FvrwttkbU`

export default function UserProfile() {
    return (
        <APIProvider apiKey={map_api} onLoad={() => console.log('Maps API has loaded.')}>
            <div className='bg-[#111827] min-h-screen flex items-center justify-center gap-10'>

                <div className='w-[450px] h-[600px] bg-CardBlue rounded-xl border-white/30 hover:border-LightBlue border-2 duration-300 flex flex-col'>
                    <div className='flex justify-center items-center h-[250px]'>
                        <img className='w-[150px] h-[150px] rounded-full'
                            src="https://avatars.githubusercontent.com/u/150832133?s=400&u=bf4fdef6661c0e56da9ebb954b729ec24da77767&v=4"
                            alt="User Avatar"
                        />
                    </div>

                    <p className='text-3xl text-white text-center font-Helvetica'>Shubham Karna</p>

                    <div className='flex justify-center py-5 px-6'>
                        <p className='text-white/70 text-center font-Helvetica'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magni at iste, explicabo harum ducimus voluptates autem quas laborum optio nam sapiente illo officiis perferendis iure quam aut libero hic!
                        </p>
                    </div>

                    <div className='flex justify-center py-5 items-center gap-2'>
                        <FontAwesomeIcon icon={faLocationDot} className='text-LightBlue' />
                        <p className='font-Helvetica text-white'>Magarpatta</p>
                    </div>
                </div>

                <div className='w-[450px] h-[600px] bg-CardBlue rounded-xl border-white/30 hover:border-LightBlue border-2 duration-300 flex items-center justify-center'>
                    <Map className = "rounded-lg w-full h-full"
                    defaultZoom={13} defaultCenter={{ lat: 18.51639455908052, lng: 73.92742612461777 }} />
                    <Marker position={{ lat: 18.5164, lng: 73.9274 }} /> 
                </div>
            </div>
        </APIProvider>
    );
}


