import { useState } from "react";

const SignIn = () => {
  const [formValues, setFormValue] = useState({
    email: "",
    password: "",
  });
  //handleChange funciton
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <div className="px-4  h-screen flex flex-col items-center justify-center ">
      <section className="shadow-lg rounded-lg p-6 border border-gray-500">
        <h1 className="font-bold text-center text-2xl mb-6">Sign In</h1>
        <form className="flex flex-col items-center justify-center">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="border border-gray-500 rounded-md p-2 mb-2"
            onChange={handleChange}
            value={formValues.email}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            className="border border-gray-500 rounded-md p-2 mb-2"
            onChange={handleChange}
            value={formValues.password}
            required
          />
          <input
            type="button"
            value="submit"
            onClick={handleSubmit}
            className="bg-gray-500 text-white rounded-md px-3 py-1 capitalize cursor-pointer"
          />
        </form>
      </section>
    </div>
  );
};

export default SignIn;
