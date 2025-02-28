// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "summer"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"]; //string이거나 number일수도있다

// 다차원 배열의 타입을 정의하는 방법
// 다차원배열이라는건 배열안의 배열,이런걸 말함
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플타입 // 자바스크립트에는 없고 타입스크립트에서만 특별히 제공되는 타입
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];
// tup1 = ["1", "2"];
//오직 넘버, 넘버 만 저장할수있음

let tup2: [number, string, boolean] = [1, "2", true];

//튜플은 언제 유용하게 사용할수있을까?
const users: [string, number][] = [
  //유저의 정보를 2차원배열로 저장
  ["스위밍", 1],
  ["아무개", 2],
  ["김아무", 3],
  ["박무개", 4],
  //   [5, "최아무개"],
];
