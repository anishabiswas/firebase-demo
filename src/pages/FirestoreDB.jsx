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

  const createSubCollection = async () => {
    try {
      const docRef = await addDoc(
        collection(db, "flowers/CPBq4v01GXDX5fpQXdxf/species"),
        {
          name: "gold",
          use: "for beautiness",
          price: 100,
        }
      );
      console.log("Document written with ID: ", docRef.id, docRef);
    } catch (e) {
      console.error("Error adding document:", e.message);
    }
  };

  return (
    <div>
      <button onClick={writeData}>Flowers Info</button>
      <button onClick={createSubCollection}>Flowers subInfo</button>
    </div>
  );
};

export default FirestoreDB;
