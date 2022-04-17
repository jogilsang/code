

const user = {

    name : 'gilsang',
    age : 31
};

user.job = 'person';
user.nation = 'korea';

console.log(user.job);
console.log(user['job']);

const fieldName = 'nation';

console.log(user.nation);
console.log(user[fieldName]);

// response
// person
// person
// korea
// korea