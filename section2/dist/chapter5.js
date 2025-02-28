// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum 타입은 자바스크립트에는 없고 타입스크립트에서만 특별히 제공되는 새로운 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 10] = "USER";
    Role[Role["GUEST"] = 11] = "GUEST";
})(Role || (Role = {}));
// 아무런 숫자도 부여하지 않을 시 0부터 시작함
// admin에 10을 부여하면 자동으로 밑의 값들은 +1을 함
// user에 10을 부여하면 admin은 0. user=10, guest=11 이렇게 됨
// ㄴ 숫자를 부여하는건 숫자형 enum이라고 함
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "스위밍",
    role: Role.ADMIN, //0<-관리자
    language: Language.korean,
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // 1<-일반유저
};
const user3 = {
    name: "아무개",
    role: Role.GUEST, // 2<-게스트
};
console.log(user1, user2, user3);
export {};
// 이렇게 부여하는게 좋은게 'ko'인지 'KO'인지 'kr-KO' 인지 헷갈릴때가 있음
// enum을 활용하면 헷갈리지 않고 바로바로 사용가능
