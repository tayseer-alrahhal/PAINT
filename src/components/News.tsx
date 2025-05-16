import Image from 'next/image'
import React from 'react'

export default function News() {
    return (
        <section className='container mx-auto mt-[130px] max-md:px-[30px] px-[55px]'>
            <div className='flex justify-center md:justify-between items-center'>
                <h1 className=' text-[44px] font-[500] text-[#FFF7ED] leading-[54px]'>News</h1>
                <button
                    className='max-md:hidden w-[157px] h-[55px] rounded-full text-[16px] font-[500] bg-[#7951B3] leading-[23px] hover:bg-transparent hover:border-2 hover:border-[#4F4D4D] transition duration-500 cursor-pointer'>
                    View all news
                </button>
            </div>

            <div className='flex gap-20 max-md:flex-col mt-10 md:mt-25'>
                <div>
                    <Image src="/news/news-1.png" alt='news-1' width={696} height={460} className='max-md:h-[226]' />
                    <div className='flex items-center gap-3 my-8'>
                        <button className='text-[14px] leading-[20px] bg-[#FFFFFF] text-[#1D1F1E] w-[94px] h-[30px] rounded-[20px]'>Company</button>
                        <button className='text-[14px] leading-[20px] bg-[#FFFFFF] text-[#1D1F1E] w-[94px] h-[30px] rounded-[20px]'>Contracts</button>
                    </div>
                    <h2 className='text-[18px] md:text-[32px] font-[500] leading-[35px] md:leading-[40px] tracking-[-1%] max-w-[695px] max-h-[120px] mb-8'>We specialize in fostering effective partnerships with supportive
                        companies to drive mutual success.</h2>
                    <p className='text-[16px] md:text-[18px] text-[#646A69] font-[400] leading-[26px] max-w-[695px] max-h-[104px]'>We are committed to building effective partnerships with supporting companies, contributing to the advancement, development,
                        and expansion of the sector through diverse capabilities,
                        expertise, and technological innovation.
                    </p>
                </div>

                <div className='flex flex-col gap-3'>
                    <div className='flex gap-6'>
                        <Image src="/news/news-2.png" alt='news-2' width={100} height={100} className='w-[115px] h-[115px] md:w-[221px] md:h-[246px]' />
                        <div>
                            <h2 className='text-[16px] md:text-[24px] font-[500] leading-[21px] md:leading-[40px] tracking-[-1%] max-w-[279px] max-h-[192px] mb-8'>We specialize in fostering effective partnerships with supportive
                                companies to drive mutual success.</h2>
                            <div className='flex items-center gap-3 my-8'>
                                <button className='text-[14px] leading-[20px] bg-[#FFFFFF] text-[#1D1F1E] w-[94px] h-[30px] rounded-[20px]'>Company</button>
                                <button className='text-[14px] leading-[20px] bg-[#FFFFFF] text-[#1D1F1E] w-[94px] h-[30px] rounded-[20px]'>Contracts</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <Image src="/news/news-3.png" alt='news-3' width={100} height={100} className='w-[115px] h-[115px] md:w-[221px] md:h-[246px]' />
                        <div>
                            <h2 className='text-[16px] md:text-[24px] font-[500] leading-[21px] md:leading-[40px] tracking-[-1%] max-w-[279px] max-h-[192px] mb-8'>We specialize in fostering effective partnerships with supportive
                                companies to drive mutual success.</h2>
                            <div className='flex items-center gap-3 my-8'>
                                <button className='text-[14px] leading-[20px] bg-[#FFFFFF] text-[#1D1F1E] w-[94px] h-[30px] rounded-[20px]'>Company</button>
                                <button className='text-[14px] leading-[20px] bg-[#FFFFFF] text-[#1D1F1E] w-[94px] h-[30px] rounded-[20px]'>Contracts</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <Image src="/news/news-4.png" alt='news-4' width={100} height={100} className='w-[115px] h-[115px] md:w-[221px] md:h-[246px]' />
                        <div>
                            <h2 className='text-[16px] md:text-[24px] font-[500] leading-[21px] md:leading-[40px] tracking-[-1%] max-w-[279px] max-h-[192px] mb-8'>We specialize in fostering effective partnerships with supportive
                                companies to drive mutual success.</h2>
                            <div className='flex items-center gap-3 my-8'>
                                <button className='text-[14px] leading-[20px] bg-[#FFFFFF] text-[#1D1F1E] w-[94px] h-[30px] rounded-[20px]'>Company</button>
                                <button className='text-[14px] leading-[20px] bg-[#FFFFFF] text-[#1D1F1E] w-[94px] h-[30px] rounded-[20px]'>Contracts</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
