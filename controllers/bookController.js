const express = require("express");
const Book = require("./../models/books.model");
exports.getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    console.log(allbooks);
    
  } catch (error) {
    console.log("error while get ALL Books request");
  }
};
exports.getOneBook = async (req, res) => {
  try {
    // const val = req.params.id;
    // var o_id = new mongo.ObjectID(req.params.id);

    const oneBook = await Book.findOne({
      _id:req.params.id
    });
    res.send(oneBook);
    console.log(oneBook);
  } catch (error) {
    res.send("error");
    console.log(error);
  }
}
exports.createBook = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    // const response = await Book.create(data);
    const response = await Book.create(data);
    res.status(200).send({
      msg: "The data was added to our collection",
    });
    console.log(response);
  } catch (error) {
    res.status(404).send(error);
    console.log(error);
  }
}
