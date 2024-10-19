// import React from "react";
// import Header from "../Componetns/Header/Header";
// import ItemNames from "../Componetns/ItemNames/ItemNames";
// import DetailProduct from "../Componetns/DetailProduct/DetailProduct";
// import CustomerReview from "../Componetns/CustomerReview/CustomerReview";
// import { useLocation } from "react-router-dom";

// const SingleProduct = () => {
//   const location = useLocation();
//   const { item } = location.state || {};
//   return (
//     <div>
//       <Header />
//       <ItemNames />
//       <DetailProduct item={item} />
//       <CustomerReview />
//     </div>
//   );
// };

// export default SingleProduct;

import React, { useEffect, useState } from "react";
import Header from "../Componetns/Header/Header";
import ItemNames from "../Componetns/ItemNames/ItemNames";
import DetailProduct from "../Componetns/DetailProduct/DetailProduct";
import CustomerReview from "../Componetns/CustomerReview/CustomerReview";
import { useLocation, useParams } from "react-router-dom";
import { data } from "../Data/data";

const SingleProduct = () => {
  const { id } = useParams();

  const [newData, setNewData] = useState();

  useEffect(() => {
    const curretData = data.filter((item) => item.id == id);
    setNewData(curretData);
    console.log(curretData, "heloooooooooo");
  }, [id]);
  return (
    <div>
      <Header />
      <ItemNames />
      {newData?.length > 0 ? (
        <DetailProduct item={newData[0]} />
      ) : (
        <p>Item not found!</p>
      )}
      <CustomerReview />
    </div>
  );
};

export default SingleProduct;
