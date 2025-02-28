//같은 스코프에 중복된 이름으로 설정하면 안됨
function func() {
}
let user = {
    id: 1,
    name: "스위밍",
    nickname: "summer",
    birth: "1993.11.01",
    bio: "안냐세요",
    location: "서울시",
};
let user2 = {
    id: 2,
    name: "홍길동",
    nickname: "summer",
    birth: "1993.11.01",
    bio: "안냐세요",
    location: "서울시",
};
let countryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
export {};
// let countryNumberCodes: CountryNumberCodes = {
//   Korea: "ko",
// };
