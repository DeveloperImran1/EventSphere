import AdminInfo from "@/components/dashboard/admin/AdminInfo";

export const metadata = {
  title: "Admin dashboard",
  description: "admin dashboard page, Smart Event Management and Booking Platform",
  keywords: ["admin dashboard","online", "ticket", "selling", "system", "event", "management"]
};

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
