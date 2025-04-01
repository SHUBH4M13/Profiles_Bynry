import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import UserCard from '../Components/UserCard';
import ProfileData from '../public/ProfileData';

function HomePage() {
    const [query, setQuery] = useState('');

    return (
        <div className="bg-[#111827] min-h-screen flex flex-col gap-5 ">
            <div className=" py-15 flex justify-center ">
                <SearchBar setQuery={setQuery} />
            </div>

            <div className=" flex justify-center items-center">
                <div className="grid grid-cols-3 gap-15 justify-center ">
                    {ProfileData.filter((user) =>
                        user.name.toLowerCase().includes(query) || user.location.toLowerCase().includes(query) 
                    )
                    .map((user, index) => (
                        <UserCard
                            key={index}
                            photo={user.photo}
                            name={user.name}
                            desc={user.desc}
                            location={user.location}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
