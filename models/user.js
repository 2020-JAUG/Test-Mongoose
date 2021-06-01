const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: "String",
        required: true
    },
    nick: {
        type: "String",
        required: true,
        unique: true
    },
    email: {
        type: "String",
        required: true,
        lowercase: true
    },
    password: {
        type: "String",
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    country: {
        type: "String"
    },
    city: {
        type: "String"
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    }
});


const toJSONConfig = {
    transform: (doc,ret,opt) => {//transform es un metodo de mongoose
           delete ret['password']//ret es un metodo encripta la password para enviarla con mas segura
           return ret
    }
}


userSchema.set('toJSON', toJSONConfig);


const User = mongoose.model("User", userSchema);
module.exports = User;