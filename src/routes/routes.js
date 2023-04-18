import { Router } from "express";
import { getPeople, createPerson, updatePerson, deletePerson } from "../controllers/controller.js";

const router = Router();

router.get("/", getPeople);
router.post("/", createPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

export default router;
