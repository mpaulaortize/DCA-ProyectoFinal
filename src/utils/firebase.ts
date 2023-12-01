import { initializeApp } from "firebase/app";
import {
  collection,
  addDoc,
  getDocs,
  where,
  setDoc,
  getFirestore,
  onSnapshot,
  query,
  doc,
} from "firebase/firestore";
import firebaseConfig from "../services/firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

//Types
import { mainImgCard } from "../types/main-ImgCard";
import { FeedGrid } from "../types/FeedGrid";
import { Notifications } from "../types/notificationType";
import { SearchTypes } from "../types/searchtypes";
import { CreateAccount } from "../types/CreateProfile";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

//Para Main ImgCard
export const addmainImgCard = async (product: Omit<mainImgCard, "id">) => {
  try {
    const where = collection(db, "main-ImgCard");
    await addDoc(where, product);
    console.log("se añadió con éxito");
  } catch (error) {
    console.error(error);
  }
};

export const getmainImgCard = async () => {
  const querySnapshot = await getDocs(collection(db, "main-ImgCard"));
  const transformed: Array<mainImgCard> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<mainImgCard, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

const getmainImgCardlistener = (cb: (docs: mainImgCard[]) => void) => {
  const ref = collection(db, "main-ImgCard");

  onSnapshot(ref, (collection) => {
    const docs: mainImgCard[] = collection.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    })) as mainImgCard[];
    cb(docs);
  });
};
//Fin de Main ImgCard

//FeedGrid
export const addFeedGrid = async (product: Omit<FeedGrid, "id">) => {
  try {
    const where = collection(db, "FeedGrid");
    await addDoc(where, product);
    console.log("se añadió con éxito");
  } catch (error) {
    console.error(error);
  }
};

export const getFeedGrid = async () => {
  const querySnapshot = await getDocs(collection(db, "FeedGrid"));
  const transformed: Array<FeedGrid> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<FeedGrid, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

const getFeedGridlistener = (cb: (docs: FeedGrid[]) => void) => {
  const ref = collection(db, "FeedGrid");

  onSnapshot(ref, (collection) => {
    const docs: FeedGrid[] = collection.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    })) as FeedGrid[];
    cb(docs);
  });
};
//Fin FeedGrid

//Para Notifications
export const addNotifications = async (product: Omit<Notifications, "id">) => {
  try {
    const where = collection(db, "Notifications");
    await addDoc(where, product);
    console.log("se añadió con éxito");
  } catch (error) {
    console.error(error);
  }
};

export const getNotifications = async () => {
  const querySnapshot = await getDocs(collection(db, "Notifications"));
  const transformed: Array<Notifications> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<Notifications, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

const getNotificationslistener = (cb: (docs: Notifications[]) => void) => {
  const ref = collection(db, "Notifications");

  onSnapshot(ref, (collection) => {
    const docs: Notifications[] = collection.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    })) as Notifications[];
    cb(docs);
  });
};
//Fin Notifications

//Search
export const addSearchTypes = async (product: Omit<SearchTypes, "id">) => {
  try {
    const where = collection(db, "Search");
    await addDoc(where, product);
    console.log("se añadió con éxito");
  } catch (error) {
    console.error(error);
  }
};

export const getSearchTypes = async () => {
  const querySnapshot = await getDocs(collection(db, "Search"));
  const transformed: Array<SearchTypes> = [];

  querySnapshot.forEach((doc) => {
    const data: Omit<SearchTypes, "id"> = doc.data() as any;
    transformed.push({ id: doc.id, ...data });
  });

  return transformed;
};

const getSearchTypeslistener = (cb: (docs: SearchTypes[]) => void) => {
  const ref = collection(db, "SearchTypes");

  onSnapshot(ref, (collection) => {
    const docs: SearchTypes[] = collection.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    })) as SearchTypes[];
    cb(docs);
  });
};
//Fin Search

// export const addPost = async (post: any) => {
//   try {
//     const postData = collection(db, "post");
//     await addDoc(postData, post);
//     console.log("Se añadio un post");
//   } catch (error) {
//     console.error(error);
//   }
// };

// const postCollection = collection(db, "user");

// Recupera los datos del usuario de Firebase
// export async function getUserData() {
//   const querySnapshot = await getDocs(postCollection);
//   const mainImgCardData: mainImgCard[] = [];
//   querySnapshot.forEach((doc) => {
//     const user = doc.data() as mainImgCard;
//     // Accede al ID del documento
//     const userId = doc.id;

//     mainImgCardData.push({ ...user, user: userId });
//   });
//   return mainImgCardData;
// }

//Create Account
const CreateAccount = async (name: string, email: string, password: string) => {
  try {
    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Correo electrónico no válido");
      return;
    }

    // Primer paso: Crear usuario con auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    console.log(user.uid);

    // Segundo paso: Crear datos del usuario en la colección users
    const userDocRef = doc(db, "users", user.uid);
    const userData = {
      name: name,
      email: email,
    };

    await setDoc(userDocRef, userData);

    console.log("Se añadió");
  } catch (error) {
    console.error(error);
  }
};

//LogIn
const logIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
    });
};

export default {
  CreateAccount,
  logIn,
  addmainImgCard,
  getmainImgCard,
  getmainImgCardlistener,
  addFeedGrid,
  getFeedGrid,
  getFeedGridlistener,
  addNotifications,
  getNotifications,
  getNotificationslistener,
  addSearchTypes,
  getSearchTypes,
  getSearchTypeslistener,
};
