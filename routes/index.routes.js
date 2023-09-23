import { Router } from "express";
import Heroe from "./heroe.routes.js"
import Auth from "./auth.routes.js"
import { verifyToken } from "../middlewares/token.middleware.js";

const router = Router();

/**
 * TODO: preguntar al profe por qué me toca poner acá en la ruta el verifyToken para que sirva
 *  la validación del token si ya existe en index.middleware.js
 */
router.use('/heroes' , verifyToken, Heroe); 
router.use('/auth' , Auth);


export default router;