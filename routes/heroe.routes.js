import { Router } from "express";
import { getHeroes, getHeroeById, saveHeroe, updateHero, deleteHeroById } from "../controllers/heroe.controller.js";
import { validate } from  "../middlewares/validator.middleware.js";
import { heroeValidator, sendAndUpdateHeroeValidator } from "../validators/heroe.validator.js";

const router = Router();

router.get("/" , getHeroes );
router.get("/:id", validate(heroeValidator) , getHeroeById);
router.post("/", saveHeroe);
router.put("/actualizar",validate(sendAndUpdateHeroeValidator),updateHero);
router.delete("/:id",validate(heroeValidator) , deleteHeroById);

export default router;