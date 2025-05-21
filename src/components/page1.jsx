import React from 'react';

const Page1 = () => {
  return (
    <div className="p-10">
     \
      <div className="text-sm text-gray-500 mb-4">
        Home &gt; Rehomed &gt; <span className="text-black font-semibold">Start</span>
      </div>

      
      <div className="flex items-center justify-center space-x-6 mb-10">
        {[1, 2, 3, 4, 5, 6].map((step) => (
          <div key={step} className="flex flex-col items-center">
            {step === 1 && (
              <img
                src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                alt="Dog Icon"
                className="w-6 h-6 mb-1"
              />
            )}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-400 ${
                step === 1 ? 'bg-gray-100' : ''
              }`}
            >
              {step}
            </div>
            {step < 6 && <div className="w-12 border-t border-dotted border-gray-400 mt-1"></div>}
          </div>
        ))}
      </div>

      
      <div className="bg-white border rounded-lg p-8 max-w-4xl mx-auto shadow-md">
        <h2 className="text-lg font-semibold mb-6">Owner Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter Here"
              className="w-full mt-1 border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              placeholder="Enter Here"
              className="w-full mt-1 border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter Here"
              className="w-full mt-1 border rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              placeholder="Enter Here"
              className="w-full mt-1 border rounded-md p-2"
            />
          </div>
        </div>

        
        <div className="mt-6">
          <label className="flex items-start space-x-2 text-sm">
            <input type="checkbox" className="mt-1" />
            <span>
              I have read and agree to the Terms and <a className="text-blue-600 underline cursor-pointer">Privacy Policy</a>?
            </span>
          </label>

          <ul className="list-disc ml-6 mt-4 text-sm text-gray-600 space-y-1">
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
          </ul>
        </div>

        
        <div className="mt-6 flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="border px-4 py-2 rounded-full">{'<'}</button>
            <button className="border px-4 py-2 rounded-full">{'>'}</button>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
            Continue &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
