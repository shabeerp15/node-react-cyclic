

const getUsers = async (req, res) => {
    try {
        console.log("users")
        const users = await fetch('https://jsonplaceholder.typicode.com/users')
        res.json({ users: await users.json() })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${req.params.id}`)
        res.json({ user: await user.json() })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getUsers, getUserById }