import { atom } from "recoil";

const user = atom({
    key: "userState",
    default: "",
});

export default user;
