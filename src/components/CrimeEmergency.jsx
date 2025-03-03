import Customize from "../components/Customize";
import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  GeoPoint,
} from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { getLocation } from "./getLocation";
import fetchUserFullName from "./FetchUserFulName";

const CrimeEmergency = () => {
  const [isPending, setIsPending] = useState(false);

  const reportCrime = async () => {
    console.log("fire!!");
    const { latitude, longitude } = await getLocation();
    console.log(latitude, longitude);
    try {
      setIsPending(true);

      const user = auth.currentUser;
      if (!user) {
        throw new Error("User not authenticated");
      }

      const fullName = await fetchUserFullName(user.uid); // Await the fetched name

      await addDoc(collection(db, "victimInfo"), {
        message: "hello, I need help",
        userId: user.uid,
        EmergencyType: "crime",
        fullName: fullName,
        requestTime: serverTimestamp(),
        location: new GeoPoint(latitude, longitude),
      });

      console.log("Report sent with name:", fullName);
      setIsPending(false);
    } catch (error) {
      console.error("Error:", error.message);
      setIsPending(false);
    }
  };
  return (
    <div className=" h-screen px-4 flex flex-col  items-center">
      <h1 className="text-4xl font-semibold my-10">Send an SOS</h1>

      {!isPending && <button
        onClick={reportCrime}
        className="rounded-lg bg-gray-600 hover:bg-gray-800 h-[20rem] w-[20rem] flex justify-center items-center shadow-xl cursor-pointer"
      >
        <h1 className="text-white font-bold text-4xl ">CLICK ME</h1>
      </button>}
      {isPending && (
        <button
          disabled
          className="rounded-lg bg-grey-600 hover:bg-grey-800 h-[20rem] w-[20rem] flex justify-center items-center border-3 border-dashed cursor-pointer"
        >        <h1 className="text-grey-600 font-bold text-4xl ">CLICK ME</h1>
</button>
      )}
      <Customize />
    </div>
  );
};

export default CrimeEmergency;
