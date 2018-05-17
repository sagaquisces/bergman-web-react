import * as firebase from 'firebase'



const config = {
  apiKey: 'AIzaSyDRCX2Yjn5ZMARkwswAeufqmgVcqNF15SE',
  authDomain: 'bergman-web.firebaseapp.com',
  databaseURL: 'https://bergman-web.firebaseio.com',
  projectId: 'bergman-web',
  storageBucket: '',
  messagingSenderId: '1074229707301'
}

firebase.initializeApp(config)

const db = firebase.database()

db.ref().set({
  name: 'Lisa Bergman',
  age: 26,
  isSingle: true,
  location: {
    city: 'Philadelphia',
    country: 'US'
  }
})

db.ref('location/city').set('New York')

db.ref('attributes').set({
  height: 73,
  weight: 150
})
  