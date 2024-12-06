import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.patch("/:id/typing", async (req, res) => {
  const { id } = req.params;
  const { isTyping } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, { isTyping }, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User already typing", user });
  } catch (error) {
    console.error("Error updating typing status: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
