import React from 'react'
import Logo from "..//images/logo.png"
import { BsFillTelephoneFill, BsInstagram, BsSearch } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { PiTwitterLogoFill } from "react-icons/pi";
import { Navbar, NavbarItem } from '@nextui-org/react';
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';



const Header = () => {
    return (
        <div className='h-[8.9rem] flex '>
            <div className='bg-white w-[17.6rem] h-[8.9rem] border-x-2 border-y-2 flex items-center justify-center' >
                <img src={Logo} alt='logo' width={138} height={38} className='ml-9' />

            </div>

            <div>

                <div className='flex bg-[#2C2734] text-white h-10 w-[67.8rem] items-center'>
                    <div className='flex items-center'>
                        <BsFillTelephoneFill className="text-[#FF6C1E] hover:text-[#FFFFFF] cursor-pointer  text-[0.7rem] ml-[2.5rem] " />
                        <p className="text-[#FFFFFF] hover:text-[#FF6C1E] cursor-pointer text-sm ml-[0.5rem]">92 666 888 0000</p>
                    </div>
                    <div className='flex items-center'>
                        <MdEmail className="text-[#FF6C1E] hover:text-[#FFFFFF] cursor-pointer  text-[0.9rem] ml-[2.5rem] " />
                        <p className="text-[#FFFFFF] hover:text-[#FF6C1E] cursor-pointer text-sm ml-[0.5rem]">needhelp@company.com</p>
                    </div>
                    <div className='flex items-center'>
                        <FaSquareFacebook className="text-[#FFFFFF] hover:text-[#FF6C1E] cursor-pointer  text-[0.9rem] ml-[30rem] " />
                    </div>
                    <div className='flex items-center'>
                        <PiTwitterLogoFill className="text-[#FFFFFF] hover:text-[#FF6C1E] cursor-pointer  text-[0.9rem] ml-[2.5rem] " />
                    </div>
                    <div className='flex items-center'>
                        <BsInstagram className="text-[#FFFFFF] hover:text-[#FF6C1E] cursor-pointer  text-[0.9rem] ml-[2.5rem] " />
                    </div>

                </div>
                <div className='flex  w-[44rem] '>
                    <div className='gap-[2rem] flex'>
                        <div className=' font-sans font-semibold mt-5 ml-[6rem]  w-[7rem] '>
                            <Navbar>
                                <NavbarItem className='ml-[-1.5rem] text-xl text-[#7b7573] hover:text-[#000000] cursor-pointer'>
                                    Home
                                </NavbarItem>
                            </Navbar>
                        </div>
                        <div className='font-sans font-semibold mt-5   '>
                            <Navbar>
                                <NavbarItem className='text-xl text-[#7b7573] hover:text-[#000000] cursor-pointer'>
                                    About
                                </NavbarItem>
                            </Navbar>
                        </div>
                        <div className='font-sans font-semibold mt-5   '>
                            <Navbar>
                                <NavbarItem className='text-xl text-[#7b7573] hover:text-[#000000] cursor-pointer'>
                                    Donations
                                </NavbarItem>
                            </Navbar>
                        </div>
                        <div className='font-sans font-semibold mt-5  border-r-2 w-[11rem]  '>
                            <Navbar >
                                <NavbarItem className=' text-xl text-[#7b7573] hover:text-[#000000] cursor-pointer'>
                                    Contact
                                </NavbarItem>
                            </Navbar>
                        </div>


                    </div>
                    <div className="flex items-center justify-center  w-[30rem] gap-3">
                        <BsSearch className=" transition-colors duration-500 ease-in-out text-[1.5rem] hover:text-orange-600 cursor-pointer ml-12 mt-5" />
                        <AiOutlineShoppingCart className=" transition-colors duration-500 ease-in-out text-[2rem] hover:text-orange-600 cursor-pointer ml-5 mt-5" />
                        <div className="transition-colors duration-500 ease-in-out w-[9rem] bg-orange-500 h-[3rem] ml-5 mt-5 flex rounded-full cursor-pointer hover:bg-black ">
                            <AiFillHeart className=" transition-colors duration-500 ease-in-out text-[1rem] text-[#FFFFFF] ml-9 mt-[0.9rem]" />
                            <p className='text-[#FFFFFF] font-bold font-sans mt-[0.6rem] ml-1'>Donate</p>
                        </div>
                    </div>



                </div>

            </div>
        </div>



    )
}
export default Header
