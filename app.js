const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const dbConfig = require("./api/config/db.config.js");
mongoose
  .connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();
app.use((req, res, next) => {
  if (($request_method = "OPTIONS")) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

    // Custom headers and headers various browsers *should* be OK with but aren't

    res.setHeader(
      "Access-Control-Allow-Headers",
      "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range"
    );

    // Tell client that this pre-flight info is valid for 20 days

    res.setHeader("Access-Control-Max-Age", 1728000);
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Content-Length", 0);
    return 204;
  }
  if (($request_method = "POST")) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range"
    );
    res.setHeader(
      "Access-Control-Expose-Headers",
      "Content-Length,Content-Range"
    );
  }
  if (($request_method = "GET")) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range"
    );
    res.setHeader(
      "Access-Control-Expose-Headers",
      "Content-Length,Content-Range"
    );
  }
  //  res.setHeader("Access-Control-Allow-Origin", "*");
  //  res.setHeader(
  //    "Access-Control-Allow-Headers",
  //    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  //  );
  //  res.setHeader(
  //    "Access-Control-Allow-Methods",
  //    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  //  );
  next();
});
app.use(express.json());

const Thing = require("./api/models/thing");
const Hero = require("./api/models/hero");

app.post("/api/stuff", (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
    ...req.body,
  });
  console.log(req.body);
  thing
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch(error => res.status(400).json({ error }));
});

app.use("/api/stuff", (req, res, next) => {
  const stuff = [
    {
      _id: "oeihfzeoi",
      title: "Mon premier objet",
      description: "Les infos de mon premier objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      price: 4900,
      userId: "qsomihvqios",
    },
    {
      _id: "oeihfzeomoihi",
      title: "Mon deuxième objet",
      description: "Les infos de mon deuxième objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      price: 2900,
      userId: "qsomihvqios",
    },
  ];
  res.status(200).json(stuff);
});

require("./api/routes/hero.routes")(app);

module.exports = app;
