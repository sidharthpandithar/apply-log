var express = require("express");
var router = express.Router();
const Interview = require("../models/Interview");
const verifyToken = require("../middlewares/authMiddleware");

router.get("/all", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const interviews = await Interview.find({ userId }).sort({ date: 1 });

    return res.status(200).json(interviews);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
});

router.post("/add", verifyToken, async (req, res) => {
  try {
    const { company, position, date } = req.body;
    const userId = req.user.id;

    if (!company || !position || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const createdInterview = await Interview.create({
      userId,
      company,
      position,
      date,
    });

    return res.status(201).json({
      message: "Interview added succesfully.",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
});

router.patch("/update/:id", verifyToken, async (req, res) => {
  try {
    const interviewId = req.params.id;
    const { status } = req.body;
    const userId = req.user.id;

    if (!status) {
      return res.status(400).json({ message: "Status field is required" });
    }

    const interview = await Interview.findOne({ _id: interviewId, userId });

    if (!interview) {
      return res
        .status(404)
        .json({ message: "Interview not found or unauthorized" });
    }

    interview.status = status;
    await interview.save();

    return res.status(200).json({
      message: "Interview status updated successfully",
      updatedInterview: interview,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
});

router.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    const interviewId = req.params.id;
    const userId = req.user.id;

    // Ensure the interview belongs to the user
    const interview = await Interview.findOneAndDelete({
      _id: interviewId,
      userId,
    });

    if (!interview) {
      return res
        .status(404)
        .json({ message: "Interview not found or unauthorized" });
    }

    return res.status(200).json({ message: "Interview deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
