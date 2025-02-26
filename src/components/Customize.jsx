import { useState } from "react";

const Customize = () => {
  const [customize, setCustomize] = useState("Hello, I'm in trouble ");
  console.log(customize);
  return (
    <div className="px-4 mt-4 ">
      <form className="flex flex-col items-center">
        <input
          type="text"
          name="message"
          id="message"
          placeholder="customize your sos..."
          className="p-4 border border-gray-300 rounded-md"
          onChange={(e) => {
            setCustomize(e.target.value);
          }}
          value={customize}
          required
        />
        <input
          type="button"
          className="bg-gray-500 cursor-pointer text-white capitalize w-fit p-2 my-2 rounded-md"
          value="submit"
        />
      </form>
    </div>
  );
};

export default Customize;
