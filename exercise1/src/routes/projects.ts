import express from "express";
const router = express();
router.get("/", (req, res) => {
  res.json({ message: "Hello World!!" });
});
export default router;
