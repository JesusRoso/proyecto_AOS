import { Router } from "express";
import Heroe from "./heroe.routes.js"
import Auth from "./auth.routes.js"
import { verifyToken } from "../middlewares/token.middleware.js";

const router = Router();

router.use('/heroes' , Heroe); 
router.use('/auth' , Auth);


export default router;