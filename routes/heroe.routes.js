import { Router } from "express";
import { getHeroes, getHeroeById, saveHeroe } from "../controllers/heroe.controller.js";
import { validate } from  "../middlewares/validator.middleware.js";
import { heroeValidator, sendHeroeValidator } from "../validators/heroe.validator.js";

const router = Router();

router.get("/" , getHeroes );
router.get("/:id", validate(heroeValidator) , getHeroeById);
router.post("/",validate(sendHeroeValidator), saveHeroe);

export default router;