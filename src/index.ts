import { User } from "./models/User";

const user = new User({name: "cody", age: 38})

user.on("submit", () => {})
user.on("click", () => {
    console.log("change #2")
})

user.trigger("uwhwufih")


console.log(user)