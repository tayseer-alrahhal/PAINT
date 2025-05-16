"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, } from "recharts";

const data1 = [
    { name: "XS", value: 70, fill: "#7D4283" },
    { name: "S", value: 120, fill: "#F3722C" },
    { name: "M", value: 175, fill: "#F8961E" },
];
const data2 = [
    { name: "Product 1", value: 50 },
    { name: "Product 2", value: 50 },
];
const COLORS = ["#a855f7", "#fb923c"];



export default function Charts() {
    return (
        <section className="container mx-auto mt-[130px] max-md:px-[30px] px-[55px]">
            <h1 className="text-[24px] font-[600]">Our charts</h1>
            <div className="flex gap-6 flex-wrap md:flex-nowrap mt-10">
                <div className="w-[736px] h-[400px] bg-[#1E1E1E]">
                    <div className="flex justify-between items-center px-10 py-6 border-b-2 border-[#4F4D4D]">
                        <div>
                            <h1 className="text-[20px]">Net Profit</h1>
                            <span className="text-[12px] text-[#BDBDBD]">2024</span>
                        </div>
                        <div className="flex justify-center items-center w-[24px] h-[24px] bg-[#4F4D4D] rounded-[50%]">
                            <span className="text-[#1E1E1E] mb-2">¡</span>
                        </div>
                    </div>
                    <div className="bg-[#1E1E1E] rounded-lg pt-3 py-2 text-white px-10">
                        <h2 className="text-lg font-semibold mb-2">Net Profit</h2>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart data={data1}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
                                <XAxis dataKey="name" stroke="#d1d5db" />
                                <YAxis stroke="#d1d5db" domain={[0, 200]} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: "#27272a", border: "none", color: "white" }}
                                    labelStyle={{ color: "white" }}
                                />
                                <Bar dataKey="value" barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex items-center gap-5 px-10">
                        <div className="flex items-center gap-2">
                            <span className="w-[9] h-[9] bg-[#7D4283] rounded-[50%]"></span>
                            <h1 className="text-[12px] font-[400]">Product 1</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-[9] h-[9] bg-[#F3722C] rounded-[50%]"></span>
                            <h1 className="text-[12px] font-[400]">Product 2</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-[9] h-[9] bg-[#F8961E] rounded-[50%]"></span>
                            <h1 className="text-[12px] font-[400]">Product 3</h1>
                        </div>
                    </div>
                </div>


                <div className="bg-[#1E1E1E] text-white max-md:w-full">

                    <div className="flex flex-col px-10 pb-5 pt-3 border-b-2 border-[#4F4D4D]">
                        <h1 className="text-[20px]">Primary Text</h1>
                        <span className="text-[16px]">5,987.34</span>
                        <span className="text-[12px] text-[#BDBDBD]">Secondary text</span>
                    </div>

                    <div className="flex justify-center items-center my-4">
                        <ResponsiveContainer width={350} height={160}>
                            <PieChart>
                                <Pie
                                    data={data2}
                                    innerRadius={50}
                                    outerRadius={80}
                                    paddingAngle={0}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {data2.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="flex gap-4 text-xs text-gray-300 justify-center mt-4 max-md:mb-4">
                        <span className="flex items-center gap-1">
                            <span className="w-3 h-3 bg-purple-600 rounded-full inline-block"></span>
                            Product 1
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="w-3 h-3 bg-orange-400 rounded-full inline-block"></span>
                            Product 2
                        </span>
                    </div>
                </div>



            </div>
        </section>
    )
}
