const users = [
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
]
module.exports.getGreaterScores = (number) => {
    let result = [];
    users.filter((user, index, orig) => {
        if (user.scores > number) {
            result.push(user)
        }
    })
    return result;
}
module.exports.addUser = (object) => {
    users.forEach(user => {
        if (user.name === object.name) {
            return 'User already exist'
        } else {
            users.push(object);
        }
    })
    return users;
}
module.exports.addUserSkill = (username, skill)  => {
    let result = [];
    users.filter(user => {
        if (user.name === username) {
            result.push(user);
        }
    })
    result.map(value => value.skills.push(skill))
    return result;
}
module.exports.editUser = (obj) => {
    let result = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === obj.name) {
            result.push(users[i] = obj)
        }
    }
    return result;
}