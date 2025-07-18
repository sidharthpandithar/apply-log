const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
const Resume = require("../models/Resume");
const verifyToken = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

router.post(
  "/upload",
  verifyToken,
  upload.single("resume"),
  async (req, res) => {
    try {
      const userId = req.user.id;
      const { title } = req.body;

      if (!req.file) {
        return res.status(400).json({ message: "Resume file is required" });
      }

      if (!title) {
        return res.status(400).json({ message: "Title is required" });
      }

      const fileUrl = `/uploads/resumes/${req.file.filename}`;

      const newResume = await Resume.create({
        userId,
        title,
        filename: req.file.filename,
        fileUrl,
      });

      return res.status(201).json({
        message: "Resume uploaded successfully",
        resume: newResume,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Server error",
        error: err.message,
      });
    }
  }
);

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const resumeId = req.params.id;

    console.log(
      "Received DELETE request for ID:",
      resumeId,
      "by user:",
      userId
    );

    const resume = await Resume.findOne({ _id: resumeId, userId });

    if (!resume) {
      return res
        .status(404)
        .json({ message: "Resume not found or unauthorized" });
    }

    const filePath = path.join(
      __dirname,
      "..",
      "uploads",
      "resumes",
      resume.filename
    );
    console.log("Resolved file path:", filePath);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("File deleted");
    }

    await Resume.deleteOne({ _id: resumeId });
    console.log("Resume record deleted from DB");

    return res.status(200).json({ message: "Resume deleted successfully" });
  } catch (err) {
    console.error("Server error:", err); // ← This will print full error
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
});

router.get("/all", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const resumes = await Resume.find({ userId }).sort({ createdAt: -1 });

    return res.status(200).json({ resumes });
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
});

module.exports = router;
