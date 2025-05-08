const usersArray = require('./data.js');
// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    // Your code goes here ...
    userFirstNames.push(user.firstName);
  }
  return userFirstNames;
};

console.log(getFirstNames(usersArray));
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  // Your code goes here ...
  const userFullNames = [];
  for (let user of arr) {

    const fullName = `${user.firstName} ${user.lastName}`;
    userFullNames.push(fullName)

  }
  return userFullNames;
};

console.log(getFullNames(usersArray));
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  // Your code goes here ...
  const usersCreditDetails = [];

  for (const user of usersArray) {

    const { firstName, lastName, balance } = user;

    const userDetails = {
      firstName,
      lastName,
      balance
    };

    usersCreditDetails.push(userDetails);
  }

  return usersCreditDetails;

};

console.log(getUsersCreditDetails(usersArray));
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = users => {
  // Your code goes here ...
  const maleUsers = users
  .filter(user => user.gender === 'male')
  .map(user => `${user.firstName} ${user.lastName}`);

const femaleUsers = users
.filter(user => user.gender === 'female')
.map(user => `${user.firstName} ${user.lastName}`);

return {
  maleUsers,
  femaleUsers
};
};

console.log(genderView(usersArray));
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = users => {
  // Your code goes here ...
  const maleUsers = users
  .filter(user => user.gender === 'male');

const femaleUsers = users
.filter(user => user.gender === 'female');

return {
  maleCount: maleUsers.length,
  femaleCount: femaleUsers.length
};
};

console.log(genderCount(usersArray));
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  // Your code goes here ...
// tenemos que filtar los que tienen =20k de balance y generar un mensaje `${user.firstName}` + mensaje
const VIPusers = users
.filter(user => parseFloat(user.balance) >= 20000)  // Aseguramos que balance sea un número
.map(user => {  // Usamos map para crear el mensaje
  return `Dear ${user.firstName}, since your balance is $${parseFloat(user.balance).toFixed(2)}, you are eligible to apply for this awesome credit card.`;
});

return VIPusers; 
};

console.log(promo20(usersArray));

// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  // Your code goes here ...
};

addActive(usersArray);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
