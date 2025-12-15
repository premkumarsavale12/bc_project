

"use client"
import React, { useEffect, useState } from 'react'

const TopButton = () => {

    const [visiable, setVisiable] = useState(true);

    const scrollThreshold = 400;

    const toggleVisibility = () => {

        if (window.pageXOffset > scrollThreshold) {
            setVisiable(true)
        }
        else {

            setVisiable(false);
        }
    }


    const scrollToTop = () => {

        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {


        window.addEventListener(" scroll", toggleVisibility)
        return () => {
            window.removeEventListener(" scroll", toggleVisibility)
        }
    }, [])


    return (
        <>

            <div
                className="scroll-to-top"
                style={{ display: visiable ? 'block' : 'none', marginLeft:'40px' , marginTop:'-40px'}}
            >
                <button
                    onClick={scrollToTop}
                    title="Go to top"
                    className="bg-black text-white 
                     -mt-[20px]
                  
                   w-14 h-14 
                     flex items-center justify-center
                     rounded-full 
                   text-2xl
                      shadow-lg
                       hover:bg-gray-800
                        marker: transition"
                >
                    ⬆️
                </button>
            </div>
        </>
    )
}

export default TopButton;