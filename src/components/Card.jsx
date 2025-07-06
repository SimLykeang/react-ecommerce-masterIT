import { Link } from "react-router-dom";

const Card = (props) => {
  const { data } = props;
  // console.log(data);
  return (
    <Link
      to={`/products/${data.id}`}
      className="border border-gray-600 p-4 group rounded-2xl shadow-2xl overflow-hidden"
    >
      <figure className="">
        <img
          className="group-hover:scale-110 mb-5 transition-all duration-200 w-full h-full object-cover"
          src={data.image}
          alt=""
        />
        <div className="">
          <h3 className="line-clamp-1 ">{data.title}</h3>
          <button className="bg-(--primary-color) px-3 py-1 rounded-[5px] mt-3 ">
            <p className="text-white">${data.price}</p>
          </button>
        </div>
      </figure>
    </Link>
  );
};

export default Card;
