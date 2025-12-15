import RichText from "@/components/RichText";
import React from "react";

interface FAQBlockProps {

    items: {
        Question: any,
        richText: any;


    }[],



}

export const FAQBlock: React.FC<FAQBlockProps> = ({ items = [] }) => {

    // console.log(items);


    return (

        <>
            {
                items.map((item: any, index:number) => {

                    return (
                        <div className="w-full flex justify-center">
                            <div
                                key={item.index}
                                className="w-[70%] md:w-[60%] lg:w-[50%] 
                                group p-6 bg-white border border-blue-200 rounded-xl 
                                hadow-md hover:shadow-xl hover:border-blue-500 
                                transition-all duration-300"
                            >
                                <h1 className="text-2xl font-semibold text-blue-800 group-hover:text-blue-600 
                                   transition-colors duration-300 flex items-center gap-2">
                                    {/* <span className="text-blue-600 text-3xl">❓</span> */}
                                    {item.Question}
                                </h1>

                                {item.richText && (
                                    <RichText
                                        className="prose max-w-none text-gray-700 mt-3 leading-relaxed"
                                        data={item.richText}
                                        enableGutter={false}
                                    />
                                )}
                            </div>
                        </div>
                    );





                })



            }





        </>
    )
}