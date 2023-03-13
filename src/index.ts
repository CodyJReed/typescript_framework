// import { User } from "./models/User";
// import { UserEdit } from "./views/UserEdit";

// const user = User.buildUser({ name: "Bindhi", age: 42 });

// const root = document.getElementById("root");

// if (root) {
//   const userEdit = new UserEdit(root, user);

//   userEdit.render();

//   console.log(userEdit)
// } else {
//     throw new Error('Root element not found')
// }

import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { UserProps, User } from "./models/User";

const collection = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

collection.on("change", () => {
  const root = document.getElementById("root");

  if (root) new UserList(root, collection).render();
});

collection.fetch();
