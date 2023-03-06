import { User } from "./models/User";

const user = User.buildUser({name: 'phil cote', age: 0});

user.on('save', () => {
    console.log(user)
})

user.on('error', () => {
    console.log('error')
})

user.save()
