'use strict';

module.exports = (req, res) => {
  res.status(404).send({
    error:400,
    route:req.path,
    message: "Not Found"
  })
}
