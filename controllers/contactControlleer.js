const Contact = require("../models/Contact");

// CONTROLLER TO SUBMIT CONTACT
const submitContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // 1. SAVE ALL THE DATA THAT WILL BE IN THESE KEYS IN THE DATABASE
  const contactInfo = await Contact.create({ name, email, subject, message });



  console.log(req.body);
  // 2. response message if successfull
  res.status(201).json({ message: "Submitted successfully" });
};

// CONTROLLER TO GET USERS THAT ARE ALREADY LOGGED IN OR

module.exports = submitContact;

// model - controller - route
