import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const  [ isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setIsPending(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
      setIsPending(false);
    } catch (error) {
      setIsPending(false)
      console.error('Login failed ', error.message);
    }
  };
 

  return (
    <div className="mt-9 flex justify-center items-center min-h-screen bg-gray-100">
    <form
      className="w-full max-w-md bg-white rounded-lg shadow-md p-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Sign In
      </h2>
        
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>
      {!isPending && <button
        type="submit"
        onClick = {handleSignIn}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit  
      </button>}
      {isPending && <button disabled>Signing in....</button>}
      <p className="mt-3">Don&apos;t haven an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a></p>

    </form>
  </div>
  );
};

export default SignIn;