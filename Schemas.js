const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, unique: true },
    orgnization_name: { type: String },
  },
  {
    timestamps: true,
  }
);

const projectSchema = new mongoose.Schema(
  {
    name: { type: String },
    client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
    orgnization_name: { type: String },
    projectType: { type: String },
    Features: [{ type: mongoose.Schema.Types.ObjectId, ref: "Feature" }],
  },
  {
    timestamps: true,
  }
);

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const FeatureSchema = new mongoose.Schema(
  {
    name: { type: String },
    weeks: { type: Number },
    description: { type: String },
    difficulty: { type: Number },
    algorithm: { type: String },
    effective_cost: { type: Number },
    effective_weeks: { type: Number },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    category_name: { type: String },
    complexity: { type: String },
    feature_weeks: { type: Number },
    price: { type: Number },
    feature_price: { type: Number },
    icon: { type: String },
    feature_screenshots: {
      ios: { type: String },
      web: { type: String },
      android: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);
const Feature = mongoose.model("Feature", FeatureSchema);
const Client = mongoose.model("Client", clientSchema);
const Project = mongoose.model("Project", projectSchema);

module.exports = {
  Category,
  Feature,
  Client,
  Project,
};
