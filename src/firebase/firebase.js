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
// child removed
db.ref('events').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// child_changed
db.ref('events').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// child_addded
db.ref('events').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// db.ref('events').on('value', (snapshot) => {
//   const events = []

//   snapshot.forEach((childSnapshot) => {
//     events.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(events)
// })

// db.ref('events')
//   .once('value')
//   .then((snapshot) => {
//     const events = []

//     snapshot.forEach((childSnapshot) => {
//       events.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
//     console.log(events)
//   })

// const events = [{
//   title: 'Lisa and Friends',
//   date: 'Fri 27 Nov 2018',
//   description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
//   createdAt: 97634665542

// }, {
//   title: 'The Piano Trios of Giuseppe Martucci',
//   date: 'Sat 28 Nov 2018',
//   description: 'Praesen tincidunt sed tellus ut rutrum sed vitae justo.',
//   createdAt: 97634665542
// }, {
//   title: 'Orchestral Reductions',
//   date: 'Fri 13 Dec 2018',
//   description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
//   createdAt: 97634665542
// }, {
//   title: 'Sonatas of Beethoven',
//   date: 'Sat 13 Dec 2018',
//   description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
//   createdAt: 97634665542
// }]

// db.ref('events').push(events[0])
// db.ref('events').push(events[1])
// db.ref('events').push(events[2])

  