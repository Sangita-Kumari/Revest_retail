require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const path = require("path");

const { PORT } = require("./config");
const { response } = require("./helpers/response");
const { sequelizeErrorValidator } = require("./helpers/helper");
const { logger } = require("./helpers/logger");
const router = require("./src/routes/index");
const sequelize = require("./config/dbConnection");

const app = express();

const limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 30,
  handler: (req, res) =>
    response({
      req,
      res,
      message: "Too many requests, please try again later.",
      code: 429,
      data: [],
      isError: true,
    }),
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "20mb" }));

const corsOptions = {
  origin: ["*"],

  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", corsOptions.origin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Expose-Headers", "*");
  next();
});

app.use(cors(corsOptions));

app.use("/api/revest", router); // routes

app.use((req, res, next) => {
  return response({
    req,
    res,
    message: "Route not found: " + req.url,
    code: 4444,
    data: [],
    isError: true,
  });
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  const regex = new RegExp(/Sequelize/g);

  if (err) {
    if (regex.test(err?.name)) {
      const sequelizeError = sequelizeErrorValidator(err);
      return response({
        req,
        res,
        message: sequelizeError?.message,
        code: sequelizeError.code,
        data: [],
        isError: true,
      });
    } else {
      logger.error(`Error in genericError Handler: ${err?.message}`);
      return response({
        req,
        res,
        message: err.message || "An error occurred",
        code: 4444,
        data: [],
        isError: true,
      });
    }
  }

  next();
});

app.listen(PORT || 8080, () => {
  logger.info(`APPLICATION RUNNING ON http://localhost:${PORT || 8080}`);
});
