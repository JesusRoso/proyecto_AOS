import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { heroeValidator } from "../validators/heroe.validator.js";
const router = Router();

router.get("/", login ) 

export default router;