////////////////////////// TASK #1 //////////////////////////
function revStrFunc(str) {
  let strRev = "";
  for (i = str.length - 1; i >= 0; i--) {
    strRev += str[i];
  }
  console.log(strRev);
}
revStrFunc("124");
////////////////////////// TASK #2 //////////////////////////
const userList = [
  {
    userName: "Dan",
    age: 16,
    status: "active",
  },
  {
    userName: "Mike",
    age: 22,
    status: "active",
  },
  {
    userName: "Bob",
    age: 40,
    status: "unactive",
  },
];

const findUser = userList.filter(
  (el) => el.age >= 18 && el.status === "active"
);

for (obj of findUser) {
  const { userName } = obj;
  console.log(`${userName} is overgrown and active now`);
}
