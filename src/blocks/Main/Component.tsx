import RichText from "@/components/RichText"
import Image from "next/image"

import type { Main } from "@/payload-types"

export const MainBlock: React.FC<Main> = ({ media, richText }) => {

    const activeMedia = (media && typeof media === 'object') ? media : null;

    return (

        <>


            {activeMedia && activeMedia.url && (



                <div className="mt-8 flex justify-center">

                    <Image
                        src={activeMedia.url}
                        alt={activeMedia.alt || "Main image"}
                        className="w-full max-w-5xl rounded-xl shadow-xl object-contain "
                        width={activeMedia.width || 1000}
                        height={activeMedia.height || 1000}
                    />

                </div>
            )}

            <div>
                {richText && <RichText className="mb-0 text-black text-center" data={richText} enableGutter={false} />}
            </div>
        </>

    )

}


