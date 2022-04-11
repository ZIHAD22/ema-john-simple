// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCP76vEyTiCmP_jP-SX_OJLJWX3o_V5b9g',
  authDomain: 'ema-john-simple-d0522.firebaseapp.com',
  projectId: 'ema-john-simple-d0522',
  storageBucket: 'ema-john-simple-d0522.appspot.com',
  messagingSenderId: '801768834825',
  appId: '1:801768834825:web:13a2601cffb6b134eb75d8',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
