const mongoose = require("mongoose");
const env = require("./../dotenv");

async function initDb() {
  mongoose
    .connect(env.DB_URL)
    .then(() => console.log("Connected! with the db " + env.DB_NAME))
    .catch((err) => {
      console.log("some error occured ", err);
    });
}

module.exports = { initDb };
