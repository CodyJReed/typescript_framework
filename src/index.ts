import { User } from "./models/User";

const user = new User({});

user.attributes.set({ name: "Scarlett", age: 48 });
user.sync.save(user.attributes);

user.events.on("click", () => console.log("it's working!!!"))
user.events.trigger("click")
