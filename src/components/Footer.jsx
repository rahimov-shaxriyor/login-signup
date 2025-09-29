import { FaInstagramSquare } from "react-icons/fa"; 
import { FaTwitterSquare } from "react-icons/fa"; 
import { FaFacebookSquare } from "react-icons/fa"; 
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='min-h-[4.0625rem] bg-gray-800 flex text-white'>
        <div className='container flex justify-between items-center'>
            <Link to={"/"} className='font-semibold text-[1.25rem]'>Brand logo</Link>
            <div className="text-[1.5625rem] flex gap-[.625rem]">
                <Link to={"/"}><FaInstagramSquare /></Link>
                <Link to={"/"}><FaFacebookSquare /></Link>
                <Link to={"/"}><FaTwitterSquare /></Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer