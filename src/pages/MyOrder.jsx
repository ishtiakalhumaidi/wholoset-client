import React, { useEffect, useState, useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";
import Loader from "../components/common/Loader";
import getMyOrder from "../utils/getMyOrder";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      getMyOrder(user.email)
        .then((res) => {
          setOrders(res);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching orders:", err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-base-200 rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">My Orders</h2>
      {orders.length === 0 ? (
        <p className="text-center text-gray-500">You have no orders yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-sm border border-base-300">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-base-200 text-base font-semibold">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3 text-center">Quantity</th>
                <th className="px-4 py-3 text-right">Price</th>
                <th className="px-4 py-3 text-right">Total</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="bg-base-100 hover:bg-base-200 transition duration-150"
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 flex items-center gap-3">
                    <img
                      src={order.image || "https://via.placeholder.com/64"}
                      alt={order.name}
                      className="w-14 h-14 object-cover rounded"
                    />
                    <span className="font-medium">{order.name}</span>
                  </td>
                  <td className="text-center px-4 py-3">{order.quantity}</td>
                  <td className="text-right px-4 py-3">
                    ${order.price?.toFixed(2)}
                  </td>
                  <td className="text-right px-4 py-3">
                    ${(order.price * order.quantity).toFixed(2)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "N/A"}
                  </td>
                  <td className="text-center px-4 py-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "Delivered"
                          ? "bg-green-200 text-green-800"
                          : order.status === "Shipped"
                          ? "bg-blue-200 text-blue-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {order.status || "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrder;
