const mongoose = require("mongoose");
const interviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  company: String,
  position: String,
  date: Date,
  status: {
    type: String,
    enum: [
      "Applied",
      "Phone Screening",
      "Technical",
      "Final",
      "Offered",
      "Rejected",
      "Accepted",
    ],
    default: "Applied",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Interview", interviewSchema);
