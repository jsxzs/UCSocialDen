const User = require("../models/userModel");

// get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); 
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};



const getUserByEmail = async (req, res) => {
  try {
    const user = await User.findById(req.params.email, "-password"); //find user by email, from :email from frontend input
    if (!user) {
      return {success: false, message: 'User not found'};
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};


const updateUserIntro = async (req, res) => {
  try {
    const { email } = req.params;
    const {intro } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      email, //search for use by email
      { intro }, // update intro value
      { new: true, select: "-password" } //return updated user except password
    );
    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "Update Intro User not found" });
    }
    res.json({success: true, user: updatedUser});
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update user's intro" });
  }
};

module.exports = {getUsers, getUserByEmail, updateUserIntro};