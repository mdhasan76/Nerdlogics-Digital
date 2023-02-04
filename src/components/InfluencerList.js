import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BiDetail } from 'react-icons/bi'

const InfluencerList = () => {



    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr className=''>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>

                            <div className='flex items-center'>
                                <label htmlFor="influencer-details" className='inline-block text-2xl bg-slate-200 rounded-full p-3 mr-2'><BiDetail /></label>

                                <label htmlFor="edit-influencer" className='inline-block text-2xl bg-slate-200 rounded-full p-3 mr-2'>
                                <AiFillEdit />
                                </label>
                                <button className='text-2xl bg-red-200 text-red-600 rounded-full p-3'><AiFillDelete /></button>
                            </div>

                        </td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>
                            <button className='text-2xl bg-slate-200 rounded-full p-3 mr-2'><BiDetail /></button>
                            <button className='text-2xl bg-slate-200 rounded-full p-3 mr-2'><AiFillEdit /></button>
                            <button className='text-2xl bg-red-200 text-red-600 rounded-full p-3'><AiFillDelete /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InfluencerList;