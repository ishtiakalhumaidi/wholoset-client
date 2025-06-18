import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";

const UserProfile = () => {
  const { user } = useContext(AuthContext);



  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-base-200 p-6 rounded-xl shadow-sm space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={user?.photoURL || "/default-avatar.png"}
                alt="User Avatar"
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold">{user?.displayName}</h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserProfile;
