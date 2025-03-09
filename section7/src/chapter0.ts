/**
 * 제네릭 // 일반적인 포괄적인
 * 제네릭 함수 라고 하면 // 일반적인 함수 포괄적인 함수 // 종합병원 - 제네럴 호스피털
 * 제네릭 함수 - 종합 함수! (모든 타입의 두루두루 쓸수있는 범용적인 함수다!)
 */

// 제네릭 함수
function func<T>(value: T): T {
  // <T> : 타입을 저장하는 변수
  return value;
}

let num = func(10);

let bool = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]);
