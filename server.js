const express = require('express');
const { readdirSync } = require('fs');
const app = express()
const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()

const DB_CONNECTION = "mongodb://localhost:27017/testdb";
const db_connect = async () => {
    try {
        const conn = await mongoose.connect(DB_CONNECTION);
        console.log(`Connected to DB at ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to DB: ${error.message}`);
    }
};

db_connect();

const router = express.Router();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'frontend/build')))

app.use('/api', router);

const getDirectories = (source) =>
    readdirSync(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

const modules = getDirectories("./src/modules");

modules.forEach((moduleName) => {
    const appModule = require(`./src/modules/${moduleName}`);
    if (typeof appModule.configure === "function") {
        router.use(`/${moduleName}`, appModule.configure({ app }));
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
    });
});

const PORT = process.env.PORT || 3005

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

// luBtRf1joS7ojeyR