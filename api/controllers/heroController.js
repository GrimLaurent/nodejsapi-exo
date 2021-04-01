const db = require("../models");
const Hero = db.hero;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const hero = new Hero({
    heroId: req.body.heroId,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    pseudo: req.body.pseudo,
    car: req.body.car,
    email: req.body.email,
    phone: req.body.phone,
    //published: req.body.published ? req.body.published : false,
  });

  // Save Tutorial in the database
  hero
    .save(hero)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Hero.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Hero with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: "Error retrieving Hero with id=" + id });
    });
};
