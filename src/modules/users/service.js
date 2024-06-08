const User = require("../auth/model").User;


const getUsers = async () => {
    try {
        console.log("first")
        const users = await User.find();
        if (!users) return

        const filteredUsers = users.map((user, i) => {
            user.password = undefined
            return user
        })
        return filteredUsers
    } catch (error) {
        console.log(error)
    }
}

const getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        if (!user) return
        user.password = undefined
        return user
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getUsers, getUserById
}