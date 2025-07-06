import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetOneProduct from "../hooks/useGetOneProduct";

const ProductDetail = () => {
  const rout = useParams();
  // The first Way
  const { isLoading, data } = useGetOneProduct(rout.id);
  // The second way
  /*
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
  }, [rout]);
  */
  return (
    <>
      {isLoading ? (
        <div className="flex text-5xl my-4 justify-center">
          <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-4 border-t-gray-600"></div>
        </div>
      ) : (
        <div>
          <div className="bg-gray-100 w-full py-2 ">
            <div className="max-w-[90%] lg:max-w-5xl mx-auto flex items-center gap-1 text-sm">
              <Link to="/">Home</Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <Link to="/products">Products</Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span className="font-bold">{data.category}</span>
            </div>
          </div>
          <div className="my-10 max-w--[90%] lg:max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
              <div>
                <img
                  className="w-full h-full object-contain"
                  src={data.image}
                  alt=""
                />
              </div>
              <div>
                <h2 className="uppercase ">{data.category}</h2>
                <h1 className="text-3xl font-bold">{data.title}</h1>
                <h1 className="text-2xl font-bold text-red-600 mt-2">
                  ${data.price}
                </h1>
                <div className="flex items-start lg:items-center gap-4 my-8 flex-col lg:flex-row ">
                  <div className="border border-gray-300 w-32 py-2 flex  items-center justify-evenly">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>
                    </button>
                    <button>1</button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </button>
                  </div>
                  <button className="bg-(--primary-color) px-8 py-2 text-white">
                    Add to Card
                  </button>
                  <button className="bg-yellow-600 px-8 py-2 text-white hover:bg-yellow-500">
                    Pay now
                  </button>
                </div>
                <hr />
                <p className="mt-4 text-gray-500">{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
