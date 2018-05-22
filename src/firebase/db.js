import { db } from './firebase'


// export const doCreateUser = (id, username, email) =>
//   db.ref(`events/${id}`).set({
//     username,
//     email,
//   });

export const onceGetEvents = () =>
  db.ref('events').once('value')

export const doCreateEvent = (event) =>
  db.ref('events').push(event)

export const doRemoveEvent = (id) =>
  db.ref(`events/${id}`).remove()

export const doEditEvent = (id, updates) =>
  db.ref(`events/${id}`).update(updates)
