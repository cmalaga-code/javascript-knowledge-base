// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in


const userInformation = {username: "example", password: "1234", firstName: "Eddy", lastName: "Ronny"};

for (const property in userInformation){
    console.log(`Property Key: ${property}, value: ${userInformation[property]}`);
}