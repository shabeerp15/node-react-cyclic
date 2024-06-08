const User = require("./model").User;
const bcrypt = require("bcrypt");

const signin = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return { status: false, message: "User does not exist" };
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            return { status: false, message: "Invalid user credentials" };
        }
        const token = await user.generateAuthToken(); //Generates Token for Authentication
        return { status: true, user: user.toJSON(), token };
    } catch (error) {
        return { status: false, message: "Something went wrong" };
    }
};

const createUser = async (email, password) => {
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return { status: false, message: "User already exists" };
        }
        const user = new User({
            email,
            password,
        });
        const token = await user.generateAuthToken();
        console.log({ token })
        const result = await user.save();
        user.password = undefined;
        return { status: true, user: result, token };
    } catch (error) {
        return { status: false, message: "Something went wrong" };
    }
};


module.exports = { signin, createUser }