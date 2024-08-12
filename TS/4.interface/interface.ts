/*
    인터페이스 : 
    - 객체 및 클래스의 타입으로 사용됨
    - 인터페이스에 선언된 속성또는 메서드의 구현을 강제시키는 용도로 사용
    - interface 키워드로 선언
*/

/*
    변수(객체)의 타입으로써 인터페이스
*/
interface Human{
    name: string;
    address: string;
}
interface king {
    name:string;
    tombname:string;
    birth:string;
    death:string;
}
const teajo: king ={
    name : '이성계',
    tombname:'태조',
    birth : '1335-11-04',
    death: '1408-06-27'
};
const jungjong: king|Human={
    name: '이방과',
    tombname:'정종',
    birth:'1357-07-26',
    death:'1419-1--15',
    address:'함흥시'

}


console.log('==================================================');

/*
    클래스의 타입으로써 인터페이스
*/

interface IMath{
    add: (x:number,y:number)=>number;
}

class CMath implements IMath{
    add= (x:number,y:number)=>{
        return x+y;
    }
}

console.log('==================================================');

/*
    선택적 속성 :
    - ?키워드로 인터페이스의 속성을 선택적으로 구현하도록 할 수 있다.
*/

interface king2 {
    name:string;
    tombname?:string;
    birth:string;
    death?:string;
};
const teajong:king2={
    name:'이방원',
    birth:'1367-05-16',
    tombname:'태종'

}

console.log('==================================================');