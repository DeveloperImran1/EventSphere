import React from 'react';
import { LuFilter } from 'react-icons/lu';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const Top = ({ handleSearch, handleRoleFilter }) => {
    return (
        <div className="flex gap-x-2">
            <div className="md:w-1/3">
                <Input
                    placeholder='Type Name / Email'
                    onChange={(e) => handleSearch(e.target.value)} // Search handler
                />
            </div>
            <div className="border rounded-md">
                <Select onValueChange={handleRoleFilter}> {/* Role filter handler */}
                    <SelectTrigger className="w-[180px] justify-around">
                        <LuFilter className='text-xl' />
                        <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All</SelectItem> {/* To show all users */}
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="organizer">Organizer</SelectItem>
                        <SelectItem value="booked">Booked</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default Top;
