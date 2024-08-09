/*
    디스트럭처링 :
    - 구조화된 배열 혹은 객체를 비구조화,구조화 파괴하여 개별 변수로 할당하는 것
    - 배열 혹은 객체에서 필요한 데이터만 추출해서 변수로 사용할 수 있도록
*/

let fruits = ['apple','banana','cacao'];
// const fruits1 = fruits[0];
// const fruits2= fruits[1];
// const fruits3 = fruits[2];

let king = {
    name: '이성계', tomb:'태조',birth: '1335-11-04'
};

// const name = king.name;
// const tomb = king.tomb;
// const birth = king.birth
/*
    배열 디스트럭처링
    - 배열의 각각의 요소를 배열로부터 추출,변수에 할당
    - 할당 기준은 인덱스
*/
//let fruits = ['apple','banana','cacao'];
//만약 배열 디스트럭쳐의 범위를 초과한 범위의 변수를 선언하면 초과한 범위에 해당하는 변수는 undefind가 지정
const [fruits1,fruits3] = fruits;
console.log(fruits1,fruits3);

console.log('========================================');

/*
    spread 연산자를 활용
    - 배열디스트럭처링 마지막에 스프레드연산자를 사용하면 남은 모든요소로 새로운 배열을 생성
*/
const [anohterFruit,...othersFruits]=fruits;
console.log(anohterFruit,othersFruits);

console.log('========================================');

/*
    객체 디스트럭처링
    - 객체의 각 속성을 객체로부터 추출하여 변수에 할당
    - 할당 기준은 키
*/
// king = {
//     name: '이성계', tomb:'태조',birth: '1335-11-04'
// };
//객체 딕스트럭싱 에서는 순서는 상관없지만 이름은 반드시 객체키의 이름과 같아야한다..

//객체 이름과 다르게 사용하고 싶을땐 키 : 변수명 을 사용
const {name,tomb,birth}=king;
console.log(name,tomb,birth);

console.log('========================================');

/*
    spread 연산자를 활용
    - 객체 디스트럭처링 마지막에 스프레드 연산자를 사용하면 나머지 모든 속성을 묶어서 새로운 객체를 생성
*/



console.log('========================================');