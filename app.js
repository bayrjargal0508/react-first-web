// app.js

const express = require("express");
const { Address } = require("./mongo"); // Import the Address model
const { Login } = require("./mongo"); // Import the Login model
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/e-commerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Login.findOne({ email, password }); // Use the Login model to find a user

    if (user) {
      res.json("exist");
    } else {
      res.json("notexist");
    }

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password, username } = req.body;

  const data = {
    email: email,
    password: password,
    username: username
  };

  try {
    const check = await Login.findOne({ email });

    if (check) {
      res.json("exist");
    } else {
      await Login.create(data); 
      res.json("notexist");
    }

  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json("fail");
  }
});

app.post("/checkout", async (req, res) => {
  const {
    email,
    phone,
    district,
    subDistrict,
    residentialArea,
    apartmentNumber
  } = req.body;

  try {
    
    const address = new Address({
      email,
      phone,
      district,
      subDistrict,
      residentialArea,
      apartmentNumber
    });

    await address.save();

    res.json({ success: true, message: 'Address saved successfully.' });
  } catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({ success: false, message: 'Failed to save address.' });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
