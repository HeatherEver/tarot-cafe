import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../server/firebase";

export const getCards = () => {
  return getDocs(collection(db, "cards")).then((res) => {
    return res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  });
};

export const getSingleCard = (cardId) => {
  return getDoc(doc(db, "cards", cardId)).then((res) => {
    return res.data()
  }).catch((err) => {
    console.log(err)
  })
}