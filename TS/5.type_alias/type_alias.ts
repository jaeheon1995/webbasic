/*
    타입 앨리어스 :
    - 커스텀 타입을 지정하는 방법(타입의 별칭 지정)
    - type키워드를 사용
*/
// let day:'일'|'월'|'화'|'수';
type WEEK ='일'|'월'|'화'|'수';
let day: WEEK='수'

type BoardContents = string;
let contents: BoardContents='내용';

//객체의 타입 지정
//1,interface이용
interface IHuman{
    name: string;
    age:number;
}
const human1: IHuman={
    name:'홍길동',
    age:23
}

//2,type을 이용
type THuman= {
    name:string,
    age:number,

}
const human2: THuman={
    name:'홍길동',
    age:23
}

//3,class를 이용
class CHuman{
    name: string ='';
    age:number=0;
}
const human3: CHuman={
    name:'홍길동',
    age:23
}
const human: IHuman=human3;
console.log('==================================================');
