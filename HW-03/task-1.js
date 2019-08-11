const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
}

user.mood = 'happy';
user['mood'] = 'javascript';
console.log(user);

const keys = Object.keys(user);
console.log(keys);

for (const key of keys) {
    console.log(`${key}: ${user[key]}`);
}
// const entries = Object.entries(user);
// console.log(entries);

// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];

//     console.log(`${key}: ${value}`);
// }