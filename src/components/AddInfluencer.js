import React from 'react';

const AddInfluencer = () => {
  return (
    <div class="w-full overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
      <div class="bg-white py-6 px-10 sm:max-w-xl w-full ">
        <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
          Add Influencer
        </div>
        <div>
          <div>
            <input type="text" class="focus:outline-none focus:border-b-4 font-medium border-b w-full pb-2 border-stone-700 placeholder-gray-500" placeholder="Name " />
          </div>
            <div>
            <div>
              <input type="text" class="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 my-8" placeholder="Facebook link here"/>
            </div>
            <div>
              <input type="number" class="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Facebook followers" />
            </div>
            </div>
          <div>
            <div>
              <input type="text" class="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Twitter link here" />
            </div>
            <div>
              <input type="number" class="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Twitter followers" />
            </div>
          </div>
          <div>
            <div>
              <input type="phone" class="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Instagram link here" />
            </div>
            <div>
              <input type="number" class="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Instagram followers" />
            </div>
          </div>
          <div class="flex justify-center my-6">
            <button class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInfluencer;