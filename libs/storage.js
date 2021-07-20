const multer = require('multer');


const storage = multer.diskStorage({

    destination: function (req, file, cb) {
      cb(null, './storage/img')//AQUI INDICAMOS LA RUTA PARA GUARDAR LOS ARCHIVOS
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname} - ${Date.now()}`)
    }
  });

const upload = multer({ storage })

module.exports = upload;