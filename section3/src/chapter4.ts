/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재함
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean; // | undefined | null | {};
// a라는 변수에는 string타입과 number타입의 합집합 타입, 유니언 타입으로 정의가 된것
a = 1;
a = "hello";
// 숫자값도 넣을 수 있고 문자값도 넣을 수 있음
// 이렇게 만든 union 타입은 string number union이라고 부를 수 있음

a = true;
// union 타입을 만들 때 |를 이용해서 추가할 수 있는 타입의 개수는 무한대임

let arr: (number | string | boolean)[] = [1, "hello", true];
// 여러개의 타입을 갖는 배열의 타입에도 사용할 수 있었음

// 객체타입들을 이용해서 유니온 타입을 만들어 볼거임

type Union1 = Dog | Person;
// Dog 타입과 Person타입의 유니온 타입으로 만들어줌

// 유니온 타입을 갖는 변수를 정의하고 값을 넣어볼 것
let union1: Union1 = {
  //이때 객체는 마치 Dog 타입의 객체를 만들듯이 name과 color프로퍼티만 있도록 만들어줌
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   // 두 타입이 공통적으로 가지고있는 name이라는 프로퍼티만 넣은 객체는 허용이 안됨;;
//   name: "",
// };

/*
 * Dog과 Person , 두 타입은 누구도 서로의 슈퍼타입이거나 서브타입이지 않고 그냥 교집합을 가지고 있는 상태임
   Dog타입과 Person타입이 각각 color, language 라는 서로에게 없는 프로퍼티를 가지고 있기 때문

   union4는 name만 가지고 있음
   color가 없어서 Dog타입에도 포함될수 없고
   language도 없기 때문에 Person도 안됨
 */

/**
 * 2. 교집합 타입 - Intersection 타입
 */
let variable: number & string; // 넘버타입과 스트링타입의 교집합타입에 해당되는 그런 타입
// number타입과 string타입의 교집합은 공집합이라고 해서 never타입으로 만들어진거임

// intersection 타입, 교집합 타입은 & 연산자를 이용해서 여러개의 타입간에 교집합 타입을 만들 수 있는 타입
// 기본 타입들을 가지고 intersection type을 만들면 웬만하면 다 Never타입임
// 교집합은 객체 타입에서 많이 사용함

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

// Dog와 Person의 교집합 타입은 어떤 객체들을 포함할까?
let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};
// Dog타입의 프로터피와 Person타입의 프로퍼티를 다 가지고 있는 객체들만 포함됨
// 만약에 프로퍼티가 하나라도 빠지면 이 타입에 포함되지 않음
