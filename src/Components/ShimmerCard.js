import React from 'react'

const ShimmerCard = () => {
    return (
        <div
            data-testid='shimmer'
            className='flex flex-wrap justify-center max-w-[90%] w-full my-0 mx-auto'
        >
            {Array(6)
                .fill('')
                .map((item, index) => (
                    <div
                        key={index}
                        className='h-[70px] w-[90%] bg-[#d3d3d3]  m-2 rounded-lg cursor-pointer animate-pulse  transition duration-[0.3s] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]   '
                    >

                    </div>
                ))}
        </div>
    )
}

export default ShimmerCard;