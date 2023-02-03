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
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <ImProfile class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                            <span class="ml-3">Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <AiOutlineUser class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                            <span class="flex-1 ml-3 whitespace-nowrap">User</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addinfoencer"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <AiOutlineUserAdd class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                            <span class="flex-1 ml-3 whitespace-nowrap">Add Influencer</span>
                        </Link>
                    </li>
                </ul>
       </>
    );
};

export default DrawerMenu;