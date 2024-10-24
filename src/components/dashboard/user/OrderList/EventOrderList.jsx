'use client'
import { FaRegUser } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa6";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { RiRefund2Fill } from "react-icons/ri";
import { useSession } from "next-auth/react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import Loading from "@/components/shared/LoadingSpinner/Loading";
import { useState } from "react";
import Link from "next/link";
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";

const EventOrderList = () => {
  const [hoverd, setHoverd] = useState(false)
  const session = useSession();
  const { data: invoice = [], refetch, isLoading } = useQuery({
    queryKey: ["users", session],
    queryFn: () =>
      fetch(`https://event-sphare-server.vercel.app/myAllOrder/${session?.data?.user?.email}`).then((res) =>
        res.json()
      ),
  });
  console.log(invoice);

  const handleRefundRequest = async (id) => {
    const res = await axios.put(`https://event-sphare-server.vercel.app/refundRequest/${id}`)
    console.log(res)
    if (res?.data?.modifiedCount) {
      toast.success('Successfully Refund Requested 😊')
      refetch()
    }
  }
  const handleRefundAlert = () => {
    toast.error('Already Requested for Refund 😊')
  }
  const confirmedOrders = invoice?.filter(order => order?.refundRequested === "Requested");
  const totalConfirmedAmount = confirmedOrders?.reduce((total, order) => total + order?.amount, 0);


  invoice?.length === 0 && <div>
    <h1>You have not purchase any ticket</h1>
  </div>
  return (
    <div className=" text-black ">
      <div className="">
        <div className=" flex justify-between my-5 flex-col md:flex-row mt-4 -z-10">
          <div className="">
            <p className=" font-semibold text-2xl text-black ml-5">Order List</p>
          </div>
          <div className=" flex gap-4 flex-col md:flex-row mt-4 mx-5">
            <div className=" relative  w-full">
              <Input
                type="search"
                placeholder="Search"
                className=" rounded-full pl-10"
              />
              <p className=" absolute top-3 left-4">
                <LuSearch />
              </p>
            </div>
            <div className=" relative w-full   md:mr-2">
              <Input
                type="search"
                placeholder="Filter"
                className=" rounded-full pl-7"
              />
              <p className=" absolute top-3 left-2">
                <CiFilter />
              </p>
            </div>
          </div>
        </div>
        <div className=" flex  gap-12 flex-col md:flex-row mx-5">
          <div className="w-full  rounded-lg overflow-hidden shadow-sm border bg-white  transition-shadow duration-300">
            <div className=" px-4 py-3">
              <div className="flex  justify-between  items-center ">
                <div className="bg-[#f3f2ff] p-5 rounded-xl">
                  <FaRegUser color="black" size={30} />
                </div>
                <div className="">
                  <h2 className="font-bold text-xl text-gray-800">
                    Total Order
                  </h2>
                  <p>{invoice?.length}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg overflow-hidden shadow-sm border bg-white  transition-shadow duration-300">
            <div className=" px-4 py-3">
              <div className="flex  justify-between  items-center ">
                <div className="bg-[#f3f2ff] p-5 rounded-xl">
                  <FaMoneyCheck color="black" size={30} />
                </div>
                <div className="">
                  <h2 className="font-bold text-xl text-gray-800">
                    Total Payment
                  </h2>
                  <p>$ {totalConfirmedAmount}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-lg overflow-hidden shadow-sm border bg-white  transition-shadow duration-300">
            <div className=" px-4 py-3">
              <div className="flex  justify-between  items-center ">
                <div className="bg-[#f3f2ff] p-5 rounded-xl">
                  <FaDiagramSuccessor color="black" size={30} />
                </div>
                <div className="">
                  <h2 className="font-bold text-xl text-gray-800">
                    Total Success
                  </h2>
                  <p>{confirmedOrders?.length} Tickets</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col min-w-full  mt-5 overflow-x-auto">
          <div className=" -my-2 overflow-x-auto ">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 px-2 md:px-4 text-sm font-bold text-black text-left rtl:text-right">
                        <div className="flex items-center gap-x-3">
                          <span>Image</span>
                        </div>
                      </th>
                      <th scope="col" className="py-3.5 px-2 md:px-4 text-sm font-bold text-black text-left rtl:text-right">
                        <span>Title</span>
                      </th>
                      <th scope="col" className="py-3.5 px-2 md:px-4 text-sm font-bold text-black text-left rtl:text-right hidden lg:table-cell">
                        <span>Event Date</span>
                      </th>
                      <th scope="col" className="py-3.5 px-2 md:px-4 text-sm font-bold text-black text-left rtl:text-right">
                        <span>Amount</span>
                      </th>
                      <th scope="col" className="py-3.5 px-2 md:px-4 text-sm font-bold text-black text-left rtl:text-right">
                        <span>Ticket</span>
                      </th>
                      <th scope="col" className="py-3.5 px-2 md:px-4 text-sm font-bold text-black text-left rtl:text-right hidden lg:table-cell">
                        <span>Status</span>
                      </th>
                      <th scope="col" className="py-3.5 px-2 md:px-4 text-sm font-bold text-black text-left rtl:text-right">
                        <span>Refund Request</span>
                      </th>
                      <th scope="col" className="py-3.5 px-2 md:px-4 text-sm font-bold text-black text-left rtl:text-right">
                        <span>Details</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {invoice?.map((invoice) => (
                      <tr key={invoice?._id}>
                        <td className="px-2 md:px-2 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <div className="flex gap-3 flex-col md:flex-row flex-wrap">
                            <Image
                              src={invoice?.eventImage}
                              width={50}
                              height={50}
                              alt="event-image"
                              className="h-[50px] w-[50px] border border-gray-200 rounded-lg"
                            />
                          </div>
                        </td>
                        <td className="px-2 md:px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {invoice?.eventName?.slice(0, 15)}
                        </td>
                        <td className="px-2 md:px-4 py-4 text-sm text-gray-500 whitespace-nowrap hidden lg:table-cell">
                          {new Date(invoice?.eventDate).toLocaleDateString("en-US")}
                        </td>
                        <td className="px-2 md:px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          $ {invoice?.amount}
                        </td>
                        <td className="px-2 md:px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {invoice?.totalTickets} P
                        </td>
                        <td className="px-2 md:px-4 py-4 text-sm text-gray-500 whitespace-nowrap hidden lg:table-cell">
                          <span className="bg-[#cae0e7] text-[#3098ee] px-2 py-1 rounded-3xl">
                            {invoice?.refundRequested === "NotRequested" ? "Success" : invoice?.refundRequested === "Requested" ? "Requested" : "Refunded"}
                          </span>
                        </td>
                        <td
                          onClick={() => {
                            invoice?.refundRequested === "Requested" ? handleRefundAlert() : handleRefundRequest(invoice?._id);
                          }}
                          className="px-2 md:px-4 py-4 text-sm text-gray-500 whitespace-nowrap cursor-pointer"
                        >
                          <span className="px-2 py-1 rounded-3xl">
                            <RiRefund2Fill size={22} className="text-red-500 ml-3 bg-red-200 hover:scale-105 cursor-pointer rounded-full" />
                          </span>
                        </td>
                        <td className="px-2 py-4">
                          <Link href={"/events"} className="flex justify-center items-center relative">
                            <p
                              onMouseEnter={() => setHoverd(true)}
                              onMouseLeave={() => setHoverd(false)}
                              className="border-2 rounded-full p-1 hover:bg-[#1b85db] border-[#1b85db] hover:text-white ease-in duration-300 w-9 "
                            >
                              {hoverd ? (
                                <IoMdArrowRoundForward size={22} className="ease-in duration-300" />
                              ) : (
                                <MdArrowOutward size={22} className="ease-in duration-300" />
                              )}
                            </p>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventOrderList;
