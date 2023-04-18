import { Router } from "express";
import { getPeople, createPerson, updatePerson, deletePerson } from "../controllers/controller.js";

const router = Router();

router.get("/api/users", getPeople);
router.post("/api/user", createPerson);
router.put("/api/user:id", updatePerson);
router.delete("/api/user:id", deletePerson);

export default router;
