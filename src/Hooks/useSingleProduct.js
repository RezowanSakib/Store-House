import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useSingleProduct = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://afternoon-springs-85105.herokuapp.com/product/${productID}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return [product];
};

export default useSingleProduct;
