const express = require("express");
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const dotenv = require("dotenv");
dotenv.config();
var cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
app.get("/api", (req, res) => {
  res.send("Hello World!");
});
const ImmigrantsSchema = new mongoose.Schema({
  imageUrl: String,
  contry: String,
  title: String,
  paragraph: String,
});
const Imigrant = mongoose.model("Imigrant", ImmigrantsSchema);
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CONNECTION = process.env.DB_CONNECTION;
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD)).then(() => {
  console.log("Conntected ");
});
app.get("/api/imigrants", async (req, res) => {
  const imigrants = await Imigrant.find();
  res.status(200).send(imigrants);
});
app.get("/api/imigrants/:id", async (req, res) => {
  const id = req.params.id;
  const imigrant = await Imigrant.findById(id);
  res.status(200).send(imigrant);
});
app.delete("/api/imigrants/:id", async (req, res) => {
  const id = req.params.id;
  const imigrant = await Imigrant.findByIdAndDelete(id);
  res.status(203).send(imigrant);
});
app.post("/api/imigrants", async (req, res) => {
  //post
  const { imageUrl, title, contry, paragraph } = req.body;
  const newImigrants = new Imigrant({
    imageUrl: imageUrl,
    title: title,
    contry: contry,
    paragraph: paragraph,
  });
  await newImigrants.save();
  res.status(201).send("created");
});
app.put("/api/imigrants/:id", async (req, res) => {
  //put
  const id = req.params.id;
  const { imageUrl, title, contry, paragraph } = req.body;
  const existedImigrant = await Imigrant.findByIdAndUpdate(id, {
    imageUrl: imageUrl,
    title: title,
    contry: contry,
    paragraph: paragraph,
  });
  res.status(200).send(existedImigrant);
});

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
