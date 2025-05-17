import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export default function Pricing() {
    return (
        <section className="container mx-auto mt-[130px] max-md:px-[30px] px-[55px]">
            <div className="flex gap-10 max-md:flex-col">

                <div className="max-md:text-center max-md:flex max-md:flex-col max-md:items-center">
                    <h1 className="text-[24px] md:text-[66.99px] font-[700] mb-5 w-[212px] md:w-[591px]">Simple pricing
                        for your Business
                    </h1>
                    <p className="text-[16px] md:text-[18.25px] text-[#646A69] font-[400] w-[322px] md:w-[723px]">We have several powerful plans to showcase your business and get discovered
                        as a creative entrepreneurs. Everything you need.</p>
                </div>


                <div className="flex flex-col gap-6">

                    <div className="flex justify-between items-center px-8 bg-[#1A1A1A] w-[322px] h-[56px] md:w-[480px] md:h-[84px] rounded-[10px] ">
                        <span className="text-[18px] md:text-[27.37px] text-[#7D4283] font-[500]">Intro</span>
                        <div className="flex justify-center items-center rounded-[50%] w-[17px] h-[17px] md:w-[27px] md:h-[27px] bg-[#7D4283] cursor-pointer">
                            <IoIosArrowDown className="mt-[2px] max-md:text-[10px]" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center px-8 bg-[#1A1A1A] w-[322px] h-[56px] md:w-[480px] md:h-[84px] rounded-[10px] ">
                        <span className="text-[18px] md:text-[27.37px] text-[#7D4283] font-[500]">Base</span>
                        <div className="flex justify-center items-center rounded-[50%] w-[17px] h-[17px] md:w-[27px] md:h-[27px] bg-[#7D4283] cursor-pointer">
                            <IoIosArrowDown className="mt-[2px] max-md:text-[10px]" />
                        </div>
                    </div>

                    <div className="w-[322px] h-[200px] md:w-[480px]  md:h-[236px] bg-[#7D4283] rounded-[10px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 z-0">
                            <Image src="/pricing.png" alt="pricing" width={340} height={235} className="w-[228px] h-[158px] md:w-[340px] md:h-[235px]" />
                        </div>

                        <div className="flex justify-between items-center px-8 py-6 relative z-10">
                            <div className="flex gap-4">
                                <span className="text-[18px] md:text-[27.37px] font-[500]">Pro</span>
                                <div>
                                    <span className="text-[14px] font-[500] text-[#7D4283] bg-[#FFFFFF] px-[10px] py-[5px] md:px-[20px] md:py-[10px] rounded-[10px]">Save $40</span>
                                </div>
                            </div>
                            <div className="flex justify-center items-center rounded-[50%] w-[17px] h-[17px] md:w-[27px] md:h-[27px] bg-[#A072A6] cursor-pointer">
                                <IoIosArrowDown className="mt-[2px] max-md:text-[10px]" />
                            </div>
                        </div>

                        <h2 className="w-[286px] h-[42px] md:w-[464px] md:h-[62px] text-[12px] md:text-[18px] font-[400] px-8 relative z-10">
                            Pro account gives you freedom with uploading HD videos and can also meet all your business needs apasih kamu
                        </h2>

                        <div className="flex justify-between items-center px-8 mt-6 relative z-10">
                            <div className="flex items-center gap-2">
                                <h1 className="text-[19px] md:text-[28px] font-bold">$123</h1>
                                <span className="text-[16px] md:text-[23px] font-[400] opacity-70">/month</span>
                            </div>

                            <div className="flex justify-center items-center rounded-[10px] bg-[#FFFFFF] w-[130px] h-[35px] md:w-[192px] md:h-[52px] cursor-pointer">
                                <span className="text-[#000000] font-semibold">Try 1 month</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center px-8 bg-[#1A1A1A] w-[322px] h-[56px] md:w-[480px] md:h-[84px] rounded-[10px] ">
                        <span className="text-[18px] md:text-[27.37px] text-[#7D4283] font-[500]">Enterprise</span>
                        <div className="flex justify-center items-center rounded-[50%] w-[17px] h-[17px] md:w-[27px] md:h-[27px] bg-[#7D4283] cursor-pointer">
                            <IoIosArrowDown className="mt-[2px] max-md:text-[10px]" />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
