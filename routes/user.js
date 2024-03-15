import express from "express";
import {getProfile,login, newUser,logout} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new",newUser)

router.post("/login",login)

router.get("/me",isAuthenticated,getProfile)

router.get("/logout",logout)


export default router;



