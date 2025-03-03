import { collection, query, where, getDocs } from "firebase/firestore"; // Add this import statement
import { db } from "../config/firebase";
const fetchUserFullName = async (userId) => {
    if (!userId) return null;
    try {
        const usersRef = collection(db, "userInfo");
        const q = query(usersRef, where("userId", "==", userId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const userData = querySnapshot.docs[0].data();
            return userData.userName; // Return full name instead of setting state
        } else {
            console.log("User not found!");
            return "Unknown User"; // Fallback if user is not found
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
};

export default fetchUserFullName;