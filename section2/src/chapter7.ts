// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

// 아무것도 없다는게 무슨 의미일까?
function func1(): string {
  return "hello";
}

function func2(): undefined {
  console.log("hello");
}
// func2는 아무런값도 반환하고 있지 않음
// 이렇게 아무런 값도 반환하지 않을 때 해당 함수의 반환값 타입은 무엇으로 해야할까?
// 이럴때 사용하는 타입이 바로 void 타입임

let a: void;
// 변수의 타입으로도 정의할 수 있음
// 이렇게 void 타입으로 정의한 변수에는 어떠한 값도 담을 수가 없음
// a = 1;
// a = "hello";
// a = {};
// a = undefined; // 오직 undefined만 담을 수 있음
// 근데 이때 tsconfig.json에서 "strictNullChecks": false (엄격한 null 검사 옵션)을 끄면 이때는 예외적으로 void타입의 변수에도 null을 집어 넣을 수 있음
// 자바스크립트를 배울때 아무것도 없는 값은 undefined라고 배웠음 null도 있고!
// 그런데 굳이 func2 함수 같은 반환값이 없는 함수의 반환값 타입을 정의할때 undefined나 null을 정의하면 되지 void 타입을 추가로 만드는 이유는 뭘까?
// 그 이유는 func2 함수의 반환값을 undefined를 설정하면 오류가 발생함
// 진짜 이 함수한테 return undefined; 로 undefined라는 값을 반환하게 만들어야함
// 반환 값의 타입으로 null이나 undefined을 정의하면 진짜 null이나 undefined을 반환하기 위해서 return문을 또 써줘야하기 때문에
// 리턴문을 사용하고 싶지 않은 함수의 반환값 타입으로는 void를 사용해야함

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {} //무한루프를 도는 함수
}
// func3 함수처럼 정상적으로 종료될 수가 없어서 이 함수에 반환값이 있는 거 자체가 모순이다!
// 라고 하는 경우에는 never를 사용함

function func4(): never {
  throw new Error();
}
// 자바스크립트에서는 이런 식으로 프로그램 실행 도중에 에러를 던져줄 수 있었음
// func4 함수도 실행되면 바로 프로그램이 중지될거기 때문에 반환값 타입으로는 never를 정의하는게 가장 적합함

// never타입은 불가능을 의미하고 모순을 의미하는 타입

let b: never;
//never 타입도 변수의 타입으로 정의해줄수있음
// b = 1;
// b = {};
// b = "";
// b = undefined;
// 어떤 값도 담을 수가 없음
// void는 undefined를 담을 수 있었지만 never는 undefined를 담을 수 없음
// null도 담을 수 없음
// never 타입은 변수의 타입으로 활용하면 어떤값도 저장할 수 없는 어떤 값도 저장하는게 말도 안되는 변수의 타입을 정의할 때 활용할 수 있음
