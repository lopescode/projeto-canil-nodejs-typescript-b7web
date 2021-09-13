import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.render("pages/page");
};

export const dogs = (req: Request, res: Response) => {
  res.send("dogs")
  //res.render("pages/home");
};

export const cats = (req: Request, res: Response) => {
  res.send("cats")
  //res.render("pages/home");
};

export const fishes = (req: Request, res: Response) => {
  res.send("fishes")
  //res.render("pages/home");
};
