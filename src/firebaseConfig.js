import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'

import { getStorage } from 'firebase/storage'
// import 'dotenv/config'
// require('dotenv').config()

const firebaseConfig = {
  apiKey: 'AIzaSyAP5tJjGWT0vSVyeiJbzPHHOl2TRb55Dzk',
  // apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'e-com-web-813fa.firebaseapp.com',
  projectId: 'e-com-web-813fa',
  storageBucket: 'e-com-web-813fa.appspot.com',
  messagingSenderId: '970684743734',
  appId: '1:970684743734:web:4958258ddb8d72420dd897',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)

export const storage = getStorage(app)

export default app
