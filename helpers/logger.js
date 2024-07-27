const moment = require("moment");
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;

const loggerFormat = printf((info) => {
  const currentDate = moment().format("YYYY-MM-DD HH:mm:ss");
  return `${currentDate} | ${info.level}: ${info.message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(timestamp(), loggerFormat),
  transports: [new transports.Console()],
});

module.exports = { logger };
