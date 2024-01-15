// let users;

// export default (async () => {
//   const url = 'https://jsonplaceholder.typicode.com/users';
//   const response = await fetch(url);
//   users = await response.json();
// })();

// export { users };
const url = 'https://jsonplaceholder.typicode.com/users';
const response = await fetch(url);
let users = await response.json();

export { users };
