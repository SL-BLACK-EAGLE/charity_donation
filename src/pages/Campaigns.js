import { React } from "react";

const Campaigns = () => {
  return (
    <>
      <section
        class="bg-[url('./image/page-header-bg.jpg')] relative flex items-center justify-center pt-[7.75rem] pb-[8.063rem] bg-no-repeat bg-cover w-[100rem] h-[23.138rem]
        before:content-[''] before:top-0 before:left-0 before:h-[100%] before:w-[100%] before:bg-[#2c2734] before:opacity-[0.6] before:absolute"
      >
        <div className="absolute flex items-center justify-center">
          <div className="text-white">
            <h2 className="font-abril text-[3.75rem]">Donations</h2>
            <ul className="font-shadows text-[1.5rem] flex items-center justify-center gap-4">
              <li className="hover:text-[#ff9d00] hover:ease-in duration-200 cursor-pointer">
                Home
              </li>
              <li className="hover:text-[#ff9d00] hover:ease-in duration-200">
                /
              </li>
              <li className="hover:text-[#ff9d00] cursor-pointer hover:ease-in duration-200">
                {" "}
                Campaigns
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full h-[1702.11px] flex bg-black justify-center items-center">
        <div className="w-[1200px] h-[1462.11px] bg-white pl-[15px] pr-[15px] mr-auto ml-auto">
            <div className="flex flex-wrap -mr-[15px] -ml-[15px] w-[1200px] h-[1365.11px] bg-blue-300">
                <div className="relative w-[370px] h-[652.56px] border-solid border-[1px] rounded-[8px] overflow-hidden hover:shadow-lg duration-500">
                    <div className="w-[370px] h-[306px] overflow-hidden">
                        <div className="bg-donation_1 w-[370px] h-[306px] bg-no-repeat flex hover:scale-105 hover:ease hover:duration-[500ms] duration-[500ms]
                            before:content-[''] before:absolute before:flex before:justify-center before:items-center before:w-[370px] before:h-[306px] before:hover:bg-darkShadow before:hover:ease before:hover:duration-[500ms] before:duration-[500ms]
                        ">
                        <div className="absolute mt-[16.88rem] ml-[17rem] w-[78.21px] h-[36px] bg-[#FF9D00] text-[16px] text-white font-[500] rounded-t-[8px] inline-flex items-center justify-center"><p>Food</p></div>
                        </div>
                    </div>
                    <div className="w-[370px] bg-white h-[346.56px]"></div>
                </div>
            </div>
        <div className="w-[1170px] h-[67px] flex justify-center items-center">
            <text className="bg-[#FF6D12] text-[16px] font-rubic font-[700] rounded-[33.5px] items-center justify-center hover:bg-[#2c2734] duration-[0.4s] hover:duration-[0.4s] inline-flex text-white border-none outline-none w-[201.88px] h-[67px]">Load More</text>
        </div>
        </div>
      </section>
    </>
  );
};

export default Campaigns;
