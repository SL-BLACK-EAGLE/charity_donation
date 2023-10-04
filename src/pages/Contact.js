/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { BiLogoTwitter } from "react-icons/bi"
import { FaSquareFacebook } from "react-icons/fa6"
import { BsDribbble, BsInstagram } from "react-icons/bs"


const Contact = () => {
    return (
        <div>


            <section class="bg-[url('./images/page-header-bg.jpg')] w-full h-[23rem] bg-no-repeat bg-cover 
            before:content-['']  before:left-0 before:h-[23rem] before:w-[100%]
             before:bg-[#2C2734] before:opacity-[0.6] before:absolute">
                <div className=''>
                    <div className='relative block text-center pt-[7.2rem]'>

                        <h2 className='font-abril text-[#FFFFFF] text-[3.5rem] font-bold  tracking-wider'>Contact</h2>
                        <div className='flex  font-shadows text-[#FFFFFF] text-[1.5rem] pl-[38rem] gap-4'>
                            <p className=' transition-colors duration-500 ease-in-out hover:text-[#FF6C1E] cursor-pointer tracking-wider'>Home</p>
                            <p>/</p>
                            <p className=' transition-colors duration-500 ease-in-out hover:text-[#FF6C1E] cursor-pointer tracking-wider'>Contact</p>
                        </div>
                    </div>

                </div>
            </section>

            <section>

                <div >
                    <div className='pt-[7rem]  text-center '>
                        <p className='text-[#FF6C1E] text-[2rem] font-shadows'>Asked Questions</p>
                        <p className='text-[3rem] font-abril font-bold tracking-wider'>Contact With Us</p>
                    </div>
                    <div className='flex'>
                        <div className='ml-[6rem] mt-[3rem] border-2 rounded-l-lg w-[50rem] h-[39.938rem]'>

                            <div className='flex'>
                                <div className='ml-[4rem] mt-[5rem]'>
                                    <input placeholder='Your Name' className='w-[19.653rem] h-[4.188rem] bg-[#F7F4F2] rounded-full pl-10 pr-10 placeholder:text-black ' />
                                </div>
                                <div className='ml-[1.5rem] mt-[5rem]'>
                                    <input placeholder='Email Address' className='w-[19.653rem] h-[4.188rem] bg-[#F7F4F2] rounded-full pl-10 pr-10  placeholder:text-black ' />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='ml-[4rem] mt-[2rem]'>
                                    <input placeholder='Phone Number' className='w-[19.653rem] h-[4.188rem] bg-[#F7F4F2] rounded-full pl-10 pr-10  placeholder:text-black ' />
                                </div>
                                <div className='ml-[1.5rem] mt-[2rem]'>
                                    <input placeholder='Subject' className='w-[19.653rem] h-[4.188rem] bg-[#F7F4F2] rounded-full pl-10 pr-10 placeholder:text-black ' />
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='ml-[4rem] mt-[2rem] h-[12rem]'>
                                    <textarea placeholder='Write a message' className='w-[41.126rem] h-[12rem] bg-[#F7F4F2] rounded-3xl pl-10 pr-10 placeholder:text-black pt-5 pb-5' ></textarea>
                                </div>
                            </div>
                            <div className=" transition-colors duration-500 ease-in-out w-[14rem] bg-orange-500 h-[4.5rem] ml-[4rem] mt-[2rem] flex rounded-full cursor-pointer hover:bg-black ">
                                <p className='text-[#FFFFFF] font-bold font-sans flex items-center pl-14 text-lg'>Send Message</p>
                            </div>
                        </div>
                        <div className='mt-[3rem] w-[23.125rem] bg-[#F7F4F2] rounded-r-lg border-r-2 border-t-2 border-b-2'>
                            <div className='pt-[4rem]'>
                                <p className='font-rubik text-center font-semibold text-[1.1rem]'>Address</p>
                                <p className='font-rubik text-center text-[#88858E] pt-[1rem]'>88 New Street, Washington DC</p>
                                <p className='font-rubik text-center text-[#88858E]'>United States, America</p>
                            </div >
                            <div className='pt-[3rem]'>
                                <p className='font-rubik text-center font-semibold text-[1.1rem]'>Phone</p>
                                <p className='font-rubik text-center text-[#88858E] pt-[1rem]'>Local: 666 888 0000</p>
                                <p className='font-rubik text-center text-[#88858E]'>Mobile: 000 8888 999</p>
                            </div>
                            <div className='pt-[2rem]'>
                                <p className='font-rubik text-center font-semibold text-[1.1rem]'>Email</p>
                                <p className='font-rubik text-center text-[#88858E] pt-[1rem]'>needhelp@company.com</p>
                                <p className='font-rubik text-center text-[#88858E]'>inquiry@asting.com</p>
                            </div>
                            <div className='pt-[2rem]'>
                                <p className='font-rubik text-center font-semibold text-[1.1rem]'>Follow</p>
                                <div className='flex justify-center items-center  gap-3  pt-[1rem]'>
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
                    </div>
                </div>
                <section className='w-full h-[34rem] pt-[7rem] relative block'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.3159595774714!2d79.99727977406721!3d7.089324716331443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fb1c286b065b%3A0x13616876f884dc14!2sJava%20Institute%20for%20Advanced%20Technology%20Gampaha!5e0!3m2!1sen!2slk!4v1696091561482!5m2!1sen!2slk"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        className='w-[84.313rem] h-[34rem]'>

                    </iframe>
                </section>
            </section>
        </div>
    )
}
export default Contact;


