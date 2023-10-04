import React from 'react'
import Logo from "..//images/footer-logo.png"
import { BiLogoTwitter } from 'react-icons/bi';
import { FaSquareFacebook } from 'react-icons/fa6';
import { BsDribbble, BsInstagram } from 'react-icons/bs';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <footer class="bg-[url('./images/site_footer_bg.jpg')] relative block bg-cover bg-no-repeat h-[27rem] ">
                <div className='flex  flex-wrap bg-[#2c2734f2] w-full h-[27rem] '>

                    <div className='   w-[18.75rem] h-[15.438rem] ml-[5rem] mt-[6rem]'>
                        <div >
                            <img src={Logo} alt='logo' width={138} height={38} className='' />
                            <p className='font-rubik text-[#BFB1BC]  mt-[2rem] leading-8'>Lorem ipsum dolor sit ame consect etur pisicing elit sed
                                do eiusmod tempor incididunt ut labore.</p>
                            <div className='flex  gap-3  pt-[1rem] mt-[0.5rem]'>
                                <div className='transition-colors duration-500 ease-in-out rounded-full w-[2.5rem] h-[2.5rem] bg-[#56B4E5] flex justify-center items-center  hover:bg-[#FF6D12] cursor-pointer'>
                                    <BiLogoTwitter className='text-white text-[1.2rem] ' />
                                </div>
                                <div className='transition-colors duration-500 ease-in-out  rounded-full w-[2.5rem] h-[2.5rem] bg-[#465FDD] flex justify-center items-center  hover:bg-[#FF6D12] cursor-pointer'>

                                    <FaSquareFacebook className='text-white text-[1rem] ' />
                                </div>
                                <div className='transition-colors duration-500 ease-in-out rounded-full  w-[2.5rem] h-[2.5rem] bg-[#D8423F] flex justify-center items-center  hover:bg-[#FF6D12] cursor-pointer'>

                                    <BsDribbble className='text-white text-[1rem] ' />
                                </div>
                                <div className='transition-colors duration-500 ease-in-out rounded-full  w-[2.5rem] h-[2.5rem] bg-[#5374A0] flex justify-center items-center hover:bg-[#FF6D12] cursor-pointer'>

                                    <BsInstagram className='text-white text-[1rem] ' />

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='  w-[16.875rem] h-[18.75rem] mt-[6rem] ml-7 flex'>

                        <p className='font-abril text-white text-[1.3rem] tracking-wide'>Explore</p>
                        <div className=' mt-[1.5rem] ml-[-5.1rem]'>
                            <ul className='font-rubik text-[#BFB1BC]  mt-[2.2rem]  '>
                                <li className='hover:text-[#FF6D12] cursor-pointer  transition-colors duration-200 ease-in-out '>Donate</li>
                                <li className='hover:text-[#FF6D12] cursor-pointer transition-colors duration-200 ease-in-out mt-3'>Campaigns</li>
                                <li className='hover:text-[#FF6D12] cursor-pointer transition-colors duration-200 ease-in-out mt-3'>Fundraise</li>
                                <li className='hover:text-[#FF6D12] cursor-pointer transition-colors duration-200 ease-in-out mt-3' >Volunteers</li>
                                <li className='hover:text-[#FF6D12] cursor-pointer transition-colors duration-200 ease-in-out mt-3' >Sponsers</li>
                            </ul>
                        </div>
                        <div className='mt-[1.5rem] ml-[5.9rem]'>
                            <ul className='font-rubik text-[#BFB1BC]  mt-[2.2rem]  '>
                                <li className='hover:text-[#FF6D12] cursor-pointer  transition-colors duration-200 ease-in-out '>Fundraising</li>
                                <li className='hover:text-[#FF6D12] cursor-pointer transition-colors duration-200 ease-in-out mt-3'>Contact</li>
                                <li className='hover:text-[#FF6D12] cursor-pointer transition-colors duration-200 ease-in-out mt-3'>Help</li>
                                <li className='hover:text-[#FF6D12] cursor-pointer transition-colors duration-200 ease-in-out mt-3' >Faqs</li>

                            </ul>
                        </div>

                    </div>
                    <div className='  w-[18.75rem] h-[15.438rem] mt-[6rem] ml-7'>

                        <p className='font-abril text-white text-[1.3rem] tracking-wide'>Contact</p>
                        <div className='flex  mt-[1.8rem] ml-[-2.5rem] '>
                            <FaPhoneSquareAlt className="text-[#FF6C1E] hover:text-[#FFFFFF] cursor-pointer  text-[1rem] ml-[2.5rem] " />
                            <p className=" font-rubik text-[#BFB1BC] hover:text-[#FF6C1E] cursor-pointer ml-[1rem] mt-[-0.3rem]">92 666 888 0000</p>

                        </div>
                        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-500 w-[17rem]"></hr>
                        <div className='flex  ml-[-2.5rem] mt-4'>
                            <MdEmail className="text-[#FF6C1E] hover:text-[#FFFFFF] cursor-pointer  text-[1.1rem] ml-[2.5rem] " />
                            <p className="font-rubik text-[#BFB1BC] hover:text-[#FF6C1E] cursor-pointer ml-[1rem] mt-[-0.3rem]">needhelp@company.com</p>
                        </div>
                        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-500 w-[17rem]"></hr>
                        <div className='flex  ml-[-2.5rem] mt-4'>
                            <FaLocationDot className="text-[#FF6C1E] hover:text-[#FFFFFF] cursor-pointer  text-[1.1rem] ml-[2.5rem] " />
                            <p className="font-rubik text-[#BFB1BC] hover:text-[#FF6C1E] cursor-pointer ml-[1rem] mt-[-0.3rem]">666 road, broklyn street new </p>

                        </div>

                        <div className='mt-2 ml-[1rem]'> <p className="font-rubik text-[#BFB1BC] hover:text-[#FF6C1E] cursor-pointer ml-[1rem] "> york 600</p></div>


                    </div>
                    <div className=' w-[18.75rem] h-[15.438rem] mt-[6rem] ml-7'>

                        <div >
                            <p className='font-abril text-white text-[1.3rem] tracking-wide'>Support</p>
                            <p className='font-rubik text-[#BFB1BC]  mt-[2rem] leading-8'>Lorem ipsum dolor sit ame consect etur pisicing elit sed
                                do eiusmod tempor incididunt ut labore.</p>

                            <div className="transition-colors duration-500 text-[#FFFFFF] ease-in-out w-[9rem] bg-orange-500 h-[3rem] mt-5 flex rounded-full cursor-pointer hover:text-[#FF6C12] hover:bg-white">
                                <AiFillHeart className="text-[1rem] ml-9 mt-[0.9rem]" />
                                <p className=' font-bold font-sans mt-[0.6rem] ml-1'>Donate</p>
                            </div>
                        </div>

                    </div>


                </div>
            </footer>
            <div className='bg-[#231f29] w-full h-[6rem] flex'>
            <div className='pl-[5.6rem] pt-[2.2rem]'>
                <p className='font-rubik text-[1rem] text-[#B5B1BC]'>© Copyright 2021 by Ishara Deshan</p>
            </div>
            <div className='pl-[40rem] pt-[2.2rem] flex'>
                <p className='font-rubik text-[1rem] text-[#B5B1BC] hover:text-[#FF6C1E] cursor-pointer'>Privace policy</p>
                <p className='font-rubik text-[1rem] text-[#B5B1BC] pl-[1rem]'>/</p>
                <p className='font-rubik text-[1rem] text-[#B5B1BC]  hover:text-[#FF6C1E] pl-[1rem]  cursor-pointer'>Terms of Condition</p>
            </div>
            </div>

        </div>
    )
}
export default Footer;
