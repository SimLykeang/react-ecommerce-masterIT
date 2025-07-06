import axios from "axios";
import { useEffect, useState } from "react";

const useGetAllProduct = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.in/api/products");
        setData(res.data.products);
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
export default useGetAllProduct;
