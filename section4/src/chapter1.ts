/**
 * 함수 타입 표현식
 */

type Operation = (a: number, b: number) => number;
//       매개변수의 타입을 정의하는곳 => 반환값의 타입을 정의하는곳

const add: Operation = (a, b) => a + b;
// 타입 별칭을 이용해 함수의 타입을 별도로 정의하는 이런 문법을 함수 타입 표현식이라고 함

// 함수 타입 표현식을 사용하면 좋은 점은 덧셈을 하는 add함수뿐만아니라
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
// 사칙연산함수들처럼 비슷한 형식의 함수를 여러개 만들어야할때
// 타입을 일일이 다 정의해줘야 된다면 중복되는 코드가 너무 많아짐!
// 이때 함수 타입 표현식을 이용하면 굉장히 깔끔하게 코드를 고칠 수 있음
// 간결하고 깔끔하게 정의가능

// 함수 타입 표현식은 타입별칭 없이도 표현식만으로도 타입을 정의하는게 가능함
const divide: (a: number, b: number) => number = (a, b) => a / b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 */

type Operation2 = {
  (a: number, b: number): number;
};
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

// 이렇게 함수의 타입을 정의하는 문법을 호출 시그니처라고 함
