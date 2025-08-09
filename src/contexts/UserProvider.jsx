import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [currentUser, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (!user?.email) return; 

    async function fetchUser() {
      setLoading(true);
      try {
        const res = await axiosSecure.get(`/users/${user.email}`);
        setUser(res.data);
      } catch (error) {
        setUser(null);
        console.error("Failed to fetch user data", error);
      }
      setLoading(false);
    }

    fetchUser();
  }, [user?.email, axiosSecure]);

  return (
    <UserContext.Provider value={{ currentUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
