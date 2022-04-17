

// 099 _ 재귀함수로 합계 구하기

const scores = [85, 95, 76];

const sum = (list, total, length) => {
    if (length === list.length) return total;
    return sum(list, total + list[length], length + 1);
};
console.log('sum : ', sum(scores,0,0));

// 099 _ 재귀함수로 평균 구하기
const average = (list, total, length) => {
    if(length === list.length) return parseInt(total/length);
    return average(list, total + list[length], length+1);
}

console.log('average : ', average(scores,0,0));

