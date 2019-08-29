const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator')

const PetSchema = new mongoose.Schema({
    name: {type: String, unique: [true, "Pet name already in use!"], required: [true, "Pet name is required."], minlength: [3, "Pet name must be at least 3 characters long."]},
    type: {type: String, required: [true, "Pet type is required."], minlength: [3, "Type must be at least 3 characters long."]},
    description: {type: String, required: [true, "Description is required."], minlength: [3, "Description must be at least 3 characters long."]},
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String},
    likes: {type: Number}
}, {timestamps: true});
 
PetSchema.plugin(uniqueValidator);
mongoose.model("Pet", PetSchema);