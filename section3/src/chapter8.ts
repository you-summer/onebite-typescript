/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입 (두 타입 간에 공통저긍로 포함되는 값이 하나도 없는 타입)
 */

// ex) number와 string 두 타입은 어떠한 교집합도 존재하지 않음
//     수학에서는 이렇게 교집합이 하나도 없는, 공통 원소가 하나도 없는 이런 두 개의 집합을 서로소 관계에 있다 라고 함
// string과 number 유니온 타입이 있다고 하면 이 두타입이 서로소 집합이기 때문에 이런 유니온 타입을 '서로소 유니온 타입'이라고 부름

// 웹서비스의 간단한 회원 관리 기능
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number; //지금까지 몇명을 강퇴했는지
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number; //쇼핑몰처럼 마일리지 같은거
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number; // 몇번 방문했는지
};

type User = Admin | Member | Guest;
// 위의 세가지 타입을 유니온한 User라는 타입. Admin이거나 Member거나 Guest거나~

// 로그인 기능
// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
      break;
    case "GUEST":
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
  } // 이렇게 직관적으로 쓸 수 있음

  //   if (user.tag === "ADMIN") {
  //     // admin 타입
  //     console.log(
  //       `${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`
  //     );
  //   } else if (user.tag === "MEMBER") {
  //     // Member 타입
  //     console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  //   } else if (user.tag === "GUEST") {
  //     // Guest 타입
  //     console.log(
  //       `${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`
  //     );
  //   }
}

// 객체타입에 tag:"ADMIN" 이런식으로 스트링리터럴로 정의된 프로퍼티들을 다르게 정의 해주면 서로소 Union타입으로 만들 수 있기 때문에
// switch Case 문법만으로 직관적으로 타입을 좁혀서 처리 할 수 있도록 만들 수 있음

/**
 * 복습 겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체를 만들어야된다! (비동기작업 : API를 호출, 서버에서 데이터를 받아온다든지 )

// 3가지의 객체를 다 표현할 수 있는 하나의 타입을 만들어 볼거임
// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : error 메세지 출력
// 성공 -> 성공 : 데이터를 출력
function processResult(task: AsyncTask) {
  // 비동기 작업의 처리 결과를 함수의 매개변수로 받아서 상태에 따라 잘 처리하는 함수
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중....");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터~~~",
  },
};
