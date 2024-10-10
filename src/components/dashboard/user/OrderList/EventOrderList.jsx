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

const EventOrderList = () => {

  const { data:invoice} = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`https://event-sphare-server.vercel.app/orders`).then((res) =>
        res.json()
      ),
  });
console.log(invoice);

  const confirmedOrders = invoice?.filter(order => order?.status === "Completed");


  const totalConfirmedAmount = confirmedOrders?.reduce((total, order) => total + order?.amount, 0);

  return (
    <div className=" text-black flex container mx-auto ml-4">
      {/* <div className=" w-[300px]">Order</div> */}
      <div className="">
        <div className=" flex justify-between my-5 flex-col md:flex-row mt-4 -z-10">
          <div className="">
            <p className=" font-semibold text-2xl text-black ml-5">Order List</p>
          </div>
          <div className=" flex gap-4 flex-col md:flex-row mt-4 mx-5">
            <div className=" relative  md:w-[200px]">
              <Input
                type="search"
                placeholder="Search"
                className=" rounded-full pl-10"
              />
              <p className=" absolute top-3 left-4">
                <LuSearch />
              </p>
            </div>
            <div className=" relative md:w-[200px]   md:mr-2">
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
          <div className="md:w-[250px]  rounded-lg overflow-hidden shadow-sm border bg-white  transition-shadow duration-300">
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
          <div className="md:w-[250px] rounded-lg overflow-hidden shadow-sm border bg-white  transition-shadow duration-300">
            <div className=" px-4 py-3">
              <div className="flex  justify-between  items-center ">
                <div className="bg-[#f3f2ff] p-5 rounded-xl">
                  <FaMoneyCheck color="black" size={30} />
                </div>
                <div className="">
                  <h2 className="font-bold text-xl text-gray-800">
                    Total Payment
                  </h2>
                  <p>{totalConfirmedAmount}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[250px] rounded-lg overflow-hidden shadow-sm border bg-white  transition-shadow duration-300">
            <div className=" px-4 py-3">
              <div className="flex  justify-between  items-center ">
                <div className="bg-[#f3f2ff] p-5 rounded-xl">
                  <FaDiagramSuccessor color="black" size={30} />
                </div>
                <div className="">
                  <h2 className="font-bold text-xl text-gray-800">
                    Total Success
                  </h2>
                  <p>{confirmedOrders?.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col   mt-5">
          <div className="-mx-4 -my-2 overflow-x-auto ">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 md:px-4 text-sm font-normal text-left rtl:text-right text-gray-500 -ml-2"
                      >
                        <div className="flex items-center gap-x-3 ">
                          <span>Invoice No</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="md:px-4  py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Event info</span>
                      </th>

                      <th
                        scope="col"
                        className="md:px-4 px-2  py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Booking Date</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="md:px-4  pl-3 px-2  py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Ammount</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="md:px-4  pl-3 px-2  py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>orderdBy</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="md:px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Refund
                      </th>

                      <th
                        scope="col"
                        className=" pl-5 md:px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200  text-sm">
                    {invoice?.map((invoice) => (
                      <tr key={invoice?._id}>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap ml-2">
                          {(invoice?._id).slice(5,10)}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          <div className=" flex gap-3 flex-col md:flex-row flex-wrap">
                            <Image
                              src={invoice?.eventImage}
                              width={50}
                              height={50}
                              alt="fdsg"
                              className=" border border-gray-200 rounded-lg"
                            />
                            <div>
                              <p className=" text-black text-wrap">{invoice?.eventName}</p>
                              <p className=" text-black">
                                {invoice?.eventPlace}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="md:px-4 px-2 py-4 text-sm text-gray-500  whitespace-nowrap text-wrap">
                          {invoice?.date}
                        </td>
                        <td className="md:px-4 px-2 py-4 text-sm text-gray-500  whitespace-nowrap text-wrap">
                          {invoice?.amount}
                        </td>
                        <td className="md:px-4 px-2 py-4 text-sm text-gray-500  whitespace-nowrap text-wrap">
                          {invoice?.orderdBy?.email}
                        </td>
                        <td className="md:px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {invoice?.refund}
                        </td>
                  
                        <td className="md:px-4 py-4 text-sm whitespace-nowrap flex items-center md:gap-2 mt-8 md:mt-0     my-auto text-left mr-3">
                          <div className=" text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full gap-x-1 ${
                                invoice?.status === "Pending" &&
                                "bg-yellow-100/60 text-yellow-500"
                              }  ${
                                invoice?.status === "Completed" &&
                                "bg-emerald-100/60 text-emerald-500"
                              } ${
                                invoice?.status === "Rejected" &&
                                "bg-red-100/60 text-red-500"
                              }`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full
                                                ${
                                                  invoice?.status ===
                                                    "Pending" && "bg-yellow-500"
                                                } ${
                                  invoice?.status === "Completed" &&
                                  "bg-green-500"
                                } ${
                                  invoice?.status === "Rejected" && "bg-red-500"
                                } `}
                              ></span>
                              <h2 className="text-sm font-normal ">
                                {invoice?.status}
                              </h2>
                            </div>
                          </div>
                          <div className=" cursor-pointer">
                            <BsThreeDotsVertical />
                          </div>
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
