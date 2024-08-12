/*
    클래스 정의 :
    - 속성 및 기능의 집합을 정의
*/
class Sample1 {
    field: string;
    constructor(field: string){
        this.field = field;
    }
    method(arg: string): void{

    }
}


console.log('==================================================');

/*
    접근제어자
    - public: 클래스 내부,자식 클래스 내부, 모든위치)
    - protected: 클래스내부,자식클래스
    - private : 클래스 내부
    - TypeScript는 패키지 개념이 없기 때문에 기본값은 public으로 지정
*/
class sample2{
    public publicfield:string;
    protected protectedfield:string;
    private privatefield:string;

    constructor(){
        this.publicfield='퍼블릭';
        this.protectedfield='프로텍티드';
        this.privatefield='프라이빗';
    }
}
const sample2Instance= new sample2();
sample2Instance.publicfield;
// sample2Instance.privatefield;
// sample2Instance.protectedfield;


console.log('==================================================');

/*
    생성자 매개변수에 접근 제어자 지정
    - 생성자 매개변수에 접근제어자를 지정하여 필드선언 가능
*/
class Sample3{
    

    constructor(
        public publicfield: string,
        protected protectedfield:string,
        private privatefield:string,
        localVariable:string
    ){}
    
}


console.log('==================================================');

/*
    readonly :
    -  readonly가 선언된 클래스 속성은 선언시 또는 생성자 내부에서만 값을 할당할 수 있다
    - 값을 재할당할수 없고 오직 읽기만 가능
    - 상수선언에 사용
*/
class Sample4{

    public readonly field1: string ="읽기전용";
    public readonly field2: string;
    constructor(
        field2:string,
        public readonly field3: string
    ){
        this.field2=field2;
    }

    setMethod(){
        // this.field1='변경'
    }
}
const sample4Instance = new Sample4('읽기전용2','읽기전용3');
console.log(sample4Instance);
//sample4Instance.field1='변경'
console.log('==================================================');

/*
    추상 클래스 :
    - 하나이상의 추상메서드를 포함하는 클래스,abstract키워드로 선언
*/
abstract class AbstractClass{
    abstract AbstractMethod(arg:string): void;
}

console.log('==================================================');