import React from 'react';

const InfluencerDetails = () => {
    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="influencer-details" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-0">
                    <img className='w-full' alt="pattern Img" src="https://raw.githubusercontent.com/zathio/frontendmentor-challenges/1b3ae26ac7be79133886db0f9142826c4d265a21/profile-card-component/img/bg-pattern-card.svg" />
                    <div className='p-5 relative'>
                        <div>
                            <div className='-mt-24'>
                                <img className='h-36 w-36 rounded-full  mx-auto ring-4' alt="pattern Img" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                            </div>
                        </div>
                        <p className='text-2xl font-semibold text-center p-4'>Hasan Miah</p>
                        <hr className='mb-10'></hr>
                        <div className='flex justify-around'>
                            <div className='text-center'>
                                <a href="/" className='hover:border-b-2 hover:border-stone-600'>FaceBook</a>
                                <p className='font-bold text-2xl py-1' >200k</p>
                                <p className='tracking-widest text-xs'>Followers</p>
                            </div>
                            <div className='text-center'>
                                <a href="/" className='hover:border-b-2 hover:border-stone-600'>Instagram</a>
                                <p className='font-bold text-2xl py-1' >30k</p>
                                <p className='tracking-widest text-xs'>Followers</p>
                            </div>
                            <div className='text-center'>
                                <a href="/" className='hover:border-b-2 hover:border-stone-600'>LinkedInd</a>
                                <p className='font-bold text-2xl py-1' >50k</p>
                                <p className='tracking-widest text-xs'>Followers</p>
                            </div>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="influencer-details" className="btn">Ok</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfluencerDetails;