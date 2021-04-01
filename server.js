//const express = require("express");
//const bodyParser = require("body-parser");
//const cors = require("cors");

//const app = express();

//var corsOptions = {
//  origin: "http://localhost:8080",
//};

//require("./api/routes/turorial.routes")(app);
//// set port, listen for requests
//const PORT = process.env.PORT || 8081;
//app.listen(PORT, () => {
//  console.log(`Server is running on port ${PORT}.`);
//});

//const db = require("./api/models");
//db.mongoose
//  .connect(db.url, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//  })
//  .then(() => {
//    console.log("Connected to the database!");
//  })
//  .catch(err => {
//    console.log("Cannot connect to the database!", err);
//    process.exit();
//  });

//app.use((req, res, next) => {
//  res.setHeader("Access-Control-Allow-Origin", "*");
//  res.setHeader(
//    "Access-Control-Allow-Headers",
//    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
//  );
//  res.setHeader(
//    "Access-Control-Allow-Methods",
//    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
//  );
//  next();
//});

//app.use(cors(corsOptions));
//// parse requests of content-type - application/json
//app.use(bodyParser.json());

//// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));

//// simple route
//app.get("/", (req, res) => {
//  res.json({ message: "Welcome to bezkoder application." });
//});

//app.use("/api/stuff", (req, res, next) => {
//  const stuff = [
//    {
//      _id: "oeihfzeoi",
//      title: "Mon premier objet",
//      description: "Les infos de mon premier objet",
//      imageUrl:
//        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
//      price: 4900,
//      userId: "qsomihvqios",
//    },
//    {
//      _id: "oeihfzeomoihi",
//      title: "Mon deuxième objet",
//      description: "Les infos de mon deuxième objet",
//      imageUrl:
//        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
//      price: 2900,
//      userId: "qsomihvqios",
//    },
//  ];
//  res.status(200).json(stuff);
//});
const http = require("http");
const app = require("./app");

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || "3001");
app.set("port", port);

const errorHandler = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + bind);
});

server.listen(port);
