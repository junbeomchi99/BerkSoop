// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile,signOut } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNetysUKi71w8-R0t8mlUYLZanjSijiuE",
  authDomain: "berksoop.firebaseapp.com",
  projectId: "berksoop",
  storageBucket: "berksoop.appspot.com",
  messagingSenderId: "836217040896",
  appId: "1:836217040896:web:51206f7e94cccd3e0828e5",
  measurementId: "G-R25XZ5GQTN"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app); 
// const db = firebase.firestore();
// const storage = firebase.storage();

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export const registerUser = async (email: string, password: string, firstName: string, lastName: string, isAdmin: boolean) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password); //registering onto Firebase Auth
    const user = userCredential.user; // get the full user object from userCredential
    await updateProfile(user, { // update the user's display name
      displayName: `${firstName} ${lastName}`
    });
    const uid = user.uid;
    const userData = { firstName, lastName, email, password, isAdmin }; //#TO DO: hash password
    const userRef = doc(db, 'Users', uid);
    await setDoc(userRef, userData);
    console.log(userCredential);
    console.log("register Successful");
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
}


export const signInUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
  } catch (error) {
    throw new Error(error.message)
  }
}

export const signOutUser = async (email: string, password: string) => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    throw new Erorr(error.message)
  });
}


// $('#register').click(function(){

// var email = $('#email-new').val();
// var password = $('#pw-new').val();
// var name = $('#name-new').val();
// // TODO: admin 선택시 true로 바꾸는 코드 필요
// var isAdmin = false;


// firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
//     console.log(result.user)
//     // 생성된 UID를 key로 데이터베이스 'Users' collection 안에 document 생성
//     db.collection('Users').doc(result.user.uid).set({
//         "Name": name,
//         "Email": email,
//         "Password": password,
//         "Admin": isAdmin
//     })
// })
// })


// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";





// document.getEelementById('signUpButton').addEventListener('click', (event) ==> {
//   event.preventDefault()
//   const Fname = document.getElementById('Fname').val
//   const Lname = documnet.getElementById('Lname').val
//   const email = document.getElementById('email').val
//   const password = documnet.getElementById('password').val
//   console.log(email, password)
//   const auth = getAuth();
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       console.log(userCredential)
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       console.log("error'")
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// })