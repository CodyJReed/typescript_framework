import { User } from "./models/User";

const user = new User({});

user.set({ name: "Indigo", age: 5 });
user.save();

user.events.on("click", () => console.log("it's working!!!"))
user.events.trigger("click")
