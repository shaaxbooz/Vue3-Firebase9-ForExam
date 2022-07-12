import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: 'AIzaSyChC3vowy2i0F_Sdt3MUPE6F1MjVAg7nwI',
  authDomain: 'exam-tatu.firebaseapp.com',
  projectId: 'exam-tatu',
  storageBucket: 'exam-tatu.appspot.com',
  messagingSenderId: '1053892729207',
  appId: '1:1053892729207:web:ddbafe1a12a492cb1ce972',
  measurementId: 'G-7V7Z1Y34P1'
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const testsCollection = db.collection('tests4')

export const createTest = test => {
  return testsCollection.add(test)
}

export const getTest = async id => {
  const test = await testsCollection.doc(id).get()
  return test.exists ? test.data() : null
}

export const updateTest = (id, test) => {
  return testsCollection.doc(id).update(test)
}

export const deleteTest = id => {
  return testsCollection.doc(id).delete()
}

export const useLoadTests = () => {
  const tests = ref([])
  const close = testsCollection.onSnapshot(snapshot => {
    tests.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return tests
}
