import React from 'react';
import { LuFilter } from 'react-icons/lu';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const Top = () => {
    return (
        <div className="flex gap-x-2">
        <div className="md:w-1/3">
        <Input className="" placeholder='Type Name / Email'/>
        </div>
        <div className="border rounded-md">
            <Select className="">
                <SelectTrigger className="w-[180px] justify-around">
                    <LuFilter className='text-xl' />
                    <SelectValue placeholder="Roll" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">User</SelectItem>
                    <SelectItem value="dark">Organizer</SelectItem>
                </SelectContent>
            </Select>
        </div>
    </div>
    );
};

export default Top;