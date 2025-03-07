/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는지 여부
 * 2. 매개변수의 타입이 호환되는지 여부
 */

// 2가지의 기준이 모두 만족되어야만 함수의 타입이 호환된다. 라고 말할 수 있음

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10; //리터럴 타입이라 10이아닌 20이런걸 주면 오류가 발생함

a = b; // a에 b를 넣어줌 허용됨
// b = a; // 반대는 허용이 안됨. 왜그럴까?
// a 함수의 반환값 타입은 Number 타입임
// b 함수의 반환값 타입은 Number 리터럴 타입임
// 반환값 타입으로만 보자면 b에 a를 넣겠다는건
// B <- A 타입A를 타입B로 취급하겠다는것과 똑같음!
// 넘버리터럴타입 <- 넘버
// 그래서 넘버 타입을 넘버 리터럴 타입으로 취급하겠다는것
// 이건 다운캐스팅임!!
// 함수 타입간의 호환성을 평가할 때 반환값이 호환되는지에 대한 기준은 반항값끼리의 다운 캐스팅이 되면 안 되도록 평가함!

// a =  b
// A <- B
// 넘버 <- 넘버리터럴
// 업캐스팅이라 가능!
// 반환값 타입끼리는 업캐스팅하는 상황에서는 호환된다고 판단하고
// 다운캐스팅하는 상황에서는 호환되지 않는다고 판단함

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

// 타입C와D가 동일한 함수 타입을 정의하고있음
let c: C = (value) => {}; //void니까 반환은 없게
let d: D = (value) => {};
// 매개변수의 개수도 같고 타입도 같음

// c = d;
d = c;
//이때는 양쪽으로 호환됨. why? 두 개가 똑같은 타입이라서
// 근데 type D의 value의 타입이 number가 아니라 10인 넘버리터럴로 정의가 된다면 오류가 발생함

// c =  d
// C <- D
// Number <- 넘버리터럴
// 업캐스팅인데 안됨!! 매개변수의 타입을 기준으로 호환성을 판단할때는 업캐스팅일때는 호환이 안됨

// d  =  c
// D <-  C
//넘버리터럴 <- Number
// Number를 넘버리터럴에 갖다 넣겠다 이거는 다운캐스팅임
// 근데 허용됨;;
// 매개변수의 타입을 기준으로 함수타입의 호환성을 판단할 때는 다운캐스팅일때 됨

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};
// 두 타입의 관계는 애니멀이 도그타입의 슈퍼타입임

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;
//위의 상황은 호환이 안됨 아까랑 똑같은 상황인데
// animalFunc의 매개변수 타입은 Animal임 dogFunc의 매개변수 타입은 Dog
// animalFunc의 매개변수 타입이 더 큰 타입임 animal이 슈퍼타입이니까
// dogFunc에서 animalFunc로 업캐스팅되는 상황인데 안 되는 거임

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  //   console.log(animal.color);
};

dogFunc = animalFunc;
// 이게 되는 이유는 이거를 함수로 똑같이 만들어보면

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};
// dog타입은 애니멀의 서브타입이기 때문에 기본적으로 애니멀 타입의 객체들이 갖고있는 모든 프로퍼티를 도그타입은 이미 다 갖고있음

// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; //허용됨
func2 = func1;

// 할당하려고 하는 쪽의 함수의 타입에 매개변수의 갯수가 더 적을 때에만 호환이 된다라고 이해해주면 됨
// 근데!! 매개변수의 타입이 다르면 이거는 당연히 안됨
// 적어도 매개변수의 개수가 다를 때의 기준을 적용하려면 타입이 같은 매개변수가 있어야 된다 라고 이해를 하면 됨
