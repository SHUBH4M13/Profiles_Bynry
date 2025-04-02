import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import UserCard from '../Components/UserCard';
import ProfileData from '../public/ProfileData';
import Company from '../Components/Company';

function AdminPanel() {
    const [query, setQuery] = useState('');
    const [company, setCompany] = useState('');
    const [profiles, setProfiles] = useState(ProfileData);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        desc: '',
        location: ''
    });

    const toggleEdit = (user) => {
        if (editingId === user.name) {
            setEditingId(null);
        } else {
            setEditingId(user.name);
            setFormData({
                name: user.name,
                desc: user.desc,
                location: user.location
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const saveEdit = (originalName) => {
        setProfiles(profiles.map(profile => 
            profile.name === originalName 
                ? { ...profile, ...formData, name: formData.name } 
                : profile
        ));
        setEditingId(null);
    };

    function deleteCard(name) {
        setProfiles(profiles.filter(profile => profile.name !== name));
    }

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col gap-6 items-center py-10">
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
                    {profiles.filter((user) => {
                        const checkQuery = user.name.toLowerCase().includes(query.toLowerCase()) || 
                                        user.location.toLowerCase().includes(query.toLowerCase());
                        const companyMatch = user.desc.toLowerCase().includes(company.toLowerCase());
                        return (checkQuery && companyMatch);
                    }).map((user, index) => (
                        <div key={user.name || index} className="relative">
                            <UserCard
                                photo={user.photo}
                                name={user.name}
                                desc={user.desc}
                                location={user.location}
                            />

                            <div className="py-3 flex gap-7">
                                <button
                                    onClick={() => toggleEdit(user)}
                                    className="cursor-pointer p-2 font-Helvetica text-white bg-green-600 rounded-xl">
                                    {editingId === user.name ? 'Cancel' : 'Edit'}
                                </button>
                                <button 
                                    onClick={() => deleteCard(user.name)} 
                                    className="cursor-pointer p-2 font-Helvetica text-white bg-red-600 rounded-xl">
                                    Delete
                                </button>
                            </div>

                            {editingId === user.name && ( 
                                <div className="absolute top-0 left-0 w-full p-4 bg-blue-800 border-2 border-white/30 rounded-lg z-10">
                                    <div className="flex flex-col gap-3">
                                        <input 
                                            name="name" 
                                            type="text" 
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="p-2 rounded bg-gray-700 text-white"
                                            placeholder="Name"
                                        />
                                        <input 
                                            name="desc" 
                                            type="text"
                                            value={formData.desc}
                                            onChange={handleInputChange}
                                            className="p-2 rounded bg-gray-700 text-white"
                                            placeholder="Description"
                                        />
                                        <input 
                                            name="location" 
                                            type="text"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            className="p-2 rounded bg-gray-700 text-white"
                                            placeholder="Location"
                                        />
                                        <div className="flex justify-end ">
                                            <button
                                                onClick={() => saveEdit(user.name)}
                                                className="cursor-pointer p-2 font-Helvetica text-white bg-green-600 rounded-xl">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;