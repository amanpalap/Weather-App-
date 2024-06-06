import React from 'react'
import { MapPin, CircleGauge } from 'lucide-react'
function Card({
    src,
    description,
    temp,
    feelLike,
    place,
}
) {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className='flex flex-wrap items-center w-full shadow-xl backdrop-blur-3xl justify-enenly rounded-3xl'>
            <div className='flex flex-wrap items-center justify-center w-full'>
                <div className='flex flex-wrap items-center w-full md:w-2/3 justify-evenly'>
                    <div className='flex flex-wrap items-center justify-center w-1/3 -mx-5'>
                        <img className="w-full" src={src}
                            alt="Loading..." />
                    </div>
                    <div className=''>
                        <h1 className='font-bold tracking-tighter font-ui-monospace text-8xl'>|</h1>

                    </div>
                    <div className='flex flex-row flex-wrap items-center justify-center w-1/2'>
                        <h1 className='font-bold tracking-tighter font-ui-monospace text-8xl'> {Math.floor(temp - 273)}°C</h1>
                    </div>
                    <div className='w-2/3 mt-4 border-b-4 md:mt-0 md:collapse'></div>
                </div>
                <div className='flex flex-wrap items-center w-full py-3 md:w-1/3'>
                    <div className='flex flex-wrap justify-center w-full px-5 py-2 border-white md:px-0'>
                        <h1 className='flex items-center w-full font-serif text-3xl font-extrabold tracking-tighter text-black md:mb-5 md:mt-0 text-start gap-x-2' ><MapPin color='black' />{place.toUpperCase()}</h1>
                    </div>
                    <div className='flex flex-wrap items-center justify-end w-full pr-6'>
                        <h1 className='w-full text-2xl font-bold tracking-tight text-right font-Times' >{capitalizeFirstLetter(description)}</h1>
                        <h1 className='w-1/2 text-xl font-bold tracking-tight text-right text-black border-t-2 md:w-full font-monosapace' >Feels like : {Math.floor(feelLike - 273)}°C</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
