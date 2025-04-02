import React from 'react'
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


export default function UserCard({ photo, name, desc, location }) {


    const Navigate = useNavigate();

    function GotoProfile() {
        Navigate("/profile:")
    }

    return (
        <div className=' w-[300px] h-[390px] bg-CardBlue px-10 py-5 flex flex-col rounded-xl border-white/30 border-2 hover:border-LightBlue duration-200 '>

            <div className=' flex justify-center'>
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

            <div className='flex flex-col justify-center items-center gap-5'>
                <button className='bg-LightBlue text-white p-3 font-Helvetica rounded-xl cursor-pointer hover:bg-[#1d4fd8d7] duration-200' 
                onClick={GotoProfile}
                >
                    Summary
                </button>
            </div>



        </div>
    )
}


