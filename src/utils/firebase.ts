import { initializeApp } from "firebase/app";
import { collection, addDoc,getDocs,where, setDoc, query } from "firebase/firestore";
import {firebaseConfig } from "../services/firebaseConfig";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
import { onSnapshot } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore'; 

//types
import { Tweet } from "../types/Tweet";
import { Message } from "../types/Messages";
import { mainImgCard } from "../types/main-ImgCard";
import { Audio} from "../types/Audio";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
 const storage = getStorage(app);

export { firebase, storage };

// para mensajes 

export const addmessages = async (product: Omit<Message, "id">) => {
  try {
    const where = collection(db, "messages");
    await addDoc(where, product);
    console.log("se añadió con éxito");
  } catch (error) {
    console.error(error);
  }
};

export const getmessage = async () => {
  const querySnapshot = await getDocs(collection(db, "Messages"));
  const transformed: Array<Message> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<Message, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

const getProductsListener = (cb: (docs: Message[]) => void) => {
  const ref = collection(db, "products");

  onSnapshot(ref, (collection) => {
    const docs: Message[] = collection.docs.map((doc:any) => ({
      id: doc.id,
      ...doc.data(),
    })) as Message[];
    cb(docs);
  });
};

// para tweets 
export const addtweet = async (product: Omit<Tweet, "id">) => {
  try {
    const where = collection(db, "Tweet");
    await addDoc(where, product);
    console.log("se añadió con éxito");
  } catch (error) {
    console.error(error);
  }
};

export const getTweet= async () => {
  const querySnapshot = await getDocs(collection(db, "Tweet"));
  const transformed: Array<Tweet> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<Tweet, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

const getTweetListener = (cb: (docs: Tweet[]) => void) => {
  const ref = collection(db, "products");

  onSnapshot(ref, (collection) => {
    const docs: Tweet[] = collection.docs.map((doc:any) => ({
      id: doc.id,
      ...doc.data(),
    })) as Tweet[];
    cb(docs);
  });
};

// para main-ImgCards

export const addmain = async (product: Omit<mainImgCard, "id">) => {
  try {
    const where = collection(db, "main-ImgCard");
    await addDoc(where, product);
    console.log("se añadió con éxito");
  } catch (error) {
    console.error(error);
  }
};

export const getmain= async () => {
  const querySnapshot = await getDocs(collection(db, "main-ImgCard"));
  const transformed: Array<mainImgCard> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<mainImgCard, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

const getMainListener = (cb: (docs: mainImgCard[]) => void) => {
  const ref = collection(db, "products");

  onSnapshot(ref, (collection) => {
    const docs: mainImgCard[] = collection.docs.map((doc:any) => ({
      id: doc.id,
      ...doc.data(),
    })) as mainImgCard[];
    cb(docs);
  });
};

//para Audio
export const addAudio = async (product: Omit<Audio, "id">) => {
  try {
    const where = collection(db, "Audio");
    await addDoc(where, product);
    console.log("se añadió con éxito");
  } catch (error) {
    console.error(error);
  }
};

export const getAudio= async () => {
  const querySnapshot = await getDocs(collection(db, "Audio"));
  const transformed: Array<Audio> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<Audio, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

const getaudioListener = (cb: (docs: Audio[]) => void) => {
  const ref = collection(db, "products");

  onSnapshot(ref, (collection) => {
    const docs: Audio[] = collection.docs.map((doc:any) => ({
      id: doc.id,
      ...doc.data(),
    })) as Audio[];
    cb(docs);
  });
};

//para comentar 
export const addComment = async (comments:any) => {
  try {
    const commentData = collection (db, "comments");
    await addDoc(commentData,comments);
    console.log("Se añadio un comentario")
    
  } catch (error) {
    console.error(error);
    
  }
}
export const getComment = async () => {

    const querySnapshot =  await getDocs (collection(db, "Comment"));
    const commented :any  = [];

    querySnapshot.forEach((doc) => {
      const comment = doc.data();
      commented.push({
        id:doc.id,
        ...comment
      });
    })
    return commented
  }


export default {
  addmessages,
  getmessage,
  getProductsListener,
  getTweet,
  getTweetListener,
  addmain,
  getmain,
  getMainListener,
  addAudio,
  getAudio,
  getaudioListener,
  addComment,
  getComment
};
