/*
    객체 : key와 value로 구성된 속성들의 집합
    - 함수(메서드)를 가질수 있다
*/

/*
    객체 리터럴 : 자바스크립트에서 가장 일반적인 객체생성 방법
    - {}를 사용해서 객체를 생성
*/
var emptyObje = {};
var hongGildong ={
    name: '홍길동',
    age: 23,
    address: '부산광역시',
    greeting: function(){
        console.log('안녕 난'+ this.name+ '이야');
    }
}
console.log(hongGildong);
console.log(hongGildong.name);
hongGildong.greeting();

console.log('==============================');

var name ='이형';
var age = 68;
var address = '서울특별시 운현궁'

var goJong = {
    name,
    age,
    address
}
console.log(goJong);
/*
    Object 생성자 : Object 클래스의 생성자로 빈객체 생성
*/
var emptyObject = new Object();
console.log(emptyObject);
emptyObject.name = '이형';
console.log(emptyObject);

console.log('==============================');

/*
    생성자 함수 : 생성자 함수를 사용하여 클래스처럼 사용가능
*/

function King(birth, name, myoName){
    this.birth = birth;
    this.name = name;
    this.myoName = myoName;
}

var goJong2 = new King('1852-09-08', '이형', '고종');
console.log(goJong2);

console.log('==============================');

/*
    속성 이름 (속성 키) : 
    - 일반적으로 문자열로 표기함
    - 자바스크립트에서 유용한 변수명일 경우 따옴표 생략 가능
    - 유효한 변수명이 아니면 반드시 따옴표 사용
*/
var jjh ={
    'first name': '재헌',
    'last name': '정',
    'age': 30
}

console.log(jjh);


console.log('==============================');

/*
    속성 값 읽기 : 
    - . 표기법과 []표기법으로 접근 가능
    - .표기법은 유요한 이름일때만 사용
    - []표기법은 모든이름에서 사용가능,접근하려는 속성을 동적으로 지정가능
    - 객체에 존재하지 않는 속성에 접근하려고 하면 undefined를 반환
*/
console.log(jjh. age);
console.log(jjh['age']);
console.log(jjh[age]); // undefined
console.log(jjh['first name']);

var property = 'age';
console.log(jjh[property]);


console.log('==============================');

/*
    속성 값 변경 : 
    - 객체 속성에 접근하여 새로운 값을 할당
    - 만약 존재하지 않는 속성에 접근하면 새로운 속성을 추가
*/



console.log('==============================');

/*
    속성 삭제 :
    - delete 연산자를 사용
*/
delete goJong.birth;

console.log('==============================');

/*
    for-in 문 : 
    - 객체에 포함된 키를 순차적으로 접근할 수 있도록 해줌
    - 문자열로된 속성의 키가 반환
*/
for (var key in jjh){
    console.log(jjh[key]);
}


console.log('==============================');

var soonJong = goJong;
// soonJong.name = '이척';

// console.log(soonJong);
// console.log(goJong);

// soonJong ={
//     name: goJong.name,
//     age: goJong.age,
//     address: goJong.address

// };
// soonJong.name = '이척';
// var soonJong = [];
// for (var key in goJong){
//     soonJong[key] = goJong[key];
// }
// soonJong.name = '이척';

var soonJong = {...goJong};
soonJong.name = '이척';
console.log(soonJong);

console.log(goJong);