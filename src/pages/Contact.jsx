const Contact = () => {
  return (
    <div className="lg:max-w-3xl max-w-[90%] mx-auto my-10">
      <form action="" className="w-full shadow-sm p-4">
        <h1 className="text-center text-3xl font-bold">Contact Us</h1>
        <div className="mb-3">
          <label>
            Name <span className="text-red-600">*</span>
          </label>
          <input
            className="w-full p-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-(--primary-color) transition-all  ease-in-out"
            type="text"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-3">
          <label>
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            className="w-full p-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-(--primary-color) transition-all  ease-in-out"
            type="text"
            placeholder="Enter Your Phone Number"
          />
        </div>
        <div className="mb-3">
          <label>
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            className="w-full p-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-(--primary-color) transition-all  ease-in-out"
            type="text"
            placeholder="Enter Name"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-(--primary-color) text-white px-8 py-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
