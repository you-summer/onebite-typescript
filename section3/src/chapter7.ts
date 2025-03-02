/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  value;
  //   value.toUpperCase();
  //   value.toFixed();
  if (typeof value === "number") {
    console.log(value.toFixed()); // 여기서는 value의 타입이 number로 추론됨
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // 여기서는 value의 타입이 string로 추론됨
  } else if (value instanceof Date) {
    // Date 객체는 객체니까 object라고 해줌
    // 근데 (typeof value === "object") 사용하는건 좋은 방법은 아님
    // why? 유니온에 null이 들어올수있다면 바로 value.getTime()은 오류가 발생함
    // 자바스크립트 연산자인 typeOf 연산자는 null 값에다가 typeOf를 하면 object를 반환함
    // 그래서 이 조건문을 통과하는 값이 Date객체 뿐만 아니라 null값도 통과할수있다는것
    console.log(value.getTime());
    // instance of라는 연산자를 사용함
    // (value instanceof Date) 그러면 이제 오류가 사라짐!
    // instance of 연산자는 왼쪽에 있는 값이(value) 오른쪽(Date)의 인스턴스냐 라고 물어보는 연산자임
    // 그렇다고 하면 true를 반환하고 아니면 false를 반환함
    // 왼쪽에있는 value라는 값이 Date객체냐? 라고 물어보는거임
    // 그래서 null은 이 조건을 통과할 수 없음!!
    // 여기서는 이제 value의 타입이 Date 객체일 것이 보장되기 때문에 커서를 올려보면 Date 객체로 잘 추론되고 있음
  } else if (value && "age" in value) {
    // (value instanceof Person) 이걸 사용하면 오류가 발생함
    // 'Person'은 형식만 참조하지만 여기서는 값으로 사용됩니다
    // 형식만 참조한다는건 person은 type이다 라는 뜻
    // instanceof라는 연산자는 우측에 type이 들어와서는 안됨!!
    // instanceof 연산자는 왼쪽에오는(value)값이 오른쪽에오는 class의 instance인지 확인하는 연산자임
    // Date는 자바스크립트의 내장 클래스임 그래서 instanceof 연산자 뒤에 올수있음
    // 근데 Person은 class가 아님 !!
    // 그냥 타입 별칭으로 만든 일종의 객체 타입임
    // 이럴때는 in 이라는 연산자를 쓰면됨
    // in 쓰는방법
    // in 앞에 프로퍼티를 적음 'age' in value (age라는 프로퍼티가 value라는 값에 있냐 라고 물어보는것)
    // value라는 값에 age라는 프로퍼티가 존재하면 true를 반환 아니면 false를 반환
    // ("age" in value) 해당 조건문을 만족하면 value의 타입이 중괄호 안에서는 person타입이라고 보장할 수 있음
    // why? value의 값으로 들어올수있는게 number,string,date,null,person인데 이 중에 age라는 프로퍼티를 가질 수 있는건 Person밖에 없음
    // ("age" in value) 근데 여기서 value에 빨간줄로 오류가 나고 있음 ('value'은(는) 'null'일 수 있습니다.)
    // in 연산자 뒤에는 null이나 undefined가 들어오면 안됨
    // 그래서 이때는 value가 null이 아님을 밝혀주기 위해서 (value) 밸류가 있다고 밝혀주고 && 연산자를 활용해서 value가 있을 때에만 age가 value에 있냐?라고 검사해주면됨
    value;
    // 그래서 결국 이 조건문 내부의 value의 type은 Person type으로 잘 좁혀짐!
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
}
// 우리는 분명 number와 string의 유니온타입으로 정의했는데 조건문 위쪽에서는 number 아래에서는 string으로 추론됨
// 조건문 바깥에서는 string과 number의 유니온타입으로 추론되고있음
// 그래서 조건문 밖에서는 toUpperCase(),toFixed()메소드는 오류가 나는걸 볼수있음
// 타입스크립트가 이렇게 동작하는 이유는 type좁히기라는 기능때문!

// typeof value === "number" 이런 조건문을 타입가드라고 부름
// 넘버 타입의 값 이외에는 {}중괄호 내부로 들어갈 수 없도록 가드를 하고있는것과 비슷해서!

// 잘 활용하면 좋은게 개발을 하다보면 매개변수에 여러가지 타입의 값들이 들어올 수 있고
// 함수 내부에서는 값의 타입에 따라서 각각 다른 동작을 하는 함수들을 꽤 많이 만들게 됨
// 그래서 타입 좁히기 기능과 타입 좁히기를 도와주는 타입 가드에 대해서 잘 알아두면 좋음

// * 타입 가드 *
