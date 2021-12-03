import React, { useEffect } from "react";
import Cards from "./cardGroup";

const ProductPage = ({ data }) => {
  return (
    <>
      <div className="topnav">
        <a className="active" href="#">
          Product List
        </a>
      </div>
      <div
        style={{ marginTop: "10px", marginLeft: "10px", marginRight: "10px" }}
      >
        <Cards data={data} />
      </div>
    </>
  );
};

export default ProductPage;
