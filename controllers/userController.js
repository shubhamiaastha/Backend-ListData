const express = require('express');
const User = require('../model/user') ;




const CreateData = async (req, res) => {
    const { Name, contact, image, category, joining } = req.body;
  
  
    const str = joining.toString()
  
    const newCategory = new User({
      Name,
      contact,
      image,
      category,
      joining: joining.toString(),
      count: [new Date().getFullYear()] - [joining.slice(-4)]
  
    })
    try {
  
  
  
      await newCategory.save();
      // res.status(201).json({ newCategory });
      res.send(newCategory)
  
  
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "something went wrong," });
  
  
    }

}




const getUser  = async (req, res) => {


    try {
  
      const data = await User.find();
  
  
      // res.status(200).json(cat);
      res.send(data)
  
  
  
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "something went wrong " });
  
    }
  
  
  
  }



  const getUserById = async (req, res) => {
    const userId = req.params.id;
  
    try {
  
      const data = await User.findById(userId);
  
  
      // res.status(200).json(cat);
      res.send(data)
  
  
  
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "something went wrong " });
  
    }
  }


  
const deleteUser = async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findOne({ _id: userId });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      if (user.category === 'Experience') {
        return res.status(403).json({ error: "Can't delete Experience user" });
      }
  
      await User.deleteOne({ _id: userId });
  
  
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  




  
const update =  async (req, res) => {



    const id = req.params.id;
    const { Name, contact, image, category, joining } = req.body;
  
    const newUser = {
      Name,
      contact,
      image,
      category,
      joining
  
    }
  
    try {
  
      await User.findByIdAndUpdate(id, newUser, { new: true });
      res.status(200).json(newUser);
  
    } catch (err) {
  
      console.log(err);
      res.status(500).json({ message: "something went wrong" });
  
  
    }
  
  }
  
module.exports = {
    CreateData,
    getUser,
    getUserById,
    update,
    deleteUser
    
}