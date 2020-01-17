const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roleschema = mongoose.model("role", new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        trim: true,
    }
}));
module.exports = roleschema;