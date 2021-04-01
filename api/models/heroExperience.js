import { Schema, model } from "mongoose";

const heroExperience = Schema({
  heroId: { type: Number, required: true },
  company: { type: String, required: true },
  logo: { type: String, required: true },
  location: { type: String, required: true },
  website: { type: String, required: true },
  grade: { type: String, required: true },
  type_work: { type: String, required: true },
  category: { type: String, required: true },
  timeline: { type: String, required: true },
  content: { type: String, required: true },
});

export default model("HeroExperience", heroExperience);
