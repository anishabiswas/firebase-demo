import { app } from "../firebase";
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";

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

  const getDocument = async () => {
    try {
      const ref = doc(db, "user/eyMfunR8ohNrMYaFwhNU");
      const snap = await getDoc(ref);
      console.log(snap.data());
    } catch (e) {
      console.error("Error getting document:", e.message);
    }
  };

  return (
    <div>
      <button onClick={writeData}>Flowers Info</button>
      <button onClick={createSubCollection}>Flowers subInfo</button>
      <button onClick={getDocument}>Get Document</button>
    </div>
  );
};

export default FirestoreDB;
