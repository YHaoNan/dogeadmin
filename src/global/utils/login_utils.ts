import { User, Role, Gender } from "@/global/global";

const defaultUsers: { [index: string]: User } = {
  "123456#123456": new User("123456", "Yudoge", Gender.MALE, Role.ROOT, ""),
  "superrr#123456": new User(
    "superrr",
    "SUPERMAN",
    Gender.MALE,
    Role.SUPER_ACCOUNT,
    ""
  ),
};

const login = function (account: string, password: string): Promise<User> {
  return new Promise<User>((resolve, reject) => {
    if (defaultUsers.hasOwnProperty(`${account}#${password}`)) {
      resolve(defaultUsers[`${account}#${password}`]);
    } else {
      reject("no this user");
    }
  });
};

const loginByPhone = function (
  phoneNumber: string,
  valiCode: string
): Promise<User> {
  return new Promise<User>((resolve, reject) => {
    reject("no this phone");
  });
};
export { login, loginByPhone };
