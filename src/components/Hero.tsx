import Image from "next/image";


export default function Hero() {
    return (
        <section className="container flex justify-between max-md:mt-[70px] mt-[130px] max-md:px-[30px] px-[55px] mx-auto">
            <div className="max-md:text-center">

                {/* Desktop*/}
                <div className="hidden md:block">
                    <h1 className="text-[45px] leading-[63px] font-bold">
                        Transform your business<br /> with our
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#bd78fa81]"> Creative<br /></span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#bd78fa81]">
                            Marketing Solutions!
                        </span>
                    </h1>
                    <p className="font-[16px] leading-[26px] mt-[30px]">
                        Welcome to Focus Marketing Solutions! We&apos;re a creative team dedicated<br />
                        to driving your business forward with innovative marketing strategies. From <br />
                        digital marketing to social media management, we&apos;re here to help you<br />
                        succeed. Let&apos;s build something extraordinary together
                    </p>
                </div>

                {/* Mobile */}
                <div className="block md:hidden">
                    <h1 className="text-[40px] font-bold w-[340px]">
                        Transform your business with our
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#bd78fa81]">
                            {" "} Creative Marketing Solutions!
                        </span>
                    </h1>
                    <p className="text-[16px] leading-[28px] mt-[30px]">
                        Welcome to Focus Marketing Solutions! We&apos;re a creative team dedicated
                        to driving your business forward with innovative marketing strategies. From digital
                        marketing to social media management, we&apos;re here to help you<br /> succeed. Let&apos;s build
                        something extraordinary together
                    </p>
                </div>


                <div className="flex max-md:justify-center max-md:items-center max-md:flex-col gap-[10px] mt-[30px]">
                    <button className="max-md:w-full w-[87px] h-[47px] rounded-[200px] bg-[#7D4283] cursor-pointer hover:bg-transparent hover:border hover:border-[#FFFFFF] transition-all duration-500">Join us</button>
                    <button className="max-md:w-full w-[112px] h-[47px] rounded-[200px] border border-[#FFFFFF] cursor-pointer hover:bg-[#7D4283] hover:border-none transition-all duration-500">Contact us</button>
                </div>

                <div className="mt-[180px] relative max-md:hidden">
                    <Image
                        src="/heroImages/hero2.png"
                        alt="hero2"
                        width={488}
                        height={356}
                        className="object-cover mask-gradient-top"
                    />
                </div>
            </div>

            <div className="absolute left-[986px]">
                <Image
                    src="/heroImages/hero1.png"
                    alt="hero1"
                    width={535}
                    height={445}
                    className="object-cover  max-md:hidden"
                />

                <Image
                    src="/heroImages/hero3.png"
                    alt="hero3 "
                    width={312}
                    height={394}
                    className="object-cover mt-8 mask-gradient-top  max-md:hidden"
                />
            </div>

            <div>

            </div>
        </section>
    )
}
