import { Router } from "express";
import { getUser, login } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { heroeValidator } from "../validators/heroe.validator.js";
import { usuarioValidator } from "../validators/usuario.validator.js";
const router = Router();

//router.get("/", login ) 
router.get("/",validate(usuarioValidator),getUser)

export default router;