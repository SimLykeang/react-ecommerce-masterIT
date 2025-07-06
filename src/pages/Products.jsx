import Card from "../components/Card";
import useGetAllProduct from "../hooks/useGetAllProduct";

const Products = () => {
  const { data, isLoading } = useGetAllProduct();
  return (
    <div className="my-10 max-w-[90%] lg:max-w-5xl mx-auto flex flex-col justify-between">
      <h1 className="text-center text-3xl uppercase mb-5">All Products</h1>
      {isLoading ? (
        <div className="flex text-5xl my-4 justify-center">
          <div className="border-gray-300 h-8 w-8 animate-spin rounded-full border-4 border-t-gray-600"></div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-8 ">
          {data?.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
