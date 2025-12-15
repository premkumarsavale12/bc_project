import React from "react";
import RichText from "@/components/RichText";
import { type DefaultTypedEditorState } from '@payloadcms/richtext-lexical';
import { Button } from "@payloadcms/ui";
import type { Media as MediaType } from "@/payload-types";
import { Media } from "@/components/Media";




interface RightProps {
    items: {
        media: MediaType;
        richText: DefaultTypedEditorState;
        label: string;
        url: string;
    }[];
}

export const Right: React.FC<RightProps> = ({ items = [] }) => {



    return (

        <div className="container mx-auto ">

            <div className="flex flex-col gap-10">

                {items.map((item, index) => {


                    const isEven = index % 2 === 0

                    return (

                        <div

                            key={index}

                            className={`flex flex-col md:flex-row items-start gap-6 

                         ${!isEven ? "" : "md:flex-row-reverse"}`}



                        >

                            <div className="w-full md:w-1/2">

                                {item.media && <Media resource={item.media} />}

                            </div>


                            <div className="w-full md:w-1/2 flex flex-col gap-4">
                                {item.richText && (
                                    <RichText data={item.richText} enableGutter={false} className="text-black" />
                                )}

                                {item.label && (
                                    <Button className="h-12 w-40 bg-blue-500 text-white rounded-md">
                                        {item.label}
                                    </Button>
                                )}


                            </div>
                        </div>

                    )
                })}

            </div>

        </div>


    );
};
