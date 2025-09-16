import React from 'react'
import { FaCar, FaHeart, FaShoppingCart} from 'react-icons/fa'
import { MdAccountCircle } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";


export const Header = () => {
  return (
    <div >
     <div className="flex items-center gap-6 text-gray-700 font-medium ">
          <a href="#" className="hover:text-blue-700 flex items-center font-bold gap-1">
           <FaCar /> MY GARAGE
          </a>
          <a href="#" className="hover:text-blue-700 flex items-center gap-1">
            <MdAccountCircle />MY ACCOUNT
          </a>
          <button className="hover:text-blue-700"><FaHeart /></button>
          <button className="hover:text-blue-700">< FaShoppingCart /></button>
          <button className="hover:text-blue-700 text-2xl"><IoReorderThreeOutline /></button>
        </div>
        </div>
  )
}
