var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var studentSchema = new Schema({
    Name: String,
    Surname: String,
    SchoolNumber: Number,
});

module.exports = mongoose.model("student", studentSchema);