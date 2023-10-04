import { React } from "react";
import Donate1 from "../image/make-donation-two-img-1.jpg";
import Donate2 from "../image/make-donation-two-img-2.jpg";
import Donate3 from "../image/you_can_help_img.png";
import Foods from "../image/foods.png";
import stethoscope from "../image/stethoscope.png";
import water from "../image/water.png";
import graduated from "../image/graduated.png";
import Testimonial from "../image/testimonials_two-img-1.png";
import Testimonial_Quotes from "../image/testimonials-two-icon-1.png";
import volunteer1 from "../image/Volunteer_one_img-1.jpg";
import volunteer2 from "../image/Volunteer_one_img-2.jpg";
import volunteer3 from "../image/Volunteer_one_img-3.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import { PiTwitterLogoFill } from "react-icons/pi";
import { BsInstagram } from "react-icons/bs";

const About = () => {
  return (
    <>
      <section
        class="bg-[url('./image/page-header-bg.jpg')] relative flex items-center justify-center pt-[7.75rem] pb-[8.063rem] bg-no-repeat bg-cover w-[100rem] h-[23.138rem]
        before:content-[''] before:top-0 before:left-0 before:h-[100%] before:w-[100%] before:bg-[#2c2734] before:opacity-[0.6] before:absolute"
      >
        <div className="absolute flex items-center justify-center">
          <div className="text-white">
            <h2 className="font-abril text-[3.75rem]">About</h2>
            <ul className="font-shadows text-[1.5rem] flex items-center justify-center gap-4">
              <li className="hover:text-[#ff9d00] hover:ease-in duration-200 cursor-pointer">
                Home
              </li>
              <li className="hover:text-[#ff9d00] hover:ease-in duration-200">
                /
              </li>
              <li className="hover:text-[#ff9d00] cursor-pointer hover:ease-in duration-200">
                {" "}
                About
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full h-[41.738rem] relative pt-[7.5rem] pb-[7.5rem] flex items-center justify-center">
        <div className="w-[30rem] h-[26.738rem">
          <h4 className="font-shadows text-[#FF6D12] text-[1.875rem]">
            Make a Donation
          </h4>
          <h2 className="text-[2.813rem] text-black font-abril w-[30rem]">
            We Make a Difference in their Life
          </h2>
          <p className="text-[1.125rem] text-[#88858E] font-sans text-left leading-[2rem] h-[6.375rem] w-[30rem]">
            Tincidunt elit magnis nulla facilisis sagittis is maecenas. Sapien
            nunced amet ultrices, dolores sit ipsum velit purus aliquet, massa
            fringilla leo orci.
          </p>
          <div className="w-[30rem] h-[8rem] block mt-[2rem]">
            <div className="mb-2 flex items-center">
              <text className="font-sans font-semibold text-[1.3rem]">
                Funding
              </text>
              <text className="font-sans font-semibold text-[1rem] ml-[19rem] absolute mt-5">
                80%
              </text>
            </div>
            <div className="bg-[#eae5e3] w-[30rem] h-[0.6rem] rounded absolute">
              <div className=" bg-orange-500 h-[0.6rem] rounded absolute w-[20rem]"></div>
            </div>
            {/*  */}
            <div className="mb-2 flex items-center mt-[2rem]">
              <text className="font-sans font-semibold text-[1.3rem]">
                Doantions
              </text>
              <text className="font-sans font-semibold text-[1rem] ml-[13rem] absolute mt-5">
                60%
              </text>
            </div>
            <div className="bg-[#eae5e3] w-[30rem] h-[0.6rem] rounded absolute">
              <div className=" bg-orange-500 h-[0.6rem] rounded absolute w-[14rem]"></div>
            </div>
          </div>
        </div>

        <div className="gap-2 flex items-center justify-center ml-[5rem]">
          <img
            src={Donate1}
            alt=""
            className="w-[18rem] h-[26.738rem] rounded-[0.5rem]"
          />
          <img
            src={Donate2}
            alt=""
            className="w-[18rem] h-[26.738rem] rounded-[0.5rem]"
          />
        </div>
      </section>

      <section class="bg-[url('./image/you_can_help_bg.jpg')] h-[50rem] bg-no-repeat overflow-hidden flex relative">
        <div className="overflow-hidden relative w-full flex items-end justify-end -mt-56">
          <img
            src={Donate3}
            alt=""
            className="bg-cover border-none bg-no-repeat"
          />
        </div>

        <div className="absolute flex">
          <div className=" ml-[10rem] mt-[10rem]">
            <div className="flex-col items-center justify-center">
              <h2 className="text-orange-500 text-[1.875rem] font-shadows">
                Help the people
              </h2>
              <h4 className="text-black text-[3.125rem] font-abril w-[35.625rem] leading-tight">
                You Can Help us to Change One Person Live Through Donation
              </h4>
            </div>

            <div className="flex-col list-none mt-[4rem] items-center justify-center">
              <ul className=" from-black gap-5 flex">
                <li className="w-[9.375rem] h-[9.375rem] bg-orange-500 rounded-[8px] flex flex-col gap-2 items-center justify-center hover:bg-[#2c2734] hover:ease-in hover:duration-300 duration-300">
                  <img src={Foods} className="" alt="" />
                  <text className="font-sans text-white font-bold text-[20px]">
                    Food
                  </text>
                </li>
                <li className="w-[9.375rem] h-[9.375rem] bg-[#0e8ee3] rounded-[8px] flex flex-col gap-2 items-center justify-center hover:bg-[#2c2734] hover:ease-in hover:duration-300 duration-300">
                  <img src={water} className="" alt="" />
                  <text className="font-sans text-white font-bold text-[20px]">
                    Water
                  </text>
                </li>
                <li className="w-[9.375rem] h-[9.375rem] bg-[#4ac14f] rounded-[8px] flex flex-col gap-2 items-center justify-center hover:bg-[#2c2734] hover:ease-in hover:duration-300 duration-300">
                  <img src={stethoscope} className="" alt="" />
                  <text className="font-sans text-white font-bold text-[20px]">
                    Medical
                  </text>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center ml-28 mb-20">
            <div
              className="w-[193px] h-[193px] bg-white rounded-full flex items-center justify-center leading-tight
            before:contents:'Hello' before:w-[25px] before:h-[25px] before:bg-white before:absolute before:mt-[9.2rem] before:rotate-[-85deg] before:ml-[7rem]
            "
            >
              <text className="font-shadows text-[30px] w-[96.5px] h-[102px]">
                Give Education to Kids
              </text>
            </div>
            <div className="w-[106px] h-[106px] bg-[#ff6d12] rounded-full flex items-center justify-center absolute mb-[9rem] ml-[9rem] ">
              <img src={graduated} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-[url('./image/testimonials-two-bg.jpg')] relative flex items-center justify-center pt-[7.75rem] pb-[8.063rem] bg-no-repeat bg-cover w-[100rem] h-[491px]
        before:content-[''] before:top-0 before:left-0 before:h-[100%] before:w-[100%] before:bg-darkBrown before:absolute"
      >
        <div className="absolute flex items-center w-[1175px] h-[371px]">
          <div className="absolute flex gap-10 items-center">
            <div className="bg-pageHeader4 w-[310px] h-[287px] flex justify-center items-center">
              <img src={Testimonial} alt="" />
              <div className="h-[80px] w-[80px] absolute bg-white rounded-full flex items-center justify-center mb-[10rem] ml-[12rem]">
                <img src={Testimonial_Quotes} alt="" className="w-[23px]" />
              </div>
            </div>
            <div>
              <p className="text-white text-[30px] leading-tight w-[760px] h-[150px]">
                This is due to their excellent service, competitive pricing and
                customer support. It’s throughly refresing to get such a
                personal touch.
              </p>
              <h3 className="font-shadows text-[30px] text-[#ff6d12]">
                Mike Hardson
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex pt-[124px] pb=[90px] justify-center items-center">
        <div className="flex-row items justify-center items-center w-[1268.8px] h-[850px]">
          <div className="w-[1170px] h-[102.8px] flex flex-col items-center justify-center ml-10">
            <h4 className="font-shadows text-[30px] text-[#ff6d12] ml-5">
              Professional People
            </h4>
            <h2 className="text-[50px] font-abril">Meet Volunteers</h2>
          </div>

          <div className="flex justify-center items-center mt-10">
            {/* Volunteer1 */}
            <div className="w-[400px] h-[598.6px] flex justify-center items-center">
              <div className="w-[370px] rounded-[8px] h-[568.6px] bg-slate-100 overflow-hidden">
                <div
                  className="w-[370px] h-[417px] rounded-t-[8px] flex  items-center justify-cente hover:scale-105 hover:duration-500 hover:ease duration-500 
              before:content-[''] before:h-[417px] before:w-[370px] before:flex before:items-center before:justify-center before:bg-darkShadow before:absolute before:scale-x-0 before:hover:scale-x-100 before:hover:duration-500 before:duration-500"
                >
                  <img
                    alt=""
                    src={volunteer1}
                    className="rounded-t-[8px] w-full"
                  />
                </div>
                <div className="border-[1px] bg-white overflow-hidden absolute w-[370px] h-[151.6px] rounded-b-[8px] flex flex-col items-center">
                  <div className="border-b-[1px] border-[#eae5e3] border-solid w-[268.4px] h-[56.8px] text-center mt-5 overflow-hidden">
                    <h3 className="font-rubic text-[24px]">Jessica Brown</h3>
                  </div>
                  <div className="flex items-center w-[268.4px] h-[34] pt-6">
                    <div className="flex text-start">
                      <text className="text-[16px] text-[#88858E] font-rubic">
                        Volunteer
                      </text>
                    </div>
                    <div className="flex gap-5 ml-[6.9rem]">
                      <PiTwitterLogoFill className="w-[16px] h-[16px] text-[#88858E] hover:text-[#ff6d12] hover:duration-500 hover:ease-in duration-500 ease-out hover:cursor-pointer" />
                      <FaSquareFacebook className="w-[16px] h-[16px] text-[#88858E] hover:text-[#ff6d12] hover:duration-500 hover:ease-in duration-500 ease-out hover:cursor-pointer" />
                      <BsInstagram className="w-[16px] h-[16px] text-[#88858E] hover:text-[#ff6d12] hover:duration-500 hover:ease-in duration-500 ease-out hover:cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer2 */}
            <div className="w-[400px] h-[598.6px] flex justify-center items-center">
              <div className="w-[370px] rounded-[8px] h-[568.6px] bg-slate-100 overflow-hidden">
                <div
                  className="w-[370px] h-[417px] rounded-t-[8px] flex  items-center justify-cente hover:scale-105 hover:duration-500 hover:ease duration-500 
              before:content-[''] before:h-[417px] before:w-[370px] before:flex before:items-center before:justify-center before:bg-darkShadow before:absolute before:scale-x-0 before:hover:scale-x-100 before:hover:duration-500 before:duration-500"
                >
                  <img
                    alt=""
                    src={volunteer2}
                    className="rounded-t-[8px] w-full"
                  />
                </div>
                <div className="border-[1px] bg-white overflow-hidden absolute w-[370px] h-[151.6px] rounded-b-[8px] flex flex-col items-center">
                  <div className="border-b-[1px] border-[#eae5e3] border-solid w-[268.4px] h-[56.8px] text-center mt-5 overflow-hidden">
                    <h3 className="font-rubic text-[24px]">Kevin Martin</h3>
                  </div>
                  <div className="flex items-center w-[268.4px] h-[34] pt-6">
                    <div className="flex text-start">
                      <text className="text-[16px] text-[#88858E] font-rubic">
                        Volunteer
                      </text>
                    </div>
                    <div className="flex gap-5 ml-[6.9rem]">
                      <PiTwitterLogoFill className="w-[16px] h-[16px] text-[#88858E] hover:text-[#ff6d12] hover:duration-500 hover:ease-in duration-500 ease-out hover:cursor-pointer" />
                      <FaSquareFacebook className="w-[16px] h-[16px] text-[#88858E] hover:text-[#ff6d12] hover:duration-500 hover:ease-in duration-500 ease-out hover:cursor-pointer" />
                      <BsInstagram className="w-[16px] h-[16px] text-[#88858E] hover:text-[#ff6d12] hover:duration-500 hover:ease-in duration-500 ease-out hover:cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer3 */}
            <div className="w-[400px] h-[598.6px] flex justify-center items-center">
              <div className="w-[370px] rounded-[8px] h-[568.6px] bg-slate-100 overflow-hidden">
                <div
                  className="w-[370px] h-[417px] rounded-t-[8px] flex  items-center justify-cente hover:scale-105 hover:duration-500 hover:ease duration-500 
              before:content-[''] before:h-[417px] before:w-[370px] before:flex before:items-center before:justify-center before:bg-darkShadow before:absolute before:scale-x-0 before:hover:scale-x-100 before:hover:duration-500 before:duration-500"
                >
                  <img
                    alt=""
                    src={volunteer3}
                    className="rounded-t-[8px] w-full"
                  />
                </div>
                <div className="border-[1px] bg-white overflow-hidden absolute w-[370px] h-[151.6px] rounded-b-[8px] flex flex-col items-center">
                  <div className="border-b-[1px] border-[#eae5e3] border-solid w-[268.4px] h-[56.8px] text-center mt-5 overflow-hidden">
                    <h3 className="font-rubic text-[24px]">Christine Eve</h3>
                  </div>
                  <div className="flex items-center w-[268.4px] h-[34] pt-6">
                    <div className="flex text-start">
                      <text className="text-[16px] text-[#88858E] font-rubic">
                        Volunteer
                      </text>
                    </div>
                    <div className="flex gap-5 ml-[6.9rem]">
                      <PiTwitterLogoFill className="w-[16px] h-[16px] text-[#88858E] hover:text-[#ff6d12] hover:duration-500 hover:ease-in duration-500 ease-out hover:cursor-pointer" />
                      <FaSquareFacebook className="w-[16px] h-[16px] text-[#88858E] hover:text-[#ff6d12] hover:duration-500 hover:ease-in duration-500 ease-out hover:cursor-pointer" />
                      <BsInstagram className="w-[16px] h-[16px] text-[#88858E] hover:text-[#ff6d12] hover:duration-500 hover:ease-in duration-500 ease-out hover:cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background w-full h-[287px] flex justify-center items-center">
        <div className="h-[93px] w-[1170px] flex items-center justify-between">
          <div>
            <p className="text-[30px] font-shadows text-white">
              Help People in Need
            </p>
            <h3 className="text-[50px] font-abril text-white">
              Become a Volunteer Now
            </h3>
          </div>
          <div className="bg-[#2c2734] w-[257.25px] h-[67px] flex justify-center items-center rounded-[33.5px] text-white font-bold hover:text-[#fe6d12] hover:bg-white hover:ease-out duration-[0.4s] hover:duration-[0.4s] hover:cursor-pointer">
            <p className="font-rubic text-[16px]">Get Involved Now</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
