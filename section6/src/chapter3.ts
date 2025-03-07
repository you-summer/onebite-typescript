/**
 * 인터페이스와 클래스
 */

// 객체타입 하나를 정의하는 캐릭터인터페이스라는 게임캐릭터객체타입을 정의하는 인터페이스를 하나 만들어줌
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void; // 실제로 이동하는 메서드
}

class Character implements CharacterInterface {
  // implements : 구현하다
  // Character 클래스는 CharacterInterface를 구현한다

  // 필드
  // name: string;
  // moveSpeed: number;

  // 인터페이스로 정의하는 필드들은 무조건 public임

  // 생성자
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {
    // this.name = name;
    // this.moveSpeed = moveSpeed;
    // 만약 private 필드가 필요하다면 인터페이스에 정의하지 말고 그냥 따로 정의해줘야함
  }

  // 메서드
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
