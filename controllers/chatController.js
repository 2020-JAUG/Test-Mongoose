const User = require("../models/user");
const Room = require("../models/room");
const { findById } = require("../models/user");


class Sala {
    constructor() {

    }

    async findAllRooms() {
        return Room.find();
    }

    async createRoom(room) {

        return Room.create(room);
    }

    async joinRoom(data) {
        const id =  data.id;
        const miembro = data.miembro;
        return Room.findByIdAndUpdate(
            { _id: id },
            { $push: { miembros: miembro} });
    }

    async deleteRoom(id) {
        return Room.findByIdAndRemove(id);
    }

    async leaveRoom(data) {

        const id = data.id;
        const miembro = data.miembro;
        return Room.findByIdAndUpdate(
             { _id: id }//aquipasas la id de la sala
            ,{ $pull: { miembros: miembro } }
        )
    }

    async addMessage(data) {

        const id = data.id;
        const userId = data.userId;

        const usuarioName = await User.findById(userId);

        let mensaje = {
            idUser: data.userId,
            usuario: usuarioName.name,
            text: data.texto,
            fecha: data.fecha,
            reportador: data.reportado,
            entregado: data.entregado,
            leido: data.leido
        };

        return Room.findByIdAndUpdate( { _id: id }, { $push: { mensajes: mensaje } })
    }

    async showChatById(body) {
        return Room.findOne( { miembros: body._id, })
    }
    // , { $eq: { mensajes: body._id } }
}

let chatController = new Sala();
module.exports = chatController;