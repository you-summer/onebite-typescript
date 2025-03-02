/**
 * 타입 단언
 */
type Person = {
  name: string;
  age: number;
};

/*
let person: Person = {};
// 이렇게 빈 객체로만 변수의 값을 초기화 해놓고
person.name = "스위밍";
person.age = 33;
// 이런식으로 나중에 값을 주고싶을때는 어떻게 해야할까?
// :Person 이렇게 타입 정의해놓은거때문에 오류가 나는거 같아서 지우면
// person.name person.age 여기서 오류가 남
*/

// 이럴때는
let person = {} as Person;
// as키워드를 사용하고 그 다음에 타입을 명시함
// 그러면 {}이걸 타입스크립트 컴파일러에게 Person 타입으로 간주하라고 알려줌
person.name = "스위밍";
person.age = 33;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 타입단언은 막 쓰면 안됨

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
// 이게 가능한 이유는 10은 number타입이고
// never는 모든 타입의 서브타입이라 A(number)가 B(never)의 슈퍼타입임
let num2 = 10 as unknown;
// 10은 number타입이고 unknown은 모든타입의 슈퍼타입
// A(number)가 B(unknown)의 서브타입임
// let num3 = 10 as string;
// 오류가 나지 않게 하는 방법이 하나 있음
let num3 = 10 as unknown as string;
// 10 -> unknown
// unknown -> string
// 이렇게 언노운을 끼고 다중으로 단언하면 이런식으로 단언이 안되는 타입도 가능하게 해줌
// 이거는 절대로 좋은 방법이 아님!!!!!!!

/**
 * const 단언
 */

let num4 = 10 as const;
// 뒤에 as const를 붙이면 number 리터럴 타입 10으로 추론됨
// const 단언은 const로 선언한 것과 동일한 효과를 보도록 만들어주는 단언임
// const 단언은 객체타입과 함께 사용할 때 활용도가 있음

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// as const를 붙이고 보면 모든 프로퍼티가 read-only 읽기 전용 프로퍼티가 되었음
// as const를 붙여서 초기화한 객체는
// cat.name = '' 수정할 수 없는 객체가 됨

// as const를 붙여주면 전부 다 read-only가 되기 때문에 상황에 따라 편리하게 사용할 수 있다

/**
 * Non null 단언
 */
// 어떤값이 null이거나 undefined이 아니라고 타입스크립트 컴파일러에게 알려주는 역할을 함

type Post = {
  title: string;
  author?: string; //요즘 글은 익명으로 쓰기도함 그래서 author 프로퍼티는 없을수도있다고 가정!!
};

let post: Post = {
  title: "게시글1",
  author: "스위밍",
};
// 작성자의 이름 길이가 몇개인지 출력하는 기능을 만들어볼것

const len: number = post.author!.length; //자동으로 ? 키워드가 추가됨
// 여기서 ? 는 자바스크립트에서 제공하는 옵셔널 체이닝이라는 키워드
// 옵셔널 체이닝은 author 프로퍼티의 값이 null이거나 undefined일 경우에 이렇게 점표기법으로 접근하면 오류가 발생하니까
// 이렇게 ? 를 붙여주면 author 라는 프로퍼티의 값이 없으면 그냥 이 값 전체가 undefined가 되도록 만들어주는 연산자
// 근데 지금 오류가 발생함. 이유는? 옵셔널체이닝을 이용하면 undefined가 발생할수도있는데 number타입으로 정의한 변수에는 undefined값은 들어갈수가 없어서 ㅜㅜ
// 옵셔널체이닝을 이용하면 원하는 동작을 할 수가 없음

// 이때는 Non null 단언을 사용하면 됨
// ? 물음표를 ! 느낌표로만 바꿔주면 됨 // const len: number = post.author?.length; -> 여기의 ?부분을 ! 느낌표로
// 느낌표만 붙여주면 이 값이 null이나 undefined가 아닐것이라고 타입스크립트 컴파일러가 믿도록 만듦
