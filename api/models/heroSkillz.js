import { Schema, model } from "mongoose";

const heroSkill = Schema({
  heroId: { type: String, required: true },
  name: { type: String, required: true },
  icon: { type: String, required: false },
  color: { type: String, required: false },
  category: { type: Number, required: false },
  url: { type: String, required: true },
  score: { type: Number, required: true },
});

export default model("HeroSkill", heroSkill);
