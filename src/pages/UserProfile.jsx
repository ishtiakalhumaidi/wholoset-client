import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, error } = useQuery({
    queryKey: ["userProfile", user?.email],
    queryFn: async () => {
      if (!user?.email) return null;
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p className="p-6 text-center">Loading...</p>;
  if (error)
    return (
      <p className="p-6 text-center text-red-500">Failed to load user data.</p>
    );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-base-200 rounded-xl shadow-md mt-16">
      <title>My Profile | Wholoset</title>

      <div className="flex flex-col items-center gap-4">
        <div className="avatar">
          <div className="w-28 h-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 overflow-hidden">
            <img
              src={user?.photoURL || "/default-avatar.png"}
              alt={user?.displayName || "User Avatar"}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <h1 className="text-3xl font-bold">{user?.displayName || "No Name"}</h1>
        <p className="text-gray-500">{user?.email || "No Email"}</p>
        <p className="text-sm text-gray-400 mt-1">
          Role: <span className="font-semibold">{data?.role || "N/A"}</span>
        </p>

        {/* Use createdAt and lastLogin as ISO strings */}
        {data?.createdAt && (
          <p className="text-sm text-gray-500 mt-2">
            Profile created on:{" "}
            {new Date(data.createdAt).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        )}

        {data?.lastLogin && (
          <p className="text-sm text-gray-500">
            Last login:{" "}
            {new Date(data.lastLogin).toLocaleString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
