import { Schema, model } from "mongoose";

const socialSchema = Schema({
  heroId: { type: String, required: true },
  name: { type: String, required: true },
  icon: { type: String, required: true },
  url: { type: String, required: false },
  professionnal: { type: Boolean, required: true },
});

export default model("SocialHero", socialSchema);
