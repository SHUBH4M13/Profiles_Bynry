import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import UserCard from '../Components/UserCard';
import ProfileData from '../public/ProfileData';
import Company from '../Components/Company';

function HomePage() {
    const [query, setQuery] = useState('');
    const [company, setCompany] = useState('');

    return (
        <div className="bg-[#111827] min-h-screen flex flex-col gap-6 items-center py-10">

            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 p-5">
                <div>
                    <SearchBar setQuery={setQuery} />
                </div>
                
                <div>
                    <Company setCompany={setCompany} />
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {ProfileData.filter((user) => {
                        const checkQuery = user.name.toLowerCase().includes(query.toLowerCase()) || user.location.toLowerCase().includes(query.toLowerCase()) 
                        const companyMatch =  user.desc.toLowerCase().includes(company.toLowerCase());
                        const check = checkQuery && companyMatch ;
                        return ( checkQuery && companyMatch ) ;
                    }).map((user, index) => (
                        
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