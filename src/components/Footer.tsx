import Image from "next/image"
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="container mx-auto mt-[50px] md:mt-[130px] bg-[#7D4283] min-h-[1060px]  max-md:min-h-[1000px] relative">
            <div className="px-[20px] sm:px-[30px] md:px-[55px] text-center md:text-left flex flex-col justify-center md:h-[452px] py-10 md:py-0">
                <h1 className="text-[24px] font-[500] md:text-[46px] md:font-[700] md:leading-[64px]">What are you waiting for?</h1>
                <p className="my-5 text-[16px] text-[#F8F8F8] md:text-[24px] font-[300] md:leading-[45px] tracking-[-3%] w-full md:w-[700px] h-auto md:h-[90px]">
                    Register now to get the best delivery experience for you and your clients in Iraq!</p>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                    <input type="email" placeholder="Your email" className="w-full md:w-[350px] h-[56px] bg-[#FFFFFF] rounded-[200px] text-[#646A69] pl-6 font-[400]" />
                    <button className="w-full md:w-[157px] h-[56px] bg-[#161616] rounded-[200px] cursor-pointer">register</button>
                </div>
            </div>

            <div className="px-[20px] sm:px-[30px] md:px-[55px] flex flex-col md:flex-row justify-between gap-10 md:gap-0 py-10 md:py-0 md:h-[550px]">
                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
                    <Image src="/logo.png" alt="logo" width={100} height={100} />
                    <div className="flex flex-row gap-8 md:gap-16">
                        <div>
                            <h1 className="text-[16px] font-[500] leading-[24px]">The company</h1>
                            <ul className="flex flex-col gap-6 mt-6">
                                <li className="text-[16px] text-[#ffffffb3] font-[400] leading-[24px]">Who are we </li>
                                <li className="text-[16px] text-[#ffffffb3] font-[400] leading-[24px]">Services</li>
                                <li className="text-[16px] text-[#ffffffb3] font-[400] leading-[24px]">Jobs <span className="text-[12px] px-[10px] py-[4px] rounded-[100px] bg-[#000000]">12</span></li>
                                <li className="text-[16px] text-[#ffffffb3] font-[400] leading-[24px]">Branches</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-[16px] font-[500] leading-[24px]">Help center</h1>
                            <ul className="flex flex-col gap-6 mt-6">
                                <li className="text-[16px] text-[#ffffffb3] font-[400] leading-[24px]">Common questions</li>
                                <li className="text-[16px] text-[#ffffffb3] font-[400] leading-[24px]">Services</li>
                                <li className="text-[16px] text-[#ffffffb3] font-[400] leading-[24px]">Contact us</li>
                                <li className="text-[16px] text-[#ffffffb3] font-[400] leading-[24px]">Register as merchant</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end gap-4 max-md:w-[50%]">
                    <div className="flex items-center gap-4 bg-[#FFFFFF3D] w-full md:w-[256px] h-[56px] rounded-[100px]">
                        <div className="ml-[5px] flex justify-center items-center w-[48px] h-[48px] bg-[#FFFFFF] rounded-[100px]">
                            <FaFacebookF className="text-[#7D4283] text-2xl" />
                        </div>
                        <p>Facebook</p>
                    </div>
                    <div className="flex items-center gap-4 bg-[#FFFFFF3D] w-full md:w-[256px] h-[56px] rounded-[100px]">
                        <div className="ml-[5px] flex justify-center items-center w-[48px] h-[48px] bg-[#FFFFFF] rounded-[100px]">
                            <FaInstagram className="text-[#7D4283] text-2xl" />
                        </div>
                        <p>Instagram</p>
                    </div>
                    <div className="flex items-center gap-4 bg-[#FFFFFF3D] w-full md:w-[256px] h-[56px] rounded-[100px]">
                        <div className="ml-[5px] flex justify-center items-center w-[48px] h-[48px] bg-[#FFFFFF] rounded-[100px]">
                            <FaLinkedin className="text-[#7D4283] text-2xl" />
                        </div>
                        <p>LinkedIn</p>
                    </div>
                </div>
            </div>

            <p className="flex justify-center items-center text-[14px] font-[300] leading-[20px] text-[#ffffffd2] mb-10 px-4 text-center">© 2024 Leader Express Delivery Company. All rights reserved.</p>

            <div className="absolute bottom-0 left-0 w-full">
                <Image
                    src="/footer-lines.png"
                    alt="footer decoration"
                    width={966}
                    height={921}
                    className="w-full h-auto object-cover"
                />
            </div>
        </footer>
    )
}
