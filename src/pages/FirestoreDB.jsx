import { app } from "../firebase";
import { collection, getFirestore, addDoc } from "firebase/firestore";

const db = getFirestore(app);

const FirestoreDB = () => {
  const writeData = async () => {
    try {
      const docRef = await addDoc(collection(db, "flowers"), {
        first: "Mariegold",
        details: "orange color with brown seeds",
        usedBy: "lovers",
      });
      console.log("Document written with ID: ", docRef.id, docRef);
    } catch (e) {
      console.error("Error adding document:", e);
    }
  };

  return (
    <div>
      <button onClick={writeData}>Flowers Info</button>
    </div>
  );
};

export default FirestoreDB;
