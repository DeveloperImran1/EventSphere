import AdminInfo from "@/components/dashboard/admin/AdminInfo";
import React from "react";

const AdminContainer = () => {
  return (
    <div>
      {/* User Info Section */}
      <div className="flex-grow">
        <AdminInfo />
      </div>
    </div>
  );
};

export default AdminContainer;
