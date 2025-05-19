import Image from 'next/image'
import React from 'react'

interface ImagesType {
    src: string,
    width: number
    height: number,
    id: number
}

export default function OurPartners() {


    const images: ImagesType[] = [
        { src: "partner1.png", width: 167, height: 88, id: 1 },
        { src: "partner2.png", width: 52, height: 50, id: 2 },
        { src: "partner3.png", width: 90, height: 65, id: 3 },
        { src: "partner4.png", width: 60, height: 60, id: 4 },
        { src: "/partner1.png", width: 167, height: 88, id: 5 },
        { src: "/partner2.png", width: 52, height: 50, id: 6 },
        { src: "/partner3.png", width: 90, height: 65, id: 7 },
        { src: "/partner4.png", width: 60, height: 60, id: 8 },
    ]

    return (
        <section className='container flex flex-col items-center mt-[130px] mx-auto'>
            <h1 className='text-[48px] max-md:text-[24px] mb-[40px]'>Our Partners</h1>

            <div className="w-full overflow-hidden">
                <div className="flex gap-2 swipe w-max">
                    {images.map(({ src, width, height, id }) => (
                        <div
                            key={id}
                            className="flex justify-center items-center bg-[#FFFFFF] rounded-[8px] max-md:w-[271.4px] max-md:h-[57px] w-[419px] h-[88px]"
                        >
                            <Image src={src} alt={src} width={width} height={height} />
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
