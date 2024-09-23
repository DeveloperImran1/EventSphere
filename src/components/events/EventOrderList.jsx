import { FaRegUser } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa6";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image";
import { Input } from "../ui/input";

const EventOrderList = () => {
    const invoices = [
        {
            invoice: "1",
            eventImage: "/gfffff",
            eventName: "Reactive Conference",
            eventPlace: "USA",
            status: "Pending",
            Amount: "$250.00",
            Date: "2-10-2024",
            Refund: "Yes",
        },
        {
            invoice: "2",
            eventImage: "/fgfgfgfgfg",
            eventName: "Reactive Conference",
            eventPlace: "USA",
            status: "Complete",
            Amount: "$250.00",
            Date: "2-10-2024",
            Refund: "Yes",
        },
        {
            invoice: "3",
            eventImage: "/fgd",
            eventName: "Reactive Conference",
            eventPlace: "USA",
            status: "Rejected",
            Amount: "$250.00",
            Date: "2-10-2024",
            Refund: "Yes",
        },


    ]
    return <div className=" flex mx-auto p-4 text-black">
        <div className=" w-[350px]">
            hg
        </div>
        <div className="">
            <div className=" flex justify-between my-5">
                <div className="">
                    <p className=" font-semibold text-2xl text-black">Order List</p>
                    <p>Event <span className="bg-green-500 h-1.5 w-1.5 rounded-full"></span></p>
                </div>
             <div className=" flex gap-4">
             <div className=" relative">
                    <Input type="search" placeholder="Search"  className=" rounded-full pl-10"/>
                    <p className=" absolute top-3 left-4"><LuSearch /></p>
                </div>
                <div className=" relative w-[100px]">
                    <Input type="search" placeholder="Filter"  className=" rounded-full pl-7"/>
                    <p className=" absolute top-3 left-2"><CiFilter /></p>
                </div>
             </div>
            </div>
            <div className=" flex  gap-10">
                <div className="w-[230px] rounded-lg overflow-hidden shadow-sm border bg-white  transition-shadow duration-300">
                    <div className=" px-4 py-3">
                        <div className="flex  justify-between  items-center ">
                            <div className="bg-[#f3f2ff] p-5 rounded-xl">
                                <FaRegUser color="black" size={30} />
                            </div>
                            <div className="">
                                <h2 className="font-bold text-xl text-gray-800">Total Order</h2>
                                <p>158</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[250px] rounded-lg overflow-hidden shadow-sm border bg-white  transition-shadow duration-300">
                    <div className=" px-4 py-3">
                        <div className="flex  justify-between  items-center ">
                            <div className="bg-[#f3f2ff] p-5 rounded-xl">
                                <FaMoneyCheck color="black" size={30} />

                            </div>
                            <div className="">
                                <h2 className="font-bold text-xl text-gray-800">Total Payment</h2>
                                <p>158</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[250px] rounded-lg overflow-hidden shadow-sm border bg-white  transition-shadow duration-300">
                    <div className=" px-4 py-3">
                        <div className="flex  justify-between  items-center ">
                            <div className="bg-[#f3f2ff] p-5 rounded-xl">
                                <FaDiagramSuccessor color="black" size={30} />

                            </div>
                            <div className="">
                                <h2 className="font-bold text-xl text-gray-800">Total Success</h2>
                                <p>158</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=" mt-8">
                <Table>
                    <TableHeader >
                        <TableRow>
                            <TableHead >No</TableHead>
                            <TableHead >Event info</TableHead>
                            <TableHead >Booking Date</TableHead>
                            <TableHead >Refund</TableHead>
                            <TableHead >Amount</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.invoice} className="">
                                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                <TableCell className="font-medium">
                                    <div className=" flex gap-3">
                                        <Image src={invoice.eventImage} width={50} height={50} alt="fdsg" className=" border border-gray-200 rounded-lg" />
                                        <div  >
                                            <p className=" text-black">{invoice.eventName}</p>
                                            <p className=" text-black">{invoice.eventPlace}</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="font-medium">{invoice.Date}</TableCell>
                                <TableCell className="font-medium">{invoice.Refund}</TableCell>
                                <TableCell className="">{invoice.Amount}</TableCell>

                                <TableCell className="flex items-center gap-2 mt-3 text-left"> <div className=' text-sm font-medium text-gray-700 whitespace-nowrap'>
                                    <div
                                        className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${invoice.status === 'Pending' &&
                                            'bg-yellow-100/60 text-yellow-500'
                                            }  ${invoice.status === 'Complete' &&
                                            'bg-emerald-100/60 text-emerald-500'
                                            } ${invoice.status === 'Rejected' &&
                                            'bg-red-100/60 text-red-500'
                                            }`}
                                    >
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full
                                                ${invoice.status === 'Pending' && 'bg-yellow-500'
                                                } ${invoice.status === 'Complete' && 'bg-green-500'
                                                } ${invoice.status === 'Rejected' && 'bg-red-500'} `}
                                        ></span>
                                        <h2 className='text-sm font-normal '>{invoice.status}</h2>
                                    </div>
                                </div><div className=" cursor-pointer"> <BsThreeDotsVertical /></div></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>;
    </div>
};

export default EventOrderList;
