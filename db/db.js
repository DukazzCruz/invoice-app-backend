const mongoose = require("mongoose");
const config = require("../config");

const mongodb_url = config.MONGODB_URI;
mongoose.connect(mongodb_url).then(r => console.log("MongoDB Connected", mongodb_url));


module.exports = {mongoose}
