import { Criminals, CriminalsType } from "./criminals.model";
import { Router } from "express";
import {
  readAllcriminals,
  readCriminals,
  writeCriminals,
} from "./criminals.service";

const router = Router();

router.get("/", readAllcriminals);
router.get("/:name", readCriminals);
router.post("/criminal", writeCriminals);
export default router;
