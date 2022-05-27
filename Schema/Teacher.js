const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    profession : {
        type : String,
        required : true
    }
})

const Teacher = new mongoose.model("Teacher",teacherSchema);

module.exports = Teacher