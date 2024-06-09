import multer from "multer"

// wanna store the file on the server until its gets uploaded to cdn
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./Public/Temp")
    },
    filename: function (req, file, callback) {
        const suffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
        callback(null, this.file.feildname + "-" + suffix)
    },
})

export const upload = multer({ storage: storage })
