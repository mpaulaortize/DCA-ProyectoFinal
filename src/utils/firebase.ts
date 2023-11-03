import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUvaFu_ChfaXinQGvRpqLjKv-fMC9a8W0",
  authDomain: "dca-2023-2.firebaseapp.com",
  projectId: "dca-2023-2",
  storageBucket: "dca-2023-2.appspot.com",
  messagingSenderId: "702077150740",
  appId: "1:702077150740:web:ac7f99c5e0942e93436901",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const addPosts = async (post: any) => {
  try {
    const where = collection(db, "main-ImgCard");
    await addDoc(where, post);
    console.log("Se añadio");
  } catch (error) {
    console.error(error);
  }
};

const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "main-ImgCard"));
  const transformed: any = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    transformed.push({
      id: doc.id,
      ...data,
    });
  });

  return transformed;
};

export default {
  addPost,
  getPosts,
};
