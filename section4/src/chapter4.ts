/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat; //유니온타입으로 Animal타입을 정의

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  // 동물들에 대해서 경고하는 함수
  if (isDog(animal)) {
    // 강아지
    animal;
  } else if ("isScratch" in animal) {
    // 고양이
  }
}
