const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter((score) => {
//     return score > 20;
// });

// console.log(filteredScores);


const users = [
    {name: 'shaun', premiun: true},
    {name: 'yoshi', premiun: false},
    {name: 'mario', premiun: false},
    {name: 'chun-li', premiun: true},
];

const premiumUsers = users.filter(user => {
    return user.premiun;
})

console.log(premiumUsers);
