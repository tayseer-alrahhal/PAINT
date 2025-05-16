"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="relative">
            <div className="container mx-auto flex justify-between items-center max-md:flex-row-reverse max-md:mt-[40px]  my-[30px] px-4 md:px-[55px]">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={135} height={40} className="w-[120px] md:w-[135px]" />
                </Link>

                <nav className="hidden lg:flex">
                    <ul className="flex gap-[40px]">
                        <li className="text-[17px] cursor-pointer tracking-[0.4%] hover:text-[#7D4283] transition-all duration-500">Home</li>
                        <li className="text-[17px] cursor-pointer tracking-[0.4%] hover:text-[#7D4283] transition-all duration-500">About us</li>
                        <li className="text-[17px] cursor-pointer tracking-[0.4%] hover:text-[#7D4283] transition-all duration-500">Services</li>
                        <li className="text-[17px] cursor-pointer tracking-[0.4%] hover:text-[#7D4283] transition-all duration-500">Branches</li>
                        <li className="text-[17px] cursor-pointer tracking-[0.4%] hover:text-[#7D4283] transition-all duration-500">jobs <span className="text-[12px] px-[8px] py-[2px] mx-auto bg-[#7D4283] text-[#FFFFFF] rounded-[99px]">12</span></li>
                    </ul>
                </nav>

                <div className="hidden lg:flex gap-[10px]">
                    <button className="w-[112px] h-[47px] rounded-[200px] border border-[#FFFFFF] cursor-pointer hover:bg-[#7D4283] hover:border-none transition-all duration-500">Contact us</button>
                    <button className="w-[87px] h-[47px] rounded-[200px] bg-[#7D4283] cursor-pointer hover:bg-transparent hover:border hover:border-[#FFFFFF] transition-all duration-500">Join us</button>
                </div>

                <button
                    className="lg:hidden text-[var(--color-text-primary)]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <IoClose className="text-[30px]" />
                    ) : (
                        <FiMenu className="text-[30px]" />
                    )}
                </button>
            </div>

            <div className={`lg:hidden mx-3 rounded-[10px] bg-[#1E1E1E] transition-all duration-500  ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                <nav className="container px-4 py-6">
                    <ul className="flex flex-col gap-4">
                        <li className="cursor-pointer tracking-[0.4%] hover:text-[#7D4283] transition-all duration-500">Home</li>
                        <li className="cursor-pointer tracking-[0.4%] hover:text-[#7D4283] transition-all duration-500">About us</li>
                        <li className="cursor-pointer tracking-[0.4%] hover:text-[#7D4283] transition-all duration-500">Services</li>
                        <li className="cursor-pointer tracking-[0.4%] hover:text-[#7D4283] transition-all duration-500">Branches</li>
                        <li className="cursor-pointer tracking-[0.4%] hover:text-[#7D4283] transition-all duration-500">jobs</li>
                    </ul>
                    <div className="flex flex-col gap-3 mt-6">
                        <button className="w-full h-[47px] rounded-[200px] border border-[#FFFFFF] cursor-pointer hover:bg-[#7D4283] hover:border-none transition-all duration-500">Contact us</button>
                        <button className="w-full h-[47px] rounded-[200px] bg-[#7D4283] cursor-pointer hover:bg-transparent hover:border hover:border-[#FFFFFF] transition-all duration-500">Join us</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
