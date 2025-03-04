/**
 * 인터페이스의 확장
 */

type Animal = {
  name: string;
  color: string;
};

interface Dog extends Animal {
  //extends = 확장하다
  // 인터페이스 Dog는 인터페이스 애니멀을 확장해주는 타입이다 라고 정의해주는것
  // 확장하다 = 기존의것들을 다 가지고잇는 상태에서 뭔가를 더 추가하는것
  // 결국 Animal 인터페이스에서 name과 color모든 프로퍼티를 갖고있는 상태에서 isBark라는 프로퍼티만 하나 추가하는 타입을 만들겠다 라는것
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다른말로 상속이라고도 부름
// 부모님으로부터 우리가 가진 재산을 다 물려받는것 그런것처럼
// 타입간의 상속도 애니멀 타입같은 슈퍼타입으로부터 Dog나 Cat, Chicken같은 타입들이 가지고있는 프로퍼티들을 다 물려받는 과정!

// 원본 프로퍼티 타입의 서브타입으로만 정의를 해야겠다! 라고 이해하면됨

// Animal이 인터페이스가 아닌 type 별칭이어도 확장할 수있음
// 인터페이스는 객체타입이면 다 확장할 수 있다!

// 다중확장
// 도그 인터페이스처럼 하나의 객체타입만 확장하고 있는 게 아니라
interface DogCat extends Dog, Cat {
  // 이렇게 도그와 캣 둘 다 확장하도록 만들 수도 있음
}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
