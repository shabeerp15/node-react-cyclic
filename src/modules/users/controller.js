const service = require("./service")

const getUsers = async (req, res) => {
    try {

        // const users = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await service.getUsers()
        res.json({ users: users })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getUserById = async (req, res) => {
    try {
        // const user = await fetch(`https://jsonplaceholder.typicode.com/users/${req.params.id}`)
        const user = await service.getUserById(req.params.id)
        res.json({ user: user })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getUsers, getUserById }