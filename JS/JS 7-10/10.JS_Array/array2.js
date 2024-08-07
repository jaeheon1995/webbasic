/*
    배열 고차 함수
    - 배열의 불변성을 최대한 보장하여 부수효과를 제거한 메서드,배열을 이용한 편리한 기능을 제공
*/
const array = [7, 11, 20, 1, 8, 3, 16, 2, 19, 9, 10, 4, 13, 12, 14, 17, 15, 5, 18, 6];

/*
    sort(비교 함수) : 배열의 요소를 적절하게 정렬
    - sort() 로 정렬하면 사전식 정렬
*/
// array.sort();
// console.log(array);

var asc = function(x, y) {
    return x - y;
}
array.sort(asc);
console.log(array);

//내림차순정렬
array.sort(function(x, y) {return y - x});
console.log(array);
var objects = [
    { a: 9, b:-5},
    {a:-2,y :0},
    {a:0,b:-3},
    {a:6, b:5}];
    console.log(objects);
    objects.sort(function(x, y) {return x.a - y.a});
    console.log(objects);
console.log('==============================');

/*
    forEach(콜백 함수) : for문 대신 사용
    - 배열을 순회하면서 각 요소와 인덱스를 사용할 수 있도록 함
    - 원본 배열을 변경하지 않음
    - break, continue등의 작업을 수행할 수 없다.
    - for문보다 성능이 많이 떨어짐, 가독성이 좋고 편리해서 자주 사용
    - async await 작업은 forEach메서드로 사용불가
    */
array.forEach(function(item,index) {
    console.log('index : ${index}, item : ${item}')});

console.log('==============================');

/*
    map(콜백 함수) : 콜백함수의 반환값들로 이루어진 새로운 배열을 반환
    - 원본 배열을 변경하지 않음
    - forEach는 단순히 요소나 인덱스로 작업만 진행(반환값x),map은 요소나 인덱스로 작업한 결과로 새로운 배열을 반환(반환값o)
*/
var mapArray = array.map(function(item, index) {
    return item + index;
});
console.log(mapArray);

var newarray = array.map(function (item, index) {return item , index});

console.log(newarray);
console.log('==============================');
//map을 일반 for문으로구현
//1,빈배열생성
var newarray = [];
//2,for문실행
for (var index in array) {
    var item = array[index];
    //3,빈배열에 요소추가
    newarray.push(item);
    console.log(newarray);
}

/*
    filter(콜백 함수) : 콜백함수에 대한 반환값이 true인 배열의 요소의 값만 추출한 새로운 배열을 반환
    - 배열의 특정 케이스만 필터링 조건으로 추출하여 새로운 배열을 만들고 싶을때
    - 원본배열을 변경하지 않음
*/
var evenArray = array.filter(function(item, index) {
    return item % 2 === 0;
});
console.log(evenArray);
console.log('==============================');

//filter을 일반 for문으로구현
//1,빈배열생성
var newarray = [];
//2,for문실행
for (var index in array) {
    var item = array[index];
    //3,빈배열에 요소추가
    if(item % 2 === 0) newarray.push(item);
    console.log(newarray);
}
/*
    find(value, index) : 콜백함수의 결과가 true인 첫번째 요소를 반환
*/
var result = array.find(function(item, index) {
    return item % 2 === 1;
});
console.log(result);
console.log('==============================');

/*
    findIndex(콜백함수) : 콜백함수의 결과가 true인 첫번째 요소의 인덱스를 반환 
*/
var result = array.findIndex(function(item, index) {
    return item%2 === 1;
});
console.log(result);
console.log('==============================');