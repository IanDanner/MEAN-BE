var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PetSchema = new mongoose.Schema({
    name : {
        type: String,
        unique: [true, "Name Already Used Choose another"],
        required: [true, "Pet must have a Name"], 
        minlength: [3,"Name must be more than 3 characters"],
        validate: {
			validator: function(value){
				return /^[A-z\s]+$/.test(value)
			},
			message: "Name can only contain letters"
		}
    },
    type : {
        type: String,
        required: [true, "Pet must have a Type"], 
        minlength: [3,"Type must be more than 3 characters"]
    },
    description : {
        type: String,
        required: [true, "Pet must have a Description"], 
        minlength: [3,"Description must be more than 3 characters"]
    },
    skill1 : {
        type: String,
    },
    skill2 : {
        type: String,
    },
    skill3 : {
        type: String,
    },
    likes : {
        type: Number,
    },
}, {timestamps: true});


var Pet = mongoose.model('Pet', PetSchema);
