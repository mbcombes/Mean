const mongoose = require("mongoose")
const fs = require("fs");

mongoose.connect("mongodb://localhost/Exam2", {useNewUrlParser: true})

const modelsPath = __dirname + "/../models";

fs.readdirSync(modelsPath).forEach(file => {
    if(file.indexOf(".js") >= 0) {
    require(modelsPath + "/" + file);
    }
})