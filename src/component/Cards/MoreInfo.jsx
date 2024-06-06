import React from 'react'
import { CircleGauge, Wind, Droplets, Cloudy, Eye, Sunrise, Sunset } from 'lucide-react'


function MoreInfo({
    pressure,
    humidity,
    visibility,
    wind,
    clouds,
    sunRise,
    sunSet,
}) {

    function formatUnixTimestampToHoursAndMinutes(timestamp) {
        var milliseconds = timestamp * 1000;
        var dateObject = new Date(milliseconds);
        var hours = (dateObject.getUTCHours()+5)%24;
        var minutes = (dateObject.getUTCMinutes()+30)%60;
        var formattedTime = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
    
        return formattedTime;
    }

    return (
        <div className='flex flex-wrap items-center justify-center w-full text-xl gap-y-4 md:p-4 text-slate-200'>
            <div className='flex flex-wrap items-center justify-center w-full font-mono font-semibold tracking-tighter md:pr-4 md:w-1/2 gap-y-3'>
                <div className='flex flex-wrap items-center justify-center w-full backdrop-blur-3xl rounded-2xl'>
                    <div className='flex flex-wrap w-full py-2 justify-evenly'>
                        <h1 className='flex flex-wrap items-center w-1/2 pl-6 gap-x-2 text-start'><CircleGauge />Pressure</h1>
                        <h1 className='w-1/2 pr-6 text-end'>{pressure} hPa</h1>
                    </div>

                </div>
                <div className='flex flex-wrap items-center justify-center w-full backdrop-blur-3xl rounded-2xl'>

                    <div className='flex flex-wrap w-full py-2 justify-evenly'>
                        <h1 className='flex flex-wrap items-center w-1/2 pl-6 gap-x-2 text-start'><Wind />Wind</h1>
                        <h1 className='w-1/2 pr-6 text-end'>{Math.round(wind * 1.60934)} km/h</h1>
                    </div>

                </div>
                <div className='flex flex-wrap items-center justify-center w-full backdrop-blur-3xl rounded-2xl'>

                    <div className='flex flex-wrap w-full py-2 justify-evenly'>
                        <h1 className='flex flex-wrap items-center w-1/2 pl-6 gap-x-2 text-start'><Droplets />Humidity</h1>
                        <h1 className='w-1/2 pr-6 text-end'>{humidity}%</h1>
                    </div>

                </div>
                <div className='flex flex-wrap items-center justify-center w-full backdrop-blur-3xl rounded-2xl'>

                    <div className='flex flex-wrap w-full py-2 justify-evenly'>
                        <h1 className='flex flex-wrap items-center w-1/2 pl-6 gap-x-2 text-start'><Cloudy />Clouds</h1>
                        <h1 className='w-1/2 pr-6 text-end'>{clouds}%</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap items-center justify-center w-full font-mono font-semibold tracking-tighter md:pr-4 md:w-1/2 gap-y-3'>
                <div className='flex flex-wrap items-center justify-center w-full backdrop-blur-3xl rounded-2xl'>
                    <div className='flex flex-wrap w-full py-2 justify-evenly'>
                        <h1 className='flex flex-wrap items-center w-1/2 pl-6 gap-x-2 text-start'><Eye />Visibility</h1>
                        <h1 className='w-1/2 pr-6 text-end'>{Math.round(visibility/1000)} km</h1>
                    </div>
                </div>
                <div className='flex flex-wrap items-center justify-center w-full backdrop-blur-3xl rounded-2xl'>
                    <div className='flex flex-wrap items-center justify-center w-1/2 py-2 gap-y-2'>
                        <h1 className='flex flex-wrap items-center justify-center w-full text-center text-black'>Sunrise</h1>
                        <div className='flex flex-wrap items-center justify-center w-full'><Sunrise size={65} /></div>
                        <h1 className='flex flex-wrap items-center justify-center w-full text-lg text-center'>{formatUnixTimestampToHoursAndMinutes(sunRise)}</h1>
                    </div>
                    <div className='flex flex-wrap items-center justify-center w-1/2 py-2 gap-y-2'>
                        <h1 className='flex flex-wrap items-center justify-center w-full text-center text-black'>Sunset</h1>
                        <div className='flex flex-wrap items-center justify-center w-full'><Sunset size={65}/></div>
                        <h1 className='flex flex-wrap items-center justify-center w-full text-lg text-center'>{formatUnixTimestampToHoursAndMinutes(sunSet)}</h1>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MoreInfo
