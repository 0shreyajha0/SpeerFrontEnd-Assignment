import React from 'react'
import { useParams } from 'react-router-dom';
import { SlCallIn } from "react-icons/sl";
import { SlCallOut } from "react-icons/sl";
import { RiDirectionLine } from "react-icons/ri";
import { MdOutlineAddIcCall } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoMdArchive } from "react-icons/io";
import { TbPhoneCalling } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { useState, useEffect } from 'react';
import ShimmerDetails from './ShimmerDetails';


const CallDetails = () => {

    const { callId } = useParams();
    // console.log(callId);
    const API = "https://cerulean-marlin-wig.cyclic.app/activities/";
    const [calldata, setCalldata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(API + callId);
                const json = await data.json();
                setCalldata(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [callId]);






    if (!calldata) {
        <div>Loading</div>
    }
    // Handeling the Date & Time 
    const dateString = calldata.created_at;
    const dateObject = new Date(dateString);


    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();


    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();


    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

    const date = `${year}-${month}-${day}`;
    const time = `${formattedHours}:${minutes} ${ampm}`

    return calldata.length === 0 ? <ShimmerDetails /> : (
        <div className=' w-[90%] m-auto mt-2 flex flex-col gap-2 p-2 mb-10'>
            <div className='flex text-xl rounded-md p-2 gap-5 border-[1px] border-solid border-gray-400'>
                <p className='text-lg font-semibold text-gray-400'>Call id :</p>
                <p>{callId}</p>
            </div>

            <div className='flex text-xl rounded-md p-2 gap-5 border-[1px] border-solid border-gray-400'>
                <p className='text-lg font-semibold text-gray-400'>Callee's Number: </p>
                <div className='flex gap-2'>
                    <p className='pt-1'><SlCallIn /></p>
                    <p className='font-mono'>{calldata.to} </p>
                </div>
            </div>
            <div className='flex text-xl rounded-md p-2 gap-5 border-[1px] border-solid border-gray-400'>
                <p className='text-lg font-semibold text-gray-400'>Callee's Number: </p>
                <div className='flex gap-2'>
                    <p className='pt-1'><SlCallOut /></p>
                    <p className='font-mono'>{calldata.from} </p>
                </div>
            </div>
            <div className='flex text-xl rounded-md p-2 gap-5 border-[1px] border-solid border-gray-400'>
                <p className='text-lg font-semibold text-gray-400'>Aircall Number: </p>
                <div className='flex gap-2'>
                    <p className='pt-1'><MdOutlineAddIcCall /></p>
                    <p className='font-mono'>{calldata.via} </p>
                </div>
            </div>

            <div className='flex text-xl rounded-md p-2 gap-5 border-[1px] border-solid border-gray-400'>
                <p className='text-lg font-semibold text-gray-400'>Call Direction: </p>
                <div className='flex gap-2'>
                    <p className='pt-1'><RiDirectionLine /></p>
                    <p className='font-mono'>{calldata.direction} </p>
                </div>
            </div>


            <div className='flex text-xl rounded-md p-2 gap-5 border-[1px] border-solid border-gray-400'>
                <p className='text-lg font-semibold text-gray-400'>Call Duraction: </p>
                <div className='flex gap-2'>
                    <p className='pt-1'><IoMdTime /></p>
                    <p className='font-mono'>{calldata.duration} sec </p>
                </div>
            </div>

            <div className='flex justify-between'>
                <div className='flex rounded-md p-2 gap-5 border-[1px] border-solid border-gray-400 w-[48%]'>
                    <p className='pt-1 text-xl'><IoMdArchive /></p>
                    <p className='text-md font-semibold font-mono'>{calldata.is_archived ? <p>Non Archived</p> : <p> Archived</p>}</p>

                </div>
                <div className='flex rounded-md p-2 gap-5 border-[1px] border-solid border-gray-400 w-[48%]'>
                    <p className='pt-1 text-xl'><TbPhoneCalling /></p>
                    <p className='text-md font-semibold font-mono'>{calldata.call_type}</p>
                </div>
            </div>
            <div className='flex text-xl rounded-md p-2 gap-5 border-[1px] border-solid border-gray-400'>
                <div className='flex gap-2 text-xl'>
                    <p className='pt-1'><MdDateRange /></p>
                    <p className='text-md text-lg font-semibold text-gray-400 font-mono'>{date}</p>
                </div>
                <div className='flex gap-2 text-xl'>

                    <p className='pt-1'><GiSandsOfTime /> </p>
                    <p className='text-md font-semibold font-mono text-lg  text-gray-400'>{time}</p>
                </div>
            </div>

        </div>
    )
}

export default CallDetails;