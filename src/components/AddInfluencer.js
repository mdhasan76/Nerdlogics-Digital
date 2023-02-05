import React from 'react';
import { toast } from 'react-hot-toast';

const AddInfluencer = () => {

  const addInfluencer = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const facebook = form.facebook.value;
    const facebookFollower = form.facebookFollower.value;
    const twitter = form.twitter.value;
    const twitterFollower = form.twitterFollower.value;
    const instagram = form.instagram.value;
    const instagramFollower = form.instagramFollower.value;
    const influencer = {
      name, facebook, facebookFollower, twitter, twitterFollower, instagram, instagramFollower
    }

    fetch('http://localhost:5000/addinfluencer', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(influencer)
    })
      .then(res => res.json())
      .then(data => {
        if(data.acknowledged){
          toast.success("Influencer added successful");
          form.reset();
        }
      })
  }

  return (
    <div className="w-full overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
      <div className="bg-white py-6 px-10 sm:max-w-xl w-full ">
        <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
          Add Influencer
        </div>
        <form onSubmit={ addInfluencer}>
          <div>
            <input type="text" name="name" className="focus:outline-none focus:border-b-4 font-medium border-b w-full pb-2 border-stone-700 placeholder-gray-500" placeholder="Name " />
          </div>
          <div>
            <div>
              <input type="text" name="facebook" className="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 my-8" placeholder="Facebook link here" />
            </div>
            <div>
              <input type="number" name="facebookFollower" className="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Facebook followers" />
            </div>
          </div>
          <div>
            <div>
              <input type="text" name="twitter" className="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Twitter link here" />
            </div>
            <div>
              <input type="number" name="twitterFollower" className="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Twitter followers" />
            </div>
          </div>
          <div>
            <div>
              <input type="text" name="instagram" className="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Instagram link here" />
            </div>
            <div>
              <input type="number" name="instagramFollower" className="focus:outline-none focus:border-b-4 border-b w-full pb-2 border-stone-700 placeholder-gray-500 mb-8" placeholder="Instagram followers" />
            </div>
          </div>
          <div className="flex justify-center my-6">
            <button className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddInfluencer;