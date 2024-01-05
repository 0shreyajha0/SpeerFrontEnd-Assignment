import React from 'react'
import { MdOutlinePhoneCallback } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { IoMdArchive } from "react-icons/io";
import { Link } from 'react-router-dom';

const Card = ({ call }) => {
    
    const dateString = call.created_at;
    const dateObject = new Date(dateString);

    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

    const time = `${formattedHours}:${minutes} ${ampm}`
    console.log(call.is_archived);
    call.is_archived = true;

    // Handeling the Archieved 

    const API1 = "https://charming-bat-singlet.cyclic.app//https://cerulean-marlin-wig.cyclic.app/activities" + call.id;

    const handleArch = async () => {
        try {
            const response = await fetch(API1, {
                method: "PATCH",
                body: JSON.stringify({
                    is_archived: true
                }),
                headers: {
                    "Content-type": "application/json",
                },
            });
    
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error during PATCH request:", error);
        }
    };
    


    return call.is_archived ? <div className='w-[90%] flex justify-between p-5 mt-2 mb-2 m-auto rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-[70px] '>
        <div className='flex gap-5'>
            <div className='text-3xl flex flex-col justify-center text-red-400'> <MdOutlinePhoneCallback /></div>
            <div className='flex flex-col justify-center '>
                <p className='text-xl font-semibold font-mono'>{call?.via} </p>
                <p className='text-gray-500 font-semibold'> Tried to reach you susanta</p>

            </div>

        </div>
        <div className='flex flex-col justify-center font-semibold text-gray-500'>
            {time}
        </div>
        <div className='flex flex-col text-xl justify-center gap-2'>
            <Link to={"/activities/" + call.id}><p className='text-green-500'><GrView />  </p></Link>

            <button onClick={() => handleArch()}  ><p className='text-amber-800'><IoMdArchive /></p></button>
           
        </div>
    </div> :
        <p></p>
}

export default Card