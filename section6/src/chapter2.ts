/**
 * 접근 제어자
 * access modifier
 * => public private proteced
 */

// 클래스를 만들 때 필드나 메소드에 접근할 수 있는 범위를 설정하는 문법

class Employee {
  // 필드
  //   private name: string;
  //   protected age: number;
  //   public position: string;
  // public 아무런 제약이 없음
  // private 클래스 외부에서는 사용불가, 메서드에서만 이 값을 쓸거다 할때
  // protected 외부에서는 접근불가, 파생클래스 안에서는 사용가능

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

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

  // 메서드
  func() {
    // this.name;
    this.age;
  }
}

const employee = new Employee("스위밍", 66, "개발자");
// employee.name = "홍길동";
// employee.age = 30;
employee.position = "디자이너";

/*
    public : 가장 기본적인 접근 제어자, 아무것도 제한하지 않음
    private : 가장 프라이빗하고 가장 제한적인 접근 제어자, 클래스 내부가 아니면 어디서도 접근이 불가능해짐
    protected : 외부에서는 접근 자체가 불가능하도록 막지만, 파생 클래스 내부에서는 접근할 수 있도록 해줌
 */

// 접근 제어자는 생성자의 매개변수 앞에 다는 것도 가능함
// 생성자에 접근 제어자를 달면 이름을 가지고 private이라는 name을 만들고 protected age라는 필드를 만들고 public position 이라는 필드를 자동으로 만든다!!
// 생성자에 접근 제어자를 달면 필드의 정의는 생략해줘야됨

// 접근 제어자가 붙어있는 매개변수들은 자동으로 필드도 정의하고 심지어 필드의 값 초기화도 가능함
// this.name = name; 이런작업을 자동으로 해줌

console.log(employee);
