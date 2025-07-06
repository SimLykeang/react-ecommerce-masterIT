import axios from "axios";
import { useEffect, useState } from "react";

const useGetOneProduct = (id) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(rout);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.in/api/products/${id}`
        );
        setData(res.data.product);
        console.log(res.data.product);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return {
    data,
    isLoading,
  };
};
export default useGetOneProduct;
