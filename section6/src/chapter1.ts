/**
 * 타입스크립트의 클래스
 */

// 클래스부터 바로 만들기 전에 만들려는 클래스가 어떤 모양의 객체를 만들건지 객체로 먼저 표현해보면 좋음
// 직장인을 표현하는 객체를 만들거임

const employee = {
  name: "조연정",
  age: 66,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("스우밍", 66, "개발자");
console.log(employeeB); //Employee { name: '스우밍', age: 66, position: '개발자' }

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
  // 타입스크립트의 클래스는 타입으로도 활용할 수 있다
};
