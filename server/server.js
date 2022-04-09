const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var cors = require("cors");
// require("dotenv").config();
// console.log(process.env.);
mongoose.connect("mongodb://localhost:27017/blog-app", () => {
    console.log("db connected");
});

const User = require("./model/user");
const Blog = require("./model/blog");

const JWT_SECERT = "dnhaushfsasndioadunasjcjahduwabfjhuy28ueiWU";
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("blog app");
});

app.post("/register", async (req, res) => {
    const { email, password } = req.body;

    const hashpass = await bcrypt.hash(password, 10);

    try {
        const response = await User.create({
            email,
            password: hashpass,
        });
        console.log("user created : ", response);
    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            return res.json({ msg: "email is already registered" });
        }
        return res.status(500).json({ msg: "server error" });
    }
    return res.status(200).json({ msg: "user added" });
});

app.get("/blog/:id", async (req, res) => {
    const id = req.params.id;
    try {
        console.log(id);
        const response = await Blog.findOne({ _id: id });

        if (!response) {
            return res.status(404).json({ msg: "invalid id" });
        } else {
            return res.status(200).json({ msg: "success", data: response });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "server error" });
    }
});

app.get("/allblog", async (req, res) => {
    console.log("here");
    try {
        const allblogs = await Blog.find();

        console.log(allblogs);
        res.status(200).json({ msg: "success", data: allblogs });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "server error" });
    }
});

app.post("/blog", async (req, res) => {
    const { heading, image, des } = req.body;

    try {
        const response = await Blog.create({ heading, image, des });

        console.log("Blog created", response);
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({ msg: "blog created" });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: "email is not registered" });
        }
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                { id: user._id, username: user.email },
                JWT_SECERT
            );

            return res.status(200).json({ msg: "user login", data: token });
        } else {
            return res.status(200).json({ msg: "invalid password" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "server error" });
    }
});

app.listen(port, () => {
    console.log(`App started on port ${port}`);
});
