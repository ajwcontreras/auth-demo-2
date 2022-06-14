import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDMcBLUtQ5Ktl5ODcqBgPHq_Ny_uMK5ddM",
  authDomain: "bookkksss.firebaseapp.com",
  databaseURL: "https://bookkksss.firebaseio.com",
  projectId: "bookkksss",
  storageBucket: "bookkksss.appspot.com",
  messagingSenderId: "134004498801",
  appId: "1:134004498801:web:a766529591a50b1aa856d0"
})

export const auth = app.auth()
export default app
