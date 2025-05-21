import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'; 

const pets = [
  {
    name: 'Rottweiler',
    age: '2 Years 8 Months',
    gender: 'Female',
    location: 'Ameerpet, Hyderabad',
    image: 'https://placedog.net/400?id=1'
  },
  {
    name: 'Rottweiler',
    age: '2 Years 8 Months',
    gender: 'Female',
    location: 'Ameerpet, Hyderabad',
    image: 'https://placedog.net/400?id=2'
  },
  {
    name: 'Rottweiler',
    age: '2 Years 8 Months',
    gender: 'Female',
    location: 'Ameerpet, Hyderabad',
    image: 'https://placedog.net/400?id=3'
  }
];

const matchedProfiles = [
  { name: 'Ranjith Soma', pet: 'Simba', location: 'Yellareddy road Ameerpet, Hyderabad' },
  { name: 'Ranjith Soma', pet: 'Snoopy', location: 'Yellareddy road Ameerpet, Hyderabad' },
  { name: 'Ranjith Soma', pet: 'Miro', location: 'Yellareddy road Ameerpet, Hyderabad' },
  { name: 'Ranjith Soma', pet: 'Venky', location: 'Yellareddy road Ameerpet, Hyderabad' }
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="p-4 sm:p-8 max-w-7xl mx-auto">
        
        
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
          <button
            className="px-6 py-2 bg-blue-100 text-blue-700 rounded-full w-full sm:w-auto"
            onClick={() => navigate('/adopt')} 
          >
            Adopt
          </button>
          <button className="px-6 py-2 bg-green-100 text-green-700 rounded-full w-full sm:w-auto">
            Rehomed
          </button>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {pets.map((pet, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 flex flex-col">
              <img src={pet.image} alt={pet.name} className="rounded-md mb-3 object-cover h-48 w-full" />
              <h2 className="font-semibold text-lg">{pet.name}</h2>
              <p className="text-sm text-gray-600">{pet.age}, {pet.gender}</p>
              <p className="text-sm text-gray-500">{pet.location} (75 Miles)</p>
            </div>
          ))}
        </div>

        
        <div className="bg-white rounded-lg shadow p-6 overflow-x-auto">
          <h3 className="text-xl font-semibold mb-4">Matched Profiles</h3>
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="text-sm text-gray-600">
                <th className="pb-2">Full Name</th>
                <th className="pb-2">Pet Name</th>
                <th className="pb-2">Location</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {matchedProfiles.map((profile, index) => (
                <tr key={index} className="border-t border-gray-200 text-sm">
                  <td className="py-3 flex items-center space-x-2">
                    <img src="https://i.pravatar.cc/30?img=1" alt="profile" className="rounded-full w-6 h-6" />
                    <span>{profile.name}</span>
                  </td>
                  <td className="py-3">{profile.pet}</td>
                  <td className="py-3">{profile.location}</td>
                  <td className="py-3">
                    <div className="flex items-center space-x-2">
                      <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs">80%</span>
                      <button className="bg-orange-500 text-white px-3 py-1 text-xs rounded-md hover:bg-orange-600">
                        Message
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Hero;
