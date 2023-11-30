import { Router } from "express";

const router = Router();

router.get("/", (req, res) =>
  res.render("index", { title: "Mi primer titulo !!!" })
);
/* router.get("/vinos", (req, res) => res.render("vino")); */
router.get("/licores", (req, res) => res.render("licores"));

export default router;
