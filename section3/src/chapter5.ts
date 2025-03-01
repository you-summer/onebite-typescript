/**
 * 타입 추론
 */

let a = 10;

// 첫번째로 살펴볼 가장 대표적인 Type 추론이 가능한 상황은 일반적인 변수를 선언하는 상황
// 변수 a를 선언하고 초기값으로 number type의 값 10을 넣어주면
// 자동으로 이 변수의 타입을 넘버 타입으로 추론함

let b = "Hello";
// 커서를 올려보면 b라는 변수는 string type으로 잘 추론이 되고 있음

// 이렇게 일반적으로 변수를 선언하고 초기화하는 상황에서는 알아서 자동으로 타입을 추론함
// 이때 타입스크립트가 타입을 추론하는 기준은 변수의 초기 값!
// 초기값을 기준으로 변수의 타입을 추론함

let c = {
  id: 1,
  name: "스위밍",
  profile: {
    nickname: "치치",
  },
  urls: ["https://dksgjdla.com"],
};
// 이렇게 복잡하게 해도 마우스 커서를 올려보면 타입을 잘 추론하고있음

let { id, name, profile } = c;
// 이렇게 객체를 구조분해할당 할때에도 커서를 올려보면 변수의 타입을 자동으로 잘 추론하고있음

let [one, two, three] = [1, "hello", true];
// 배열을 이렇게 구조분해할당 한다고 해도 각각의 원소는 타입이 잘 추론되고 있음

// 객체와 배열의 구조분해 할당을 포함해서 웬만한 변수 선언은 거의 다 자동으로 잘 추론이 됨

function func() {
  return "hello";
}
// 이런식으로 함수의 반환값을 그냥 문자열로 지정해주기만 하면
// 함수의 반환값 타입도 자동으로 잘 추론해줌
// 함수의 반환값 타입을 추론할 때는 초기화 하는 값이 아니라 return문 다음에 오는 반환값을 기준으로 추론함

function func1(message = "hello") {
  return "hello";
}
//이렇게 매개변수에 기본값이 설정되어있다면 기본값이 설정된 매개변수의 타입도 기본값을 기준으로 타입을 추론함

//--------------------------------------------------------------

let d; // 초기값 생략
// any 타입으로 추론이 되고 있음
d = 10;
// 숫자값을 넣어주면 다음라인에서는 d가 number타입으로 추론이 되고있음
d.toFixed();
// d.toUpperCase(); // 위에 any타입과는 달리 문자형메소드를 사용하면 이거 지금 number타입이라 안돼;; 라고 알려주기도함

d = "hello"; //문자값을 넣어도 문제가 되진 않음/ 다른 타입의 값을 할당하고 나서 다음 라인에서 보면 d는 string으로 바뀜
d.toUpperCase();
// 이때 위의 d에 마우스를 올려보면 number타입으로 추론이 되고 있음!

// 이렇게 타입이 변신하듯이 계속 바뀌는 상황을 Any 타입의 진화! 라고 부름

// 변수를 선언하고 초기값을 지정하지 않으면 이때는 암묵적인 Any타입으로 추론이 됨
// 일단 아무런 정보가 없으니까 암묵적 Any라고 할게~ 라고 하는 것
// 이런경우에는 변수에 들어가는 값에 따라서 Any 타입이 계속해서 진화를 하게 됨

// 암묵적으로 Any 타입으로 추론되는건 명시적으로 Any 타입을 정의하는거랑은 동작이 다름
// 명시적으로 Any 타입을 정의하면 d가 그냥 다 명시적인거임
// 암묵적으로 any 타입으로 만들면 타입이 계속해서 진화한다

// 웬만하면 암묵적인 any로 변수의 타입을 추론하게 두는건 추천하지 않음
// 그냥 초기 값을 지정하지 않으면 변수의 타입이 이렇게 진화할 수 있다~ 라고 알아두면 됨!

//----------------------------------------------------------------

const num = 10;
// const로 주게되면 그냥 이 값을 갖는 넘버 리터럴 타입이 추론됨
// const로 선언한 num이라는 변수는 어차피 상수이기 때문에 이제부터는 10이라는 값이외에는 다른 값을 담을 일이 없음
const str = "hello";
// 이것도 string타입이 아니라 "hello"라는 초기값을 기준으로 String리터럴 타입으로 추론이 되는걸 볼수있음

let arr = [1, "string"];
