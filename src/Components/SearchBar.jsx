import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar({ setQuery }) {
    return (
        <div className="relative w-fit">

            <div className="flex items-center">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute left-4 text-gray-500"
                />
                <input
                    type="text"
                    placeholder="Search by name, location"
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    className="pl-12 pr-4 bg-CardBlue/60 placeholder:text-gray-500 w-full h-[50px] 
                    rounded-3xl border-[1px] border-CardBlue hover:border-LightBlue focus:border-BgBlue 
                    focus:outline-none text-white"
                />
            </div>
        </div>
    );
}
