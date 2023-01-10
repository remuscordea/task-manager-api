const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
  },
  (error) => {
    if (error) console.log(error);
    else console.log("Connected to MongoDB");
  }
);
