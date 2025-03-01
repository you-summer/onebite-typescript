/**
 * 기본타입간의 호환성
 */

// 기본타입간의 호환성은 특정 타입을 다른 타입으로 취급해도 괜찮은지 판단하는것
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;
// 이때 number 리터럴 타입의 값을 넘버타입의 변수에 할당하는건 허용되었음
// 이건 넘버타입이 넘버리터럴타입보다 더 큰 타입이기 때문에 업캐스팅이라 가능했음

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// 이때 animal 변수에 dog를 집어넣으면 어떻게 될까?
animal = dog; // 아무런 문제가 일어나지 않음

// 반대로는 어떨까?
// dog = animal; // 오류가 발생함

// dog 타입을 Animal 타입으로 취급하는건 OK (업캐스팅)
// Animal 타입을 Dog 타입으로 취급하는건 X (다운캐스팅)
// 타입간의 관계로 알 수 있는 사실은 dog타입이 animal로 가는건 되고 animal이 dog로 가는건 안됨

// 애니멀 타입이 사실은 도그타입을 포함하는 도그 타입의 슈퍼타입
// 도그 타입은 애니멀타입의 서브타입

// 객체 타입들도 기본타입들처럼 서로 슈퍼타입 서브탕비 관계를 가짐

// 어떤 기준으로 이런관계를 갖느냐?
// 객체는 프로퍼티를 기준으로 관계를 가짐

// 도그 타입이 더 작은 타입임 (도그가 서브타입)
// 도그 타입의 프로퍼티는 name, color, breed
// 애니멀타입의 프로퍼티는 name, color
// 도그 타입이 애니멀타입의 프로퍼티를 다 가지고 있음 거기다 추가로 breed라는 프로퍼티까지 가지고 있음
// 그러면 도그가 가진게 더 많으니까 도그 타입이 더 큰 타입아닌가? 싶을텐데 아님! 반대임!
// 타입스크립트는 프로퍼티를 기준으로 타입을 정의하는 구조적 타입 시스템을 따른다고 했음

// 지금 이렇게 정의한 애니멀 타입은 어떤 타입인거냐면 객체중에 name과 color 프로퍼티가 있는 객체는 다 애니멀 타입이야 라고 해주는거임
// 도그 타입은 구조적으로 name, color 프로퍼티 거기다 추가로 breed 프로퍼티까지 3개를 갖고있는 객체를 도그타입으로 봐줄게 라고 하는것

// 도그 타입에 해당되는 객체는 name, color, breed 는 무조건 갖고있는 객체이기 때문에 애니멀 타입에도 해당되는 객체가 됨
// 왜냐면 도그 타입에 해당되면 name과 color는 무조건 있을 거기 때문에 animal 타입의 규칙에도 해당 됨

// breed 추가 프로퍼티를 갖고있는 객체라고 하더라도 name과 color만 있으면 다 animal 타입이기 때문에 dog타입의 값들도 결국엔 다 animal타입의 값으로 포함될수있음

// 반대로 animal 타입의 객체들은 모두 dog타입에 포함된다고 보긴 어려움
// dog타입의 객체가 되려면 breed라는 추가적인 프로퍼티까지 가지고 있어야 되는데 Animal 타입에 해당되는 객체에는 breed라는 프로퍼티를 가지지 않은 객체들도 있을 수 있어서!

// 기린같은 객체는 dog타입에 포함된다고 보긴 어려움 why? breed가 없으니까
// 객체 타입들 간의 관계를 정의할 때는 dog타입처럼 breed같은 추가 프로퍼티가 있는 타입이 슈퍼타입이 되는게 아니고
// 추가 프로퍼티가 없는, 조건이 더 적은 타입이 슈퍼타입이 됨

// animal타입의 변수 , animal에는 Dog타입의 변수 dog를 넣을 수가 있음 (업캐스팅)
// Dog 타입의 변수 dog에는 Animal타입의 변수 animal을 넣을 수가 없음 (다운캐스팅)

type ProgramingBook = {
  name: string;
  price: number;
  skill: string; // 어떤스킬을 다루는지
};

let book: Book;
let programingBook: ProgramingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

// book타입이 슈퍼타입 ProgramingBook 타입이 서브타입

book = programingBook;
// programingBook = book; //불가능 다운캐스팅

/**
 * 초과 프로퍼티 검사(타입스크립트의 특수한 기능)
 */

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs",
};
// 지금처럼 이렇게 변수를 초기화할 때 초기화 하는 값으로 객체 리터럴을 사용하면 발동하는 검사
// 객체 타입 변수를 초기화할 때 이렇게 객체 리터럴을 사용하면
// 스킬같은 정의해 놓지 않은 프로퍼티를 작성하면 안 되도록 막는 검사가 이 초과프로퍼티 검사임
// 객체 타입 변수를 초기화할 때는 객체 리터럴을 사용할 거면 주석 처리를 하거나 삭제해서 딱 객체 타입에 정의된 프로퍼티만 넣을 수 있도록 해야 함

// 이런 초과 프로퍼티 검사를 피하려면 새로운 변수를 만들고
let book3: Book = programingBook;
// 만들어뒀던 programingBook 변수를 넣으면 초기화할 때 객체 리터럴을 사용한건 아니기 때문에
// 초과 프로퍼티 검사가 발동하지 않아서 이런 경우에는 허용됨

function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  //   skill: "reactjs",
});
// 함수의 인수로 객체를 전달할 때도 이런식으로 객체리터럴을 전달하면 오류남 ㅜㅜ
// 서브타입 객체를 넣으려고 한다면
func(programingBook);
// 객체 리터럴을 이용하는게 아니라 변수에 저장해뒀다가 인수로 변수를 전달해야됨
