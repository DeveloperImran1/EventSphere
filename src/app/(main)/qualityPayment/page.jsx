"use client"
import QualityPaymentGetway from '@/components/qualityPaymentGetway/QualityPaymentGetway';
import Loading from '@/components/shared/LoadingSpiner/Loading';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {  useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const QualityPayment = ({ params }) => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [quality, setQuality] = useState()
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        const fetchEventsData = async () => {
            try {
                const response = await axios.get(`https://event-sphare-server.vercel.app/getQuality/${id}`)
                // console.log(response)
                setQuality(response.data)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching event data:", error)
                setLoading(false)
            }
        }
        fetchEventsData()
    }, [id])
    console.log(quality)

    if (loading) {
        return <Loading />
    }
    return (
        <div className='my-20'>
            <QualityPaymentGetway quality={quality} />
        </div>
    );
};

export default QualityPayment;