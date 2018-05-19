// object destructuring

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holladay',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Anonymous'} = book.publisher

// console.log(publisherName)

// array destructuring

const address = ['1299 Juniper St.', 'Philly', 'PA', '19147']

const [, city='New York', state='New York'] = address

console.log(`You are in ${city}, ${state}`)