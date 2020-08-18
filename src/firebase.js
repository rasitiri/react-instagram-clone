import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAuvXrsrVvt3xzKBeDYsi5WA9BL-I5el0k',
  authDomain: 'react-instagram-clone-fd41c.firebaseapp.com',
  databaseURL: 'https://react-instagram-clone-fd41c.firebaseio.com',
  projectId: 'react-instagram-clone-fd41c',
  storageBucket: 'react-instagram-clone-fd41c.appspot.com',
  messagingSenderId: '496428230579',
  appId: '1:496428230579:web:6a358b786f67cf42edcdc6',
}

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)
    this.auth = app.auth()
    this.db = app.firestore()
  }

  async register(email, name, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayName: name,
    })
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.auth.signOut()
  }
}

export default new Firebase()
