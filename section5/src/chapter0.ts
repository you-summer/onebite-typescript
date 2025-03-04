/**
 * 인터페이스
 */
interface Person {
  readonly name: string;
  age?: number;
  //sayHi: () => void;
  sayHi(): void; //이렇게 호출시그니처도 이용할 수 있음
  // 이때 기본적인 호출 시그니처와는 다르게 메서드의 이름이 소괄호 앞에 붙는다는점!
  sayHi(a: number, b: number): void;
}
// 이렇게하면 name과 age프로퍼티를 갖는 person 객체타입을 정의하는것

const person: Person = {
  name: "이정환",
  sayHi: function () {
    console.log("hi");
  },
};
// 인터페이스로 만든 타입도 타입별칭으로 만든 타입들과 동일하게 타입주석을 이용해서 변수의 타입을 정의할 때 사용할 수 있음
// 기본적인 기능은 같다

// age에 ? 붙여서 선택적 프로퍼티로 만들어 줄 수 있음
// name 앞에 readonly를 붙여서 읽기전용 프로퍼티로 만들어 줄 수도 있음
// person.name = "홍길동"; //이러면 오류가 발생함 읽기 전용이라서

// sayHi에 오버로딩을 구현해보고 싶을수도있음
person.sayHi();
person.sayHi(1, 2);
// 이럴때는 함수 타입 표현식을 이용하면 안되고
// 지금처럼 호출시그니처를 이용해야함

// 인터페이스는 객체 타입을 정의하는데에 특화되어 있기 때문에 타입별칭과는 차이점이 존재함
// 인터페이스에서는 유니온이나 인터섹션 타입은 만들수 없음 | &
