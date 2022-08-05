import { initializeApp } from 'firebase/app';
import { addDoc, getFirestore, collection } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function createTicket(threadId: string, text: string) {
  try {
    await addDoc(collection(db, 'tickets'), {
      threadId,
      text,
      openedAt: Date(),
    });
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}
