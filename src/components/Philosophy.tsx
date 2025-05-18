import React from 'react'

export default function Philosophy() {
    return (
        <section className='"container mx-auto mt-[130px] max-md:px-[30px] px-[55px]'>
            <div>
                <div className='flex items-center gap-1 max-md:ml-6'>
                    <span className='w-2 h-2 bg-[#F2F2F2] rounded-[50%]'></span>
                    <h1 className='text-[#7D4283] text-[14px] leading-[20px]'>The company&apos;s philosophy</h1>
                </div>
                <hr className='text-[#D9DEDD] mt-4 max-md:ml-6' />

                <div className='flex justify-between items-center max-md:flex-col max-md:gap-10 mt-10 md:mt-20 max-md:ml-6'>
                    <div className='md:w-[592px]'>
                        <h1 className='text-[32px] md:text-[62px] text-[#7D4283] leading-[40px] md:leading-[75px] tracking-[-3%] font-[500] mb-6'>We bear the responsibility of developing the sector.</h1>
                        <p className='text-[16px] md:text-[24px] text-[#646A69] font-[300] leading-[36px] tracking-[-3%]'>
                            Elevate your brand with our comprehensive marketing
                            solutions, including Digital Marketing, Content Creation,
                            and Social Media Strategy.
                            Enhance visibility through
                            expert SEO and PPC management,
                        </p>
                    </div>

                    <div className=' flex max-md:grid max-md:grid-cols-2 md:flex-col gap-16 max-md:max-w-[300px] md:w-[400px]'>
                        <div>
                            <h1 className='text-[27px] md:text-[48px] text-[#FFFFFF] font-[600] leading-[60px] tracking-[-3%]'>1,200+</h1>
                            <p className='text-[18px] text-[#646A69] font-[500] leading-[26px] tracking-[-0.4%]'>Clients</p>
                        </div>
                        <div>
                            <h1 className='text-[27px] md:text-[48px] text-[#FFFFFF] font-[600] leading-[60px] tracking-[-3%]'>20+</h1>
                            <p className='text-[18px] text-[#646A69] font-[500] leading-[26px] tracking-[-0.4%]'>Branches</p>
                        </div>
                        <div>
                            <h1 className='text-[27px] md:text-[48px] text-[#FFFFFF] font-[600] leading-[60px] tracking-[-3%]'>200+</h1>
                            <p className='text-[18px] text-[#646A69] font-[500] leading-[26px] tracking-[-0.4%]'>Number of Employees</p>
                        </div>
                        <div>
                            <h1 className='text-[27px] md:text-[48px] text-[#FFFFFF] font-[600] leading-[60px] tracking-[-3%]'>315+</h1>
                            <p className='text-[18px] text-[#646A69] font-[500] leading-[26px] tracking-[-0.4%]'>Sales Representative</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
