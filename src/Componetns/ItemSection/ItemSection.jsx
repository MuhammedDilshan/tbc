import React, { useEffect, useState } from "react";
import "./ItemSection.css";
import { data } from "../../Data/data";
import { Link } from "react-router-dom";

const ItemSection = () => {
  const pathname = window.location.pathname;

  const [allData, setAllData] = useState([]);
  useEffect(() => {
    if (pathname === "/") {
      setAllData(data?.slice(0, 4));
    } else {
      setAllData(data);
    }
  }, []);

  return (
    <div className="itemSection">
      <div className="item_list">
        {allData.map((item, index) => {
          return (
            <Link
              className="item"
              key={index}
              to={{
                pathname: `/single/${item.id}`,
              }}
            >
              <div className="img_container">
                <img src={item.image} alt={item.image_name} />
              </div>
              <div className="detail_container">
                <h6>{item.image_name}</h6>
                <span>{item.rupees}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ItemSection;
