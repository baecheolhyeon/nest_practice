import { Criminals, CriminalsType } from "./criminals.model";
import { Request, Response } from "express";

const member: CriminalsType[] = [];

export const readAllcriminals = (req: Request, res: Response) => {
  try {
    const criminals = Criminals;
    res.status(200).send({
      success: true,
      data: { criminals },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "failed",
    });
  }
};

export const readCriminals = (req: Request, res: Response) => {
  try {
    const params = req.params;
    Criminals.forEach((criminals) => {
      if (criminals.name === params.name) {
        member.push(criminals);
      }
    });
    res.status(200).send({
      success: true,
      data: {
        member,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "failed",
    });
  }
};

export const writeCriminals = (req: Request, res: Response) => {
  try {
    const body = req.body;
    Criminals.push(body);
    res.status(200).send({
      success: true,
      data: { body },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: "failed",
    });
  }
};
