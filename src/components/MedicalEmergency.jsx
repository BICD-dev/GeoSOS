import Customize from "../components/Customize";
import { addDoc, collection, serverTimestamp,GeoPoint  } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useState } from "react";
import fetchUserFullName from "./FetchUserFulName";
import { getLocation } from "./getLocation";
const MedicalEmergency = () => {
  const [isPending, setIsPending] = useState(false);
  // function should send out the user's name, message, location, request time, request status is automatical set to pending
  // also emergency type and user's id

  const reportMedicine = async () => {
      console.log("medicine!!");
      const {latitude, longitude} = await getLocation();
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
              EmergencyType: "medical",
              fullName: fullName,
              requestTime: serverTimestamp(),
              location: new GeoPoint(latitude, longitude),
        rescueStatus:"pending"

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

      {!isPending && (
        <button
          onClick={reportMedicine}
          className="rounded-lg bg-blue-600 hover:bg-blue-800 h-[20rem] w-[20rem] flex justify-center items-center shadow-xl cursor-pointer"
        >
          <h1 className="text-white font-bold text-4xl ">CLICK ME</h1>
        </button>
      )}
      {isPending && (
        <button
          disabled
          className="rounded-lg bg-grey-600 hover:bg-grey-800 h-[20rem] w-[20rem] flex justify-center items-center border-3 border-dashed cursor-pointer"
        >
          <h1 className="text-gray-600 font-bold text-4xl ">SENDING...</h1>
        </button>
      )}
      <Customize />
    </div>
  );
};

export default MedicalEmergency;
