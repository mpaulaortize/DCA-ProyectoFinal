import { initializeApp } from "firebase/app";
import { collection, addDoc,getDocs,where, setDoc, getFirestore, query } from "firebase/firestore";
import { mainImgCard } from "../types/main-ImgCard";
import firebaseConfig from "../services/firebaseConfig"



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const addPost = async (post:any) => {
  try {
    const postData = collection (db, "post");
    await addDoc(postData,post)
    console.log("Se añadio un post")
    
  } catch (error) {
    console.error(error);
    
  }}

const postCollection = collection(db, "user")



// Recupera los datos del usuario de Firebase 
 export async function getUserData() {
  const querySnapshot = await getDocs(postCollection);
  const mainImgCardData: mainImgCard[] = [];
  querySnapshot.forEach((doc) => {
    const user = doc.data() as mainImgCard;
    // Accede al ID del documento
    const userId = doc.id;
    
    mainImgCardData.push({ ...user, user: userId });
  });
  return mainImgCardData;
}

  
  

export default {
  getUserData

}