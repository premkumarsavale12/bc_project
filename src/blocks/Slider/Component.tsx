"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from 'swiper/modules';
import RichText from "@/components/RichText";
import { type DefaultTypedEditorState } from '@payloadcms/richtext-lexical';

interface MediaItem {
    media: {
        url: string;
        alt?: string;
    };
}

interface SliderBlock {
    sliders: MediaItem[];
    richText: DefaultTypedEditorState;


}

export const Slider: React.FC<SliderBlock> = ({ sliders, richText }) => {


    if (!sliders || sliders.length === 0) return null;

    return (

        <>
            {richText && <RichText className="mb-0 text-red-700 text-center" data={richText} enableGutter={false} />}


            <div className="relative w-[1200px] h-[400px] ml-[370px]">


                <div className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 
                              bg-white text-black p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 duration-200 z-50">
                    ◀
                </div>

                <div className="custom-next absolute right-5 top-1/2 -translate-y-1/2 
                              bg-white text-black p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 duration-200 z-50">
                    ▶
                </div>
                <Swiper

                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation=
                    {{

                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                    }}
                    autoplay={{ delay: 2000 }}
                    loop
                    className="w-[1250px] h-[400px] "


                >


                    {sliders.map((item, index) => {
                        const file = item.media;
                        if (!file) return null;

                        return (
                            <SwiperSlide key={index} >
                                <div className="w-full h-[500px]   relative overflow-hidden">
                                    <Image
                                        width={600}
                                        height={400}
                                        src={file.url}
                                        alt={file.alt || "Slider image"}
                                        className="w-full h-full "

                                    />
                                </div>

                            </SwiperSlide>
                        );
                    })}


                </Swiper >



            </div>

        </>
    )
}