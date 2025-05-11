import express from "express";
const router = express.Router();
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../model/user.js";

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    let candidate = await User.findOne({ email });
    if (candidate) return res.status(400).json({ msg: "User Already exist!" });

    const hashedPass = await bcrypt.hash(password, 10);
    candidate = new User({ email, password: hashedPass });
    await candidate.save(); // ✅ THIS LINE is the fix

    res.status(201).json({ msg: "User Created Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error!" });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const candidate = await User.findOne({ email });
    if (!candidate) {
      return res.status(400).json({ msg: "User not exist" });
    }

    const isMatch = bcrypt.compare(password, candidate.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: candidate._id }, process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error!" });
  }
});
export default router;