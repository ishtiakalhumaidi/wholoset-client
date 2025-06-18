const getMyOrder = async (email, accessToken) => {
  const res = await fetch(`http://localhost:3000/product/${email}/orders`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  return data;
};

export default getMyOrder;
