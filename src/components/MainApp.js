import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/actions/countActions";
import AppRoutes from "./AppRoutes";

export default function MainApp() {
  const data = useSelector((product) => product.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return <AppRoutes data={data} />;
}
