const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        heading: { type: String, required: true },
        image: { type: String },
        des: { type: String, required: true },
    },
    { collection: "blogs" }
);

const model = mongoose.model("blogSchema", blogSchema);

module.exports = model;
