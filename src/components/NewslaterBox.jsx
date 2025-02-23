import React from "react";

const NewslaterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now and get 20% off
      </p>
      <p className="text-gray-500 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-lg"
      >
        <input
          className="border border-gray-400 p-3 w-full sm:flex-1 outline-none transition-all duration-300 focus:border-black"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 transition-all duration-300 hover:bg-gray-800 hover:scale-105"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewslaterBox;
