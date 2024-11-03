import AdminInfo from "@/components/dashboard/admin/AdminInfo";



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
