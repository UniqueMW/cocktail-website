import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBl1b-7czjqOR-bhHOG3mI3NNJJMA_MYDw',
  authDomain: 'cocktail-website-3eebb.firebaseapp.com',
  databaseURL: 'https://cocktail-website-3eebb-default-rtdb.firebaseio.com',
  projectId: 'cocktail-website-3eebb',
  storageBucket: 'cocktail-website-3eebb.appspot.com',
  messagingSenderId: '887939624357',
  appId: '1:887939624357:web:a392120cd83a9289428c4c'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app)

export { app, auth, database }
