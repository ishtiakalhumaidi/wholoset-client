const getMyOrder = async (email) => {
  const res = await fetch(`http://localhost:3000/product/${email}/orders`);
  const data = await res.json();
  return data;
};

export default getMyOrder;
