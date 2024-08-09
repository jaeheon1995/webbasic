/*
    promise 객체 : 해당객체가 생성된 시점에는 값이 알려지지 않았을 수 있다는것을 대리하는 대리자
    - 비동기 연산이 종료된 이후에 결과값과 실패에 대한 처리
    - 
    - 상태 :
    - pending : 이행하지 않은상태 최초상태
    - fullfilled : 성공상태
    - rejected : 실패상태
*/
const number = 10;
const promise = new Promise((resolve,reject)=>{
    if (number % 2 === 0 ) resolve('success');
    else reject('fail');
});
console.log('A Point');
console.log(promise); 
console.log('B Point');

Promise
    .then ((result)=>{
        console.log(result);
    })
    .catch ((result)=>{
        console.log(result);
    });


console.log('C Point');
console.log('==================================================');

/*
    async - await : 
    - 
    - 
    - 
*/



console.log('==================================================');