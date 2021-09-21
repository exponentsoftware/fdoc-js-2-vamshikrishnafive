const { getGreaterScores,
    addUserSkill, 
    addUser, 
    editUser } = require('./methodsForStudentScores');
console.log(getGreaterScores(85))
console.log(addUser({
    name: 'Krishna',
    scores: 100,
    skills: ['HTM', 'CSS', 'JS', 'API'],
    age: 29
}));
console.log(addUserSkill('Thomas', 'EXPRESS'))
console.log(editUser({
    name: 'Thomas',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS', 'NODE'],
    age: 20
}))

