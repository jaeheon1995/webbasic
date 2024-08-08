/*
    let
*/

/*
    블록 레벨 스코프 : 
    - 코드 블럭 내부에서 선언되어서 해당코드 블럭에서만 사용 가능
*/
{
    var x=10;
}
console.log(x);

// {
//     let y = 10;
// }
// console.log(y);

/*
    변수 중복 선언 불가 : 
    - 변수를 동일한 이름으로 여러 개 선언 불가능 
*/
var x = 10;
var x = 20;

// let y = 10;
// let y = 20;


/*
    호이스팅 : var,function선언문을 최상단에 선언한것 처럼 동작 하는 것
    - let 키워드로 선언된 변수는 최상단에 선언은 되지만 실제로 선언한 위치 이전까지는 일시적 사각지대로 빠트림
*/
console.log(z);
var z = 10;

//ReferenceError: Cannot access 'y' before initialization
// console.log(y);
// let y = 10;

// console.log(y2);
// ReferenceError: y2 is not defined

/*
    const
*/

/*
    선언과 초기화 : 
    - const키워드로 선언된 변수는 재할당이 불가능
    - 선언과 동시에 초기화가 이루어져야 함
*/
const ASSIGNMENT = 10;
// ASSIGNMENT = 20;
// TypeError: Assignment to constant variable.// 

// const INITIAL;
// SyntaxError: Missing initializer in const declaration

/*
    상수와 객체 : 
    - 코드의 가독성 향상을 위해 많이 사용 
    - 객체를 사용할때 변수에 할당 후 변경하지 못하도록하고 속성만 접근 가능하게 함
    - 일반적으로 object타입들은 상수형 변수에 할당
*/
const king ={name:'이성계'};

// king = {name:'이방과'};
// TypeError: Assignment to constant variable.
king.name ='이방과';
/*
    var, let, const
    - ES6를 사용한다면 var 키워드는 사용하지 않는다.
    - 재할당이 필요한 경우에 한정해 let 키워드를 사용한다. 이때 변수의 스코프는 최대한 좁게 만든다.
    - 변경이 발생하지 않는(재할당이 필요 없는 상수) 원시 값과 객체에는 const 키워드를 사용한다. const 키워드는 재할당을 금지하므로 var, let 보다 안전하다.
*/