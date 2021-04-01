module.exports = app => {
  const hero = require("../controllers/heroController.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", hero.create);

  // Retrieve all Tutorials
  router.get("/", hero.findAll);

  // Retrieve all published Tutorials
  router.get("/published", hero.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", hero.findOne);

  // Update a Tutorial with id
  router.put("/:id", hero.update);

  // Delete a Tutorial with id
  router.delete("/:id", hero.delete);

  // Create a new Tutorial
  router.delete("/", hero.deleteAll);

  app.use("/api/hero", router);
};
