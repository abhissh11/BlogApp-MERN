import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/user", route);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server started on PORT ${PORT}`);
    })
  )
  .then(() => console.log("App connected to mongoDB"))
  .catch((err) => console.log(err));
