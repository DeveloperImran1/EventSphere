"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Top from "@/components/dashboard/admin/UserManagePage/Top";
import UserManageTable from "@/components/dashboard/admin/UserManagePage/UserManageTable";

const UserManage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all"); 

  const handleBlock = (userId) => {
    console.log(`User with ID ${userId} blocked.`);
  };

  // Fetch users from the API
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:9000/user");
      setUsers(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Filtered users based on search and role filter
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole =
      roleFilter === "all" ||
      user.role === roleFilter ||
      (roleFilter === "booked" && user.block === true); 

    return matchesSearch && matchesRole;
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="font-sans">
      {/* Input And Filter */}
      <Top
        handleSearch={setSearchQuery}
        handleRoleFilter={setRoleFilter} 
      />
      {/* Table */}
      <UserManageTable users={filteredUsers} handleBlock={handleBlock} />
    </div>
  );
};

export default UserManage;
