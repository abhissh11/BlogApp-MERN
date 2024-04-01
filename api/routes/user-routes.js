import express from "express";
import { getAllUser, login, signup } from "../controllers/user-controller.js";

const route = express.Router();

route.get("/", getAllUser);
route.post("/signup", signup);
route.post("/login", login);

export default route;
