// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
//같은 스코프에 중복된 이름으로 설정하면 안됨

function func() {
  type User = {};
}

let user: User = {
  id: 1,
  name: "스위밍",
  nickname: "summer",
  birth: "1993.11.01",
  bio: "안냐세요",
  location: "서울시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "summer",
  birth: "1993.11.01",
  bio: "안냐세요",
  location: "서울시",
};
