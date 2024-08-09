/*
    타입선언 : 
    - 변수 및 함수에 타입을 지정하여 타입에 대한 제한을 추가할 수 있음
*/
let variable: string;
variable = '문자열';
// variable = 2134;

function func(arg1: string,arg2: number): string {
    return '문자열';
};
const arrowFunc = (arg1:string,arg2:number): string => {
    return '문자열';
};

/*
    typescript의 타입
    - string : 문자열
    -number: 숫자
    - boolean:논리형
    - null: null
    - undefined :정의되지 않음
    - object:객체
    - array:배열
    - enum:열거형
    - void:함수에서 반환값이 없음을 나타냄
    - any : 모든타입
*/
const numbers1: number[] =[1,2,3];
const numbers2: Array<number>=[1,2,3];

let string1: string = '';
let string2: String = '';
string2 = string1;
// string1 = string2; 대문자 S스트링은 인터페이스

enum Color{
    RED='#ff0000',GREEN='#00FF00',BLUE='#0000FF'
}
const color:Color =Color.RED;
console.log(color);

let anyType: any  = 10;
anyType='10';

const voidFunc = (): void =>{
    return;
}
const func2 = (arg:string): string=>{
    return '';
}
let funcType: (arg:string) =>string
funcType=func2;
// funcType=voidFunc;
/*
    타입추론 :
    - 타입을선언하지 않고 변수에 값이 초기화되면 초기화된 값에 따라서 변수의 값이 할당
*/
let stringVariable = '';
// stringVariable = 10;
const func3 =(arg: number)=>{
    if(arg ===1)return 1;
    return '';
}


/*
    타입 변환 :
    - as 키워드로 형변환 가능 (객체일때 자주사용),<>연산자로 형변환가능
*/
const pi: any='3.14';
let piNumber: number = pi as number;
piNumber = Number(pi);
piNumber =<number>pi;


/*
    유니온 타입
    - 복수의 타입을 지정하는 방법 | 사용
*/
let union: number | string;



/*
    리터럴 타입
    - 지정한 리터럴 값만 가질수 있는 타입
*/
let day: '낮'|'밤';
day='낮'
day='밤'
// day='아침'
