import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser,AiOutlineUserAdd } from 'react-icons/ai';
import {ImProfile} from 'react-icons/im'

const DrawerMenu = () => {
    return (
       <>
       <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <li>
                        <Link to="/"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <ImProfile className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                            <span className="ml-3">Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <AiOutlineUser className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span className="flex-1 ml-3 whitespace-nowrap">User</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addinfoencer"
                            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <AiOutlineUserAdd className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                            <span className="flex-1 ml-3 whitespace-nowrap">Add Influencer</span>
                        </Link>
                    </li>
                </ul>
       </>
    );
};

export default DrawerMenu;