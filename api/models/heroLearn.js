import { Schema, model } from "mongoose";

const heroLearn = Schema({
  heroId: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true },
  section: { type: String, required: true },
  timeline: { type: String, required: true },
});

export default model("HeroLearn", heroLearn);
