const ImageRepository = require("../repositories/ImageRepository");
const fs = require("fs");
const path = require("path");

const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

module.exports = {
  get: function(req, res) {
    ImageRepository.all()
      .then(data => {
        res.send({
          success: true,
          data
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  },

  show: function(req, res) {
    var id = req.params.id;
    ImageRepository.find(id)
      .then(resp => {
        result = resp[0];
        res.send({
          result
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  },

  create: function(req, res) {
    var data = req.body;
    ImageRepository.create(data)
      .then(result => {
        res.send({
          success: true,
          result: result
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  },

  upload: function(req, res) {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, "../uploads/image.png");

    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        res
          .status(200)
          .contentType("text/plain")
          .end("File uploaded!");
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }
  },

  update: function(req, res) {
    var id = req.params.id;
    var data = req.body;
    ImageRepository.update(id, data)
      .then(result => {
        res.send({
          success: true,
          id: result._id
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  },

  delete: function(req, res) {
    var id = req.params.id;
    ImageRepository.delete(id)
      .then(result => {
        res.send({
          success: true
        });
      })
      .catch(message => {
        res.send({
          success: false,
          message
        });
      });
  }
};
