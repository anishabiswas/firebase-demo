import { app } from "../firebase";
import {
  collection,
  getFirestore,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
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

  const getDocumentsByQuery = async () => {
    try {
      const collectionRef = collection(db, "user");
      const q = query(collectionRef, where("isFemaile", "==", false));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    } catch (e) {
      console.error("Error getting document:", e.message);
    }
  };

  const updateDocument = async () => {
    const ref = doc(db, "flowers/CPBq4v01GXDX5fpQXdxf");
    await updateDoc(ref, {
      usedBy: "Asthetic people",
    });
  };

  return (
    <div>
      <button onClick={writeData}>Flowers Info</button>
      <button onClick={createSubCollection}>Flowers subInfo</button>
      <button onClick={getDocument}>Get Document</button>
      <button onClick={getDocumentsByQuery}>Get Document by Query</button>
      <button onClick={updateDocument}>Update Document</button>
    </div>
  );
};

export default FirestoreDB;
