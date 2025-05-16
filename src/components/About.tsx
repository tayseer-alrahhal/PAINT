import Image from "next/image";

export default function About() {
    return (
        <section className="container flex items-center justify-center mt-[130px] mx-auto">
            <div className="relative">
                <div className="max-md:hidden absolute top-0 left-0">
                    <Image src="/Lines.png" alt="Lines" width={1478} height={1409} className="max-w-[70%]" />
                </div>
                <div className="md:hidden">
                    <Image src="/Lines2.png" alt="Lines" width={1478} height={1409} className="max-w-[100%] absolute -z-20" />
                </div>
                <div className="flex flex-col justify-center items-center mt-32 max-md:text-center">
                    <h1 className="text-[48px] max-md:text-[24px] mb-[40px]">About us</h1>
                    <p className="text-[16px] w-[65%] font-[400] max-md:leading-[31px] md:text-left">
                        Welcome to <span className="text-[#7D4283]">Focus Marketing Solutions</span>! We&apos;re a creative team dedicated
                        to driving your business forward with innovative marketing strategies.
                        From digital marketing to social media management, we&apos;re here to help
                        you succeed. <span className="text-[#7D4283]">Let&apos;s build something extraordinary together.</span>
                    </p>
                    <button className="max-md:w-[95%] w-[148px] h-[56px] mt-10 rounded-[200px] text-[#7D4283] border border-[#7D4283] cursor-pointer">
                        Read more
                    </button>
                </div>
            </div>
        </section>
    )
}
