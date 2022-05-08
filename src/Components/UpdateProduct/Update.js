import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { productID } = useParams();

  const [product, setProduct] = useState({});
  //http://localhost:5000/product/${productID}
  //http://localhost:5000/product/${productID}
  useEffect(() => {
    fetch(`http://localhost:5000/product/${productID}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>{/* <h3>this is update {product.suplier}</h3> */}</div>;
};

export default Update;
