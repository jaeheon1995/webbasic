/*
    배열 : 여러 데이터를 하나의 변수에 저장할 수 있는 자료구조
*/

/*
    배열 리터럴 : 
    - 0개 이상의 값을 쉼표로 구분하여 []를 사용하여 표현
    - 배열[인덱스] 로 요소에 접근가능,존재하지 않는 인덱스에 접근하려고 하면 undefined를 반환
    - 각 요소의 데이터 타입이 서로 달라도 됨
*/
var emptyArray = [];
console.log(emptyArray,typeof emptyArray, emptyArray[0]);

var numbers = [1, 2, 3, 4, 5];
console.log(numbers);

var funcs =[
    function(){console.log('함수')},
    function(){console.log('함수2')}
]
console.log(funcs);
funcs[0]();
console.log('==============================');

/*
    배열의 요소 추가
    - 배열[인덱스] = 값 : 요소추가가능,지정한 인덱스 값이 존재하면 변경
    - 뛰어넘은 인덱스 값에는empty요소가 추가됨
*/
emptyArray[1] =10;
console.log(emptyArray,emptyArray[0]);

console.log('==============================');

/*
    배열의 요소 삭제
    - delete연산자를 사용하여 제거가능
*/
delete emptyArray[1];
console.log(emptyArray);

console.log('==============================');

/*
    배열의 순회
    - for-in문을 사용하여 index값을 가지고 순회가능
*/
var fruits = ['apple', 'banana', 'cacao'];
for (var index = 0 ; index < fruits.length; index++){
    console.log(fruits[index]);
}
for (var index in fruits){
    console.log(fruits[index]);
}
console.log('==============================');

/*
    - for-in 방식은 인덱스를 사용하여 한번더 접근해야 하기 때문에 읽기만 하는 작업에선 부적합할수 있다
    - for-of문을 사용하여 배열의 요소를 복사하여 사용가능
*/
for (var item of fruits){
console.log(item);
}

console.log('==============================');

/*
    배열의 길이 : 배열.length
*/
// var newfruits = fruits;
// newfruits[0]='사과';
var newfruits = [];
// for(var index in fruits){
//     newfruits[index] = fruits[index];
// }

// for (var item of fruits){
//     newfruits.push(item);
// }

var newfruits=[...fruits];

newfruits[0]='사과';
console.log(newfruits,fruits);
console.log('==============================');

/*
    배열 메서드
*/

/*
    indexOf(element) : 
    - 배열에 매개변수로 전달된 요소가 존재하면 존재하는 첫번째 인덱스를 반환
    - 존재하지 않으면 -1을 반환
*/
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('melon'));


console.log('==============================');

/*
    includes(element) :
    - 배열에 전달된 매개변수가 요소에 존재하면 true를,존재하지 않으면 false를 반환
*/
console.log(fruits.includes('apple'));
console.log(fruits.includes('melon'));

console.log('==============================');

/*
    push(element) : 
    - 배열의 마지막 인덱스에 요소를 추가하고 변경된 길이를 반환 
*/
console.log(fruits,fruits.length);
console.log(fruits.push('mango'),fruits);

console.log('==============================');

/*
    pop() :
    - 배열의 마지막 요소를 제거하고 제거한 요소 반환
*/
console.log(fruits.pop(),fruits);

console.log('==============================');

/*
    shift() :
    - 배열의 첫번째 요소를 제거하고 제거한 요소 반환
*/
console.log(fruits.shift(),fruits);

console.log('==============================');

/*
    reverse() :
    - 배열의 순서를 역전
*/
console.log(fruits.reverse(),fruits);

console.log('==============================');

/*
    concat(array or item) : 
    - 매개변수로 전달된 값들을 해당 배열의 마지막 요소 뒤에 연결하여 새로운 배열을 반환
*/
var newFruits = fruits.concat(['apple', 'mango']);
console.log(fruits, newFruits);

console.log('==============================');

/*
    slice(start, end) : 
    - start에 해당하는 인덱스부터 end에 해당하는 인덱스 앞까지 복사하여 반환
*/
console.log(newFruits.slice(1, 3),newFruits);

console.log('==============================');

/*
    splice(start, eleteCount, items...) :
    - 배열의 요소를 제거하고 제거한 위치에 요소를 갈아끼운 배열을 반환
*/
console.log(newFruits.splice(1,2,'melon'),newFruits);

console.log(newFruits.splice(2,1),newFruits);

