//object
let user: {
  id?: number; //물음표가 붙으면 해당 프로퍼티에 값이 있어도 되고 없어도 된다는 뜻
  // 근데 만약 있을거면 id의 value 타입은 number여야 한다! 라고 알고있으면 됨
  // 선택적 프로퍼티, 영어로는 옵셔널 프로퍼티 라고 부름
  name: string;
} = {
  id: 1,
  name: "스위밍",
};

let config: {
  readonly apiKey: string;
  //readonly 작성시 프로퍼티의 값을 바꾸는 행위를 막아줌
} = {
  apiKey: "MY API KEY",
};
// 값이 절대 수정되어선 안되는 프로퍼티가 있다면 readonly 키워드를 사용하기
