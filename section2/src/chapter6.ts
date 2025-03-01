// any
// 특정 변수의 타입을 우리가 모를 때

// 변수의 타입을 any로 지정해주면 어떤 타입이던지 변수에 넣을수 있다
// any는 모든 타입이 될 수 있기 때문에 문자 말고도 불리언, 객체, 함수도 집어 넣을 수 있음
// 마치 자바스크립트 변수를 쓰는것 같음

let anyVar: any = 10;
anyVar = "hello";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase(); //문자형 메소드
// anyVar.toFixed(); //숫자형 메소드

let num: number = 10;
num = anyVar;
// 애니타입은 변수에 지정할 경우 모든 타입의 값을 다 할당 받을 수 있음
// 모든 타입의 변수에 다 애니타입의 값을 집어 넣을수도 있음
// any type은 타입 스크립트의 타입 거사를 어찌되는 다 통과하는 치트키 같은 타입

// 이렇게하고 tsx 해보면 오류가 런타임에서 남
// any type은 타입 검사를 어찌되든 다 통과하는 치트키같은 타입이기 때문에 사실상 타입검사를 안하는거랑 똑같음
// 그래서 변수에 any Type을 지정한다는건 typeScript가 가지는 이점을 다 포기한다는것과 다를게없음
// 오류가 있는 코드도 검사를 다 통과하고 런타임의 에러가 발생하는 최악의 상황유발
// 그래서 any type은 최대한 사용하지 않는게 좋음

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

//unknown 타입을 지정해주면 문자열이던 숫자던 함수던 객체던 any타입을 지정한것처럼 아무타입의 값이나 다 집어넣을 수 있음
// 변수에 어떤 타입이 들어올지 모르겠다 라고 하는 경우에는 any나 unknown 둘 중 하나를 쓸 수 있음

num = unknownVar;
//unknown 타입은 이런식으로 numberType에 집어넣을 수 없음
// number타입뿐만 아니라 모든 타입의 변수에 다 Unknown타입의 값을 집어 넣을 수 없음
// 그리고 any 타입과는 다르게 toUpperCase와 같은 메소드를 쓰는것도 허용하지 않음
// 덧셈, 뺄셈, 곱셈, 나눗셈 등의 연산 자체도 Unknown 타입에서는 다 쓸 수가 없음

// unknown 타입의 값을 활용하고 싶다면?
if (typeof unknownVar === "number") {
  // unknown타입의 변수가 넘버 타입임을 확실히 밝혀주었을 때만 이런식으로 unknown 타입의 변수를 넘버타입으로 정제해서 사용할 수 있음
  num = unknownVar;
}
//이런 과정을 타입정제 혹은 타입좁히기 라고 함

// any나 unknown 타입은 변수의 타입으로 지정하면 해당 변수는 모든 타입의 값을 다 할당받을 수 있지만
// any 타입은 반대로도 모두 다 가능한반면 unknown은 반대로는 다 안된다! 라고 이해하면됨

// 그래서 변수에 저장할 값이 확실하지 않을 때에는 any 보다는 조금 더 안전한 unknown 타입을 활용하는게 좋음
