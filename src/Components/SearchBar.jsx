import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar({ setQuery }) {
    return (
        <div className="relative w-[475px]">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 size-5"
            />

            <input
                type="text"
                placeholder="Search By name, location"
                onChange={ (e) => setQuery(e.target.value.toLowerCase()) }
                className="pl-12 pr-4 bg-CardBlue/60 placeholder:text-gray-500 w-full h-[50px] rounded-3xl border-[1px] border-CardBlue 
                   hover:border-LightBlue focus:border-BgBlue focus:outline-none text-white"
            />
        </div>
    );
}
