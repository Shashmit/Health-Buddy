require("dotenv").config();

const express = require("express");
const workoutRouter = require("./routes/workouts");
const mongoose = require("mongoose");
const cors = require("cors");
//express app
const app = express();
app.use(express.json());
app.use(cors());
//middleware

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//All the routes running to gain the inforamtion
app.use("/api/workouts", workoutRouter);

//Connect to dp
// // const running = async () => {
// //   const connet = await mongoose.connect(process.env.DB_MONGOOSE);
// //   if (connet.ok) {
// //     app.listen(process.env.PORT_NUMBER, () => {
// //       console.log("Listening at 4000");
// //     });
// //   }
// };
// running();
mongoose
  .connect(process.env.DB_MONGOOSE)
  .then(() => {
    app.listen(process.env.PORT_NUMBER, () => {
      console.log("Listening at 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
//listening
