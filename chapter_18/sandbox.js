// rest parameter
const double = (...nums) => {
    console.log(nums)
    return nums.map(num => num*2);
}

const result = double(1,3,4,7,5,4,32,2);
console.log(result)

// spread syntax (arrays)

const people = ['shaun', 'ryu', 'crystal'];
const members = ['mario', 'chun-li', ...people]
console.log(members);


// spread syntax (objects)
const person = { name: 'shaun', age: 30, job: 'net ninja' };
const personClone = {...person, location: 'manchester'};

console.log(personClone);
