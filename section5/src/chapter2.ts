/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

// 동일한 이름으로 정의한 인터페이스들은 결국 다 합쳐지기 때문에 오류가 안남
// 이러한 현상을 선언 합침이라고 함

const person: Person = {
  name: "",
  age: 27,
};

// 인터페이스는 동일한 이름으로 중복 선언이 가능하고 중복 선언을 하면 모든 선언이 합쳐지게 된다!

/**
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
