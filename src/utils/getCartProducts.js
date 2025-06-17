const getCartProducts = async (email) => {
  const res = await fetch(`http://localhost:3000/product/${email}/cart`);
  const data = await res.json();
  return data;
};

export default getCartProducts;
