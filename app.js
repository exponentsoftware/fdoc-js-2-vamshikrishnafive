/* Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name */

// function createArrayOfArrays(array) {
//     return array.map(value => [value, value.slice(0,3), value.length])
// }
// const countries = [
//     'ALBANIA',
//     'BOLIVIA',
//     'CANADA',
//     'DENMARK',
//     'ETHIOPIA',
//     'FINLAND',
//     'GERMANY',
//     'HUNGARY',
//     'IRELAND',
//     'JAPAN',
//     'KENYA'
// ]
// console.log(createArrayOfArrays(countries))

//==================================================================================================

/* Write a function which filter users who has scoresGreaterThan85,
Write a function which addUser to the user array only if the user does not exist.
Write a function which addUserSkill which can add skill to a user only if the user exist.
Write a function which editUser if the user exist in the users array. */
let users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTM'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];

function getGreaterScores() {
    let scores = [];
    let i = 0;
    while (i < users.length) {
        if (users[i].scores > 85)
            scores.push(users[i]);
        i++
    }
    return scores;
}
// console.log(getGreaterScores())
function addUser(object) {
    if (users[object]) {
        return users;
    } else users.push(object)
    return users;
}
// console.log(addUser({
//     name: 'Vamshi',
//     scores: 100,
//     skills: ['HTM', 'CSS', 'JS', 'EXPRESS'],
//     age: 28
// }));
function addUserSkill(username, skill) {
    let modifieduser = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === username) {
            modifieduser.push(users[i]);
        }
    }
    modifieduser.map(value => value.skills.push(skill))
    return modifieduser;
}
// console.log(addUserSkill('Thomas', 'Node'))
function editUser(obj) {
    let modifieduser = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === obj.name) {
            modifieduser.push(users[i] = obj)
        }
    }
    return modifieduser;
}
console.log(editUser({
    name: 'Thomas',
    scores: 100,
    skills: ['HTM', 'CSS', 'JS', 'EXPRESS'],
    age: 28
}))