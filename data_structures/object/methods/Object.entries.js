// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// returns an array of an objects property & value

const userInformation = {username: "cool-i-am-cool", password: "1234"}

for (let [key, value] of Object.entries(userInformation)){
    console.log(`${key}: ${value}`);
}