import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSingleProduct = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${productID}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [product];
};

export default useSingleProduct;
