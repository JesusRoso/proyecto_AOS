import { verifyToken } from "./token.middleware.js"

import { Router } from "express"; 

const router = Router();

router.use('/heroes', verifyToken);

export default router;