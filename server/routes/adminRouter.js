import { adminController } from "../controllers/adminController.js";
import { Router } from "express";

const adminRouter = Router();

adminRouter.post('/login',adminController);

export default adminRouter