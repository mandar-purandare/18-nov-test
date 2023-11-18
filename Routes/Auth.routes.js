import { Router } from "express";
import { Register,Login } from "../Controllers/Auth.controllers.js";

const authRoutes = Router();

authRoutes.post('/login',Login);
authRoutes.post('/register',Register);

export default authRoutes;