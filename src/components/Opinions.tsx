import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function Opinions() {
  return (
    <section className="container mx-auto mt-[130px] mb-[450px] max-md:px-[30px] px-[55px] bg-[#7D4283] md:h-[1048px] overflow-x-hidden">

      <div className="flex flex-col  gap-5 md:gap-20">
        <h1 className="flex justify-center items-center text-[25px] md:text-[48.67px] leading-[61px] font-[400] mt-8 md:mt-20">Our clients opinions</h1>

        <div className="flex justify-center items-center gap-6 max-md:flex-col max-md:mb-[30px] md:mt-[120px]">
          <div
            className="max-md:hidden flex justify-center items-center cursor-pointer bg-[#FFFFFF] w-[50px] h-[50px] rounded-[50%] absolute right-[20px]">
            <IoIosArrowForward className="text-[#002334] text-2xl" />
          </div>

          <div className="w-[314px] h-[326px] md:w-[426px] md:h-[407px] px-5 md:px-10 py-10 md:py-16 bg-[#161616] rounded-[10px] hover:scale-105 hover:-translate-y-4 transition duration-400">
            <Image src="/openions/openions-1.png" alt="openions-1" width={64} height={64} className="mb-3" />
            <span className="text-[16px] leading-[20px] w-[328px] h-[20px]">Jonathan Sweeney</span>
            <p className="text-[16px] md:text-[18px] leading-[27px] font-[400] w-[280px] h-[94px] md:w-[328px] md:h-[197px] mt-5 md:mt-10">
              &quot;I love that model. I [used to have to]
              call all around, and I absolutely love
              that model that you could save me the
              time and headache of doing that.&quot;
            </p>
          </div>

          <div className="w-[314px] h-[326px] md:w-[426px] md:h-[407px] px-5 md:px-10 py-10 md:py-16 bg-[#161616] rounded-[10px] hover:scale-105 hover:-translate-y-4 transition duration-400">
            <Image src="/openions/openions-2.png" alt="openions-2" width={64} height={64} className="mb-3" />
            <span className="text-[16px] leading-[20px] w-[328px] h-[20px]">Barbara Cook</span>
            <p className=" text-[16px] md:text-[18px] leading-[27px] font-[400] w-[280px] h-[94px] md:w-[328px] md:h-[197px] mt-5 md:mt-10">
              &quot;I am so happy with your company.
              Ever since my insurer switched to you, everything and everybody
              I&apos;ve spoken to has been extremely, extremely pleasant, helpful,
              and they listen to
            </p>
          </div>

          <div className="w-[314px] h-[326px] md:w-[426px] md:h-[407px] px-5 md:px-10 py-10 md:py-16 bg-[#161616] rounded-[10px] hover:scale-105 hover:-translate-y-4 transition duration-400">
            <Image src="/openions/openions-3.png" alt="openions-3" width={64} height={64} className="mb-3" />
            <span className="text-[16px] leading-[20px] w-[328px] h-[20px]">Mary Rogers</span>
            <p className="text-[16px] md:text-[18px] leading-[27px] font-[400] w-[280px] h-[94px] md:w-[328px] md:h-[197px] mt-5 md:mt-10">
              “I just want to thank you for the great
              job you did during my transition to
              oxygen. You unraveled all the
              confusion and the new company is
              wonderful.”
            </p>
          </div>

          <div
            className="max-md:hidden flex justify-center items-center cursor-pointer bg-[#FFFFFF] w-[50px] h-[50px] rounded-[50%] absolute left-[20px]">
            <IoIosArrowBack className="text-[#002334] text-2xl" />
          </div>
        </div>

        <div className="max-md:hidden flex justify-center items-center gap-4">
          <span className="w-[19px] h-[19px] bg-[#161616] rounded-[50%]"></span>
          <span className="w-[10px] h-[10px] bg-[#FFFFFF] rounded-[50%]"></span>
          <span className="w-[10px] h-[10px] bg-[#FFFFFF] rounded-[50%]"></span>
          <span className="w-[10px] h-[10px] bg-[#FFFFFF] rounded-[50%]"></span>
          <span className="w-[10px] h-[10px] bg-[#FFFFFF] rounded-[50%]"></span>
          <span className="w-[10px] h-[10px] bg-[#FFFFFF] rounded-[50%]"></span>
          <span className="w-[10px] h-[10px] bg-[#FFFFFF] rounded-[50%]"></span>
          <span className="w-[10px] h-[10px] bg-[#FFFFFF] rounded-[50%]"></span>
        </div>

      </div>

    </section>
  )
}
