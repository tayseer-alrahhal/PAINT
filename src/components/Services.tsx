import Image from "next/image"

export default function Services() {

    const services = [
        { image: "/services/serv-1.png", title: "Video Making", des: "Random content", id: 1 },
        { image: "/services/serv-2.png", title: "Branding", des: "Random content to fill the blank space", id: 2 },
        { image: "/services/serv-3.png", title: "Marketing strategy", des: "Random content to fill the blank space", id: 3 },
        { image: "/services/serv-4.png", title: "Email Marketing", des: "Random content ", id: 4 },
        { image: "/services/serv-5.png", title: "Social Media Managing", des: "Random content to fill the blank space", id: 5 },
        { image: "/services/serv-6.png", title: "Content Writing ", des: "Random content to fill the blank space", id: 6 },
    ]

    return (
        <section className="container mx-auto mt-[130px] md:mt-[300px] px-4">
            <h1 className="text-[42px] max-md:text-[24px] mb-[20px] text-center">Our services</h1>
            <p className="text-[18px] max-md:leading-[26px] leading-[16px] text-[#646A69] text-center mb-16">ransforming your online presence with innovative digital strategies</p>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {services.map(({ image, title, des, id }) => (
                    <div key={id} className="text-center p-6">
                        <div className="w-[152px] h-[152px] max-md:w-[118px] max-md:h-[118px] bg-[#F1F1F1] rounded-md flex justify-center items-center mx-auto">
                            <div className="w-[143.9px] h-[143.9px] max-md:w-[111px] max-md:h-[111px] bg-[#7D4283] rounded-[50%] flex justify-center items-center">
                                <Image src={image} alt={image} width={53} height={48} />
                            </div>
                        </div>
                        <div className="mt-8">
                            <h1 className="text-[21px] leading-[24px] tracking-[-1%] mb-3">{title}</h1>
                            <p className="text-[#646A69] text-[18px] tracking-[0.4%]">{des}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
