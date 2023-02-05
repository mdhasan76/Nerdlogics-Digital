import React from 'react';

const EditInfluencer = () => {
    return (
        <div className="w-full overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
          <div className="bg-white py-6 px-10 sm:max-w-xl w-full ">
            <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
              Update Influencer
            </div>
            <div>
              <div>
                <input type="text" className="focus:outline-none focus:border-b-4 font-medium border-b w-full pb-2 border-stone-700 placeholder-gray-500" placeholder="Name " defaultValue={"Hasan Mia"} />
              </div>
                <div>
                <div>
                  <input type="text" className="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 my-8" placeholder="Facebook link here" defaultValue={"Link"} />
                </div>
                <div>
                  <input type="number" className="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Facebook followers" defaultValue={20}  />
                </div>
                </div>
              <div>
                <div>
                  <input type="text" className="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Twitter link here" defaultValue={"Link"}  />
                </div>
                <div>
                  <input type="number" className="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Twitter followers" defaultValue={20}/>
                </div>
              </div>
              <div>
                <div>
                  <input type="phone" className="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Instagram link here" defaultValue={"Link"}  />
                </div>
                <div>
                  <input type="number" className="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Instagram followers" defaultValue={20}  />
                </div>
              </div>
              <div className="flex justify-center my-6">
                <button className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      );
};

export default EditInfluencer;