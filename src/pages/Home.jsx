import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.in/api/products?limit=4"
        );
        setData(res.data.products);
        // console.log(res.data.products);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="font-(--jost-font)">
      <div className="bg-[url(../public/CoverMain.png)] h-screen px-8 lg:px-40 flex items-center bg-no-repeat bg-cover sm:bg-top bg-right">
        <div>
          <h1 className="text-xl font-bold">New Collection</h1>
          <h1 className="text-6xl font-bold mb-4">
            Luxary Without <br />
            Label
          </h1>
          <p className="mb-4">Explore new-in Product and Best Seller</p>
          <button className="bg-(--primary-color) text-white px-8 py-2 rounded-3xl">
            View Collection
          </button>
        </div>
      </div>
      <div className="my-20 lg:max-w-5xl max-w-[90%]  mx-auto">
        <h2 className="text-center text-3xl font-bold">Best Seller</h2>
        <p className="text-center mt-4">Explor Best Seller</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-4">
          {data?.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <div className="flex justify-center my-4 ">
          <button className="bg-transparent px-8 py-2 border border-(--primary-color) hover:bg-(--primary-color) hover:text-white mt-5 hover:rounded-2xl transition-all duration-200">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
