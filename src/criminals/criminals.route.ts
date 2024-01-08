import { Criminals, CriminalsType } from "./criminals.model";
import { Router } from "express";
import {
  readAllcriminals,
  readCriminals,
  writeCriminals,
} from "./criminals.service";

const router = Router();

router.get("/", readAllcriminals);
router.get("/:id", readCriminals);
router.post("/criminal", writeCriminals);
export default router;
