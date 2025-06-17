import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext"; // update path as needed
import Loader from "../components/common/Loader";

const MyOrder = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`/product/${user.email}/orders`)
        .then((res) => {
          setOrders(res.data);
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
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border border-gray-300 text-left">
                  Product
                </th>
                <th className="py-3 px-4 border border-gray-300 text-center">
                  Quantity
                </th>
                <th className="py-3 px-4 border border-gray-300 text-right">
                  Price
                </th>
                <th className="py-3 px-4 border border-gray-300 text-right">
                  Total
                </th>
                <th className="py-3 px-4 border border-gray-300 text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="flex items-center gap-4 py-3 px-4 border border-gray-300">
                    <img
                      src={order.image}
                      alt={order.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <span className="font-medium">{order.name}</span>
                  </td>
                  <td className="text-center py-3 px-4 border border-gray-300">
                    {order.quantity}
                  </td>
                  <td className="text-right py-3 px-4 border border-gray-300">
                    ${order.price?.toFixed(2)}
                  </td>
                  <td className="text-right py-3 px-4 border border-gray-300">
                    ${(order.price * order.quantity).toFixed(2)}
                  </td>
                  <td className="text-center py-3 px-4 border border-gray-300">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === "Delivered"
                          ? "bg-green-200 text-green-800"
                          : order.status === "Shipped"
                          ? "bg-blue-200 text-blue-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {order.status}
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
