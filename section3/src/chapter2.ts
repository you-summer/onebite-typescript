/**
 * Unknown 타입
 */

/*
  언노운 타입은 타입스크립트에 존재하는 많은 모든 타입들의 슈퍼 타입임
  그래서 집합으로 얘끼해보자면 언노운 타입이라는 집합안에 많은 타입들이 포함된다고 볼수있기 때문에
  이 언노운 타입을 집합으로는 >전체집합<이라고 볼수있음
*/

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
}
// 언노운은 숫자,문자열,불리언,null,undefined,배열,객체,함수를 다 넣을 수 있음
// 이유는 당연히 unknown이라는 타입이 모든 타입의 super 타입이기 때문에

// number타입의 값을 unknown 타입의 변수에 넣는게 number 타입을 unknown 타입으로 취급하는 upcasting을 하는거임
// 업캐스팅은 모두 다 허용이 된다고 했기 때문에 결론적으로 언노운같은 모든 타입의 슈퍼 타입에는
// 모든 타입이 다 업캐스팅 할수있기 때문에 모든 값을 집어넣을 수 있다 라고 이해하면 됨

/*
   근데 반대로는 안됨
   다운캐스팅은 안된다
*/

/*
   unknown 타입의 변수에는 모든 값을 넣을 수 있지만 (업캐스팅)
   반대로 unknown 타입의 변수는 어떤 타입의 변수에도 들어갈 수가 없다 (다운캐스팅이 안된다)
 */

/**
 * Never 타입
 */

// 네버는 불가능, 모순을 의미하는 타입
// 네버타입을 타입계층도에서 보면 가장 아래에 위치해있음
// 그래서 네버는 모든 타입의 서브타입임
// 모든 집합의 부분집합이다! (공집합이다 -> 아무것도 없는 집합이다)
// 그래서 네버 타입은 집합으로 보면 공집합이다!

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10;
  // let never2: never = "hello";
  // let never3: never = true;
}
// 이 함수가 반환하는 값의 종류는 공집합이다 라고 하는것과 같음
// 반환할 수 있는 값의 종류가 아무것도 없다 라고 설정을 해놓은것

// 넘버타입의 변수를 만들고 never타입의 값을 할당하려고 하면 ! 이건됨!!
// 이게 왜 되는가? 네버타입은 모든 타입의 서브타입이기 때문에 어떤 타입의 변수에도 다 값을 넣을 수 있음
// 왜냐면 업캐스팅이니까!
// 반대로는 당연히 안됨 why? 네버타입에 숫자를 넣는다 -> 넘버타입이 네버타입으로 다운캐스팅 된다는건데 이건 안됨

// 네버타입은 어떤 값도 저장되어서는 안 되는 변수의 타입으로 활용하면 아주 좋음

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }
  let voidVar: void = undefined;
}
// 반환값이 없는 함수 그러니까 리턴문 자체가 없는 함수에 반환값 타입을 명시하는데 사용된다고 배웠음
// void는 undefined의 슈퍼타입임
// 그래서 void 타입의 변수에는 undefined의 값을 넣을 수 있음
// undefined을 void 타입의 변수에 넣는다는건 업캐스팅 하는거라 가능!
// 함수의 반환값 타입을 void로 설정하면 return undefined를 반환하도록 해도 문제가 되지 않음
// void타입은 undefined타입의 슈퍼타입이다!

/**
 * Any 타입
 */

// any 타입은 계층도 상에는 언노운 타입의 서브타입으로 위치해있지만
// any 타입은 치트키임
// 그래서 any 타입은 타입 계층도를 그냥 완벽하게 무시함
// any 타입은 모든 타입의 super 타입으로 위치하기도 하고
// 반대로 any 타입은 모든 타입의 서브타입으로도 위치하기도 함(Never만 빼고!)

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  neverVar = anyVar;
}

// 타입계층도를 보면 unknown의 서브가 any라서 anyVar = unknownVar는 다운캐스팅인데 오류가 나지 않음
// Any타입 한정으로 unknown 타입은 any 타입으로 다운캐스팅 할 수 있음

// undefined타입에 any타입을 다운캐스팅을 해도 오류가 나지 않음
// any 타입은 자기한테 오는 다운 캐스팅도 가능하고 자기가 다운 캐스팅 하는것도 됨
// 그래서 타입계층도를 다 무시하는 치트키 타입이다 라고 생각하면 됨
// 타입계층도를 깡그리 무시해버리기 때문에 위험한 타입이라서 웬만하면 사용하지 않는걸 권유

// 이런 치트키같은 any타입도 못하는게 딱 하나 있는데
// never = any // any 타입을 never로 다운캐스팅 하는건데 이건 안됨!!
// why? never 타입은 정말 순수한 공집합이기 때문에 네버타입의 변수에는 어떤 타입도 다운캐스팅 할 수 없음

// any 타입은 치트키지만 never 타입으로까지 다운캐스팅할수는 없다 라고 예외적으로 알아두면 됨

// 중요한건 타입계층도를 보고 업캐스팅과 다운캐스팅을 구분해서 이 타입이 계층상 이 위치에 있기 때문에 업캐스팅이 되고 다운캐스팅이 안되는구나를 분간할수만 있으면됨
