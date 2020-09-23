const mongoose = require("mongoose");
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.log("database connection failed...");
  console.error(err);
});

mongoose.connection.on("connected", () => {
  console.log("Database connection established...");
});
