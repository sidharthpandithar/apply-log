var express = require("express");
var router = express.Router();
const Contact = require("../models/Contact");
const verifyToken = require("../middlewares/authMiddleware");

router.get("/all", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const contacts = await Contact.find({ userId }).sort({ name: 1 });

    if (!contacts.length === 0) {
      return res
        .status(404)
        .json({ message: "Contact not found or unauthorized" });
    }

    return res.status(200).json(contacts);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
});

router.post("/add", verifyToken, async (req, res) => {
  try {
    const { name, company, email, phone, whatsapp } = req.body;
    const userId = req.user.id;

    if (!name || !company || !email) {
      return res
        .status(400)
        .json({ message: "Name, Company & Email are compulsory" });
    }

    const existing = await Contact.findOne({ userId, email });
    if (existing) {
      return res
        .status(409)
        .json({ message: "Contact already exists with this email" });
    }

    const createdContact = await Contact.create({
      userId,
      name,
      company,
      email,
      phone,
      whatsapp,
    });

    return res.status(201).json({
      message: "Contact added succesfully.",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
});

router.delete("/delete/:id", verifyToken, async (req, res) => {
  try {
    const contactId = req.params.id;
    const userId = req.user.id;

    // Ensure the interview belongs to the user
    const contact = await Contact.findOneAndDelete({
      _id: contactId,
      userId,
    });

    if (!contact) {
      return res
        .status(404)
        .json({ message: "Contact not found or unauthorized" });
    }

    return res.status(200).json({ message: "Contact deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
});

router.patch("/update/:id", verifyToken, async (req, res) => {
  try {
    const contactId = req.params.id;
    const { name, company, email, phone, whatsapp } = req.body;
    const userId = req.user.id;

    const contact = await Contact.findOne({ _id: contactId, userId });

    if (!contact) {
      return res
        .status(404)
        .json({ message: "Contact not found or unauthorized" });
    }

    if (name !== undefined) contact.name = name;
    if (company !== undefined) contact.company = company;
    if (email !== undefined) contact.email = email;
    if (phone !== undefined) contact.phone = phone;
    if (whatsapp !== undefined) contact.whatsapp = whatsapp;

    await contact.save();

    return res.status(200).json({
      message: "Contact updated successfully",
      updatedContact: contact,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
