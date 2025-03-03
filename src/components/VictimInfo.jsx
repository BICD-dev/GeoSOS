import {db} from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
const VictimInfo = () => {
  const [ victims, setVictims ] = useState([]);
  useEffect(() => {
    const getVictims = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "victimInfo"));
        const victimData = querySnapshot.docs.map((doc) => {
          const data = doc.data();

          // Convert Firestore Timestamp to JavaScript Date
          const timestamp = data.requestTime?.toDate(); // Handle potential undefined values
          
          // Extract only the time (HH:MM AM/PM)
          const formattedTime = timestamp
            ? timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true, // Set to false for 24-hour format
              })
            : "No time available"; // Fallback if timestamp is missing

          return {
            ...data,
            formattedTime, // Add formatted time to victim data
          };
        });

        setVictims(victimData);
      } catch (error) {
        console.error("Error fetching victims:", error);
      }
    };

    getVictims();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 text-gray">
        <h1 className="font-bold capitalize text-xl ">Full Name</h1>
        <h1 className="font-bold capitalize text-xl ">Message </h1>
        <h1 className="font-bold capitalize text-xl ">Request Time</h1>
        <h1 className="font-bold capitalize text-xl ">Rescue Status</h1>
      </div>
      {victims.map((victim, index) => {
        return (
          <div key={index} className="grid grid-cols-4 text-gray">
            <h1 className="font-semibold capitalize text-gray-600 ">{victim.fullName}</h1>
            <h1 className="font-semibold capitalize text-gray-600 ">{victim.message}</h1>
            <h1 className="font-semibold capitalize text-gray-600 ">{victim.formattedTime}</h1>
            <h1 className="font-semibold capitalize text-gray-600 ">{victim.rescueStatus}</h1>
            
          </div>
        );
      })}
    </div>
  );
};

export default VictimInfo;
