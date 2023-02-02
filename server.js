const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { Category, Feature, Client, Project } = require("./Schemas");

const app = express();
app.use(cors());

const database = async () => {
  try {
    // Replace database value in the .env file with your database config url
    const DATABASE = "mongodb://localhost:27017/FeatureDatabase";

    await mongoose.connect(DATABASE, {
      //   useFindAndModify: false,
      //   useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database.");
  } catch (error) {
    console.log("Could not connect to the database.", error);
  }
};

database();

app.get(`/category`, async (req, res) => {
  try {
    console.log("Request Received GET: //category");
    const data = await Category.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.get(`/clients`, async (req, res) => {
  try {
    console.log("Request Received GET: //category");
    const data = await Client.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.post(`/clients`, async (req, res) => {
  try {
    const { firstName, lastName, email, organization } = req.body;
    console.log("Request Received GET: //category");
    const data = await Client.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.get(`/projects`, async (req, res) => {
  try {
    console.log("Request Received GET: //category");
    const data = await Project.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.post(`/projects`, async (req, res) => {
  try {
    const { name, client, description, features } = req.body;
    console.log("Request Received GET: //category");
    const data = await Project.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.get(`/features`, async (req, res) => {
  try {
    console.log("Request Received GET: //features", req.query);
    const { page = 1, limit = 10, cat } = req.query;
    let results;
    if (req.query.cat) {
      results = await Feature.find({ category: cat })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });
    } else {
      results = await Feature.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });
    }
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
