import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { BsChevronCompactDown } from "react-icons/bs";
import { useState } from "react";
import logo from "../Assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setdropdownOpen] = useState(false);
    return (
        <nav className='flex justify-between items-center h-[68px] bg-navcolor text-black z-100'>
            <div className='hidden md:flex items-center px-[42px] gap-9'>
                <img src={logo} alt="logo" />
                <ul className='flex items-center gap-4 text-sm'>
                    <Link to={"/"}>
                        <li className='hover:text-navitem transition-all duration-100 cursor-pointer text-navitem'>Home</li>
                    </Link>
                    <Link to={"/about"}>
                        <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>About</li>

                    </Link>
                    <Link to={"/services"}>
                        <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Our Services</li>
                    </Link>
                    <li className='hover:text-navitem transition-all duration-100 cursor-pointer relative'>
                        <div className='flex gap-2 items-center' onClick={() => setdropdownOpen(!dropdownOpen)}>
                            Publication
                            <BsChevronCompactDown />
                        </div>

                        <div className={dropdownOpen ? 'flex flex-col gap-3 text-[#263238] transition-all duration-100 z-100  bg-[#F8F7FB] left-0 absolute -bottom-20 pr-10 pl-3  py-3 shadow-lg rounded-lg' :
                            'hidden flex-col gap-3  text-[#263238] transition-all duration-100'}>
                            <Link to={"/blogs"}>
                                <div className='hover:text-navitem transition-all duration-100 cursor-pointer'>Blogs</div>
                            </Link>
                            <Link to={"/books"}>
                                <div className='hover:text-navitem transition-all duration-100 cursor-pointer'>Books</div>
                            </Link>
                        </div>
                    </li>
                    <Link to={"/gallery"}>
                        <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Gallery</li>
                    </Link>
                    <Link to={"/contactus"}>
                        <li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Contact us</li>
                    </Link>
                </ul>
            </div>

            <div className='flex md:hidden justify-between w-full items-center relative px-[21px] gap-9 z-10  '>
                <img src={logo} alt="logo" />

                <div className="cursor-pointer" onClick={() => { setMenuOpen(!menuOpen) }}>
                    {
                        menuOpen ? <GrClose size={20} /> : <GiHamburgerMenu size={20} />
                    }
                </div>
                <ul className={menuOpen ? 'flex flex-col gap-4 text-sm absolute top-10 bg-[#F5F5F5] w-full left-0 p-[21px] shadow-lg' : 'hidden flex-col gap-4 text-sm absolute -bottom-80 bg-[#F5F5F5] w-full left-0 p-[21px] '}>
                    <Link to={"/"}><li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Home</li></Link>
                    <Link to={"/about"}><li className='hover:text-navitem transition-all duration-100 cursor-pointer'>About</li></Link>
                    <Link to={"/services"}><li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Our Services</li></Link>
                    <li className='hover:text-navitem transition-all duration-100 cursor-pointer '>
                        <div className='flex gap-2 items-center ' onClick={() => setdropdownOpen(!dropdownOpen)}>
                            Publication
                            <BsChevronCompactDown />
                        </div>


                        <div className={dropdownOpen ? 'flex flex-col gap-3 md:hidden text-[#263238] ml-6 mt-2  origin-top transition-all duration-100' :
                            'hidden flex-col gap-3 md:hidden text-[#263238] transition-all duration-100'}>
                            <Link to={"/blogs"}>
                                <div className='hover:text-navitem transition-all duration-100 cursor-pointer'>Blogs</div>
                            </Link>
                            <Link to={"/books"}>
                                <div className='hover:text-navitem transition-all duration-100 cursor-pointer'>Books</div>
                            </Link>
                        </div>
                    </li>
                    <Link to={"/gallery"}><li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Gallery</li></Link>
                    <Link to={"/contactus"}><li className='hover:text-navitem transition-all duration-100 cursor-pointer'>Contact us</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
