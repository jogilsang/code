

const userList = [

    { name : 'gilsang', age : 31, score : 85},
    { name : 'gilsang2', age : 32, score : 86},
    { name : 'gilsang3', age : 33, score : 87}

];

// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
userList.forEach(function(user) {
    console.log(user);
});

console.log('---------------------');

userList.forEach(user => console.log(user));
