/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기 <- 자바스크립트의 함수
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
  return a + b;
}
// 이 함수를 다른 사람한테 설명해야 된다면 어떻게 설명하는게 가장 좋은 방법일까?
// 함수라는건 기본적으로 매개변수를 받아서 어떤 연산들을 함수 내부에서 거쳐서 결과값을 반환하는 자바스크립트의 문법임

// 반환값의 타입이 없다고 해도 반환값의 타입은 return문을 기준으로 자동 추론됨
// 지금 상황에서 생략하면 a도 number / b도 number 타입이기 때문에 number타입+number타입 = number타입이겠지 하고 추론을 해줌

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;
// 화살표 함수 역시 반환값 타입은 반환값을 기준으로 자동으로 추론함
// 화살표 함수 타입정의도 함수 선언식과 동일한 방식으로 해주면 됨

/**
 * 함수의 매개변수
 */

function introduce(name = "스위밍", age: number, tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}
// 기본값으로 "스위밍"을 넣어줬기 때문에 string으로 추론함
// 주의할점
// 1. 기본값과 다른 타입으로 매개변수의 타입을 정의하면 (ex. (name: number = "스위밍"))
//    기본값은 string타입이고 변수의 타입은 number로 정의되어 있는데 뭐가 맞는거냐? 오류가 발생함
// 2. 함수를 호출할때 (ex. introduce(1);) 자동추론된 매개변수의 타입과 다른 타입의 값을 인수로 전달하면 오류가 발생함

// 매개변수에 tall을 추가함
// 함수 호출
introduce("스위밍", 32, 168);
// 이때 매개변수에 tall을 생략하고 함수의 인수를 전달하는 경우도 있을수가 있음
introduce("스위밍", 32);
// 오류가 발생함. tall이라는 매개변수를 생략하고 싶다면
// tall? 이렇게 물음표를 넣어서 선택적 프로퍼티를 만들었던것처럼 '선택적 매개변수'로 만들어주면 됨
// tall에 마우스를 올려보면 이제는 number | undefined 라고해서 number와 undefined의 유니온 타입으로 추론됨

//  console.log(`tall : ${tall + 10}`); 여기서 10을 더하려고 하면 오류발생함
// 왜냐면 지금 + 덧셈 연산은 숫자와 숫자간에만 할 수 있는 연산인데
// tall이라는 값은 undefined일 수도 있는 값이기 때문에 불완전한 연산을 하지 못하도록 TypeScript가 막아줌
// 그래서 이때는 조건문을 사용해야함
/*
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
    tall이 numberType임을 보장해서 타입가드를 만들어서 type을 좁혀주면 내부에서는 tall이 넘버타입으로 좁혀지기 때문에 이렇게 사용해야됨
*/

// 마지막으로 선택적 매개변수를 사용할때 주의점
// 선택적 매개변수는 필수 매개변수들 앞에 오면 안됨
// name같은 매개변수는 생략할수가 없음
/*
    function introduce(name = "스위밍", tall?: number, age: number)
    이렇게 하면 age는 오류가 발생함
    선택적 매개변수가 필수 매개변수 앞에있어서 그럼

*/

/**
 * rest parameter
 * ...rest 라고 해서 rest 파라미터로 만드는 문법은 자바스크립트의 문법임 가변적인 길이의 인수들을 전달하면 얘네들을 배열로 묶어서[1,2,3]
 * rest 변수에 저장할수있도록 도와주는 문법
 */
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); //15

// rest 파라미터, rest 매개변수의 타입은 어떻게 저장해줘야할까?
// 지금은 전달해주는 값이 다 숫자라 number[] 넘버배열타입으로 전달해주면됨
