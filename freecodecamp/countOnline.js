//Iterate Through the Keys of an Object with a for...in Statement. We've defined a function countOnline which 
//accepts one argument (a users object). Use a for...in statement within this function to loop through the users
//object passed into the function and return the number of users whose online property is set to true. An 
//example of a users object which could be passed to countOnline is shown below. Each user will have an online 
//property with either a true or false value.
function countOnline(usersObj) {
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
}
const obj={
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
}
console.log(countOnline(obj));
