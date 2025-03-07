/**
 * 클래스
 */

let studentA = {
  name: "스위밍",
  grade: "A+",
  age: 32,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요 ");
  },
};
// 클래스는 똑같은 모양의 객체를 공장에서 찍어내듯 한줄로 간단하게 만들 수 있도록 도와주는 문법

class Student {
  //클래스의 앞글자는 대문자로 하는 파스칼 표기법을 사용함

  // 필드
  // 클래스가 만들어낼 객체 프로퍼티를 의미함
  name;
  grade;
  age;
  // 각각의 네임,그레이드,에이지를 필드라고 부름
  // 이렇게 필드를 설정하면 스튜던트 클래스가 만들어내는 객체는 이제 다 네임,그레이드,에이지라는 프로퍼티를 갖게되는것

  // 생성자
  // 실제로 객체를 만드는 메서드
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
    //이때 this는 클래스가 지금 만들고 있는 객체
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다!!`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다!!`);
  }

  programing() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper(
  "스위밍밍",
  "b+",
  27,
  "TypeScript"
);
console.log(studentDeveloper);
studentDeveloper.programing();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 이건 스튜던트 인스턴스라고 부를 수 있음
let studentB = new Student("홍길동", "A+,", 55);
// 클래스를 호출해서 객체를 생성할때는 이렇게 new라는 키워드를 붙여주셔야됨 (새로운 객체를 만들어라 라는 의미로 쓸수있음)
// new뒤에 클래스의 이름을 쓰고 ()소괄호 열고 인수를 전달하게 되면 실제로는 클래스에 있는 생성자를 호출하게되는거임

// console.log(studentB); //Student { name: '조연정', grade: 'A+,', age: 55 }
// studentB.study();
// studentB.introduce();
