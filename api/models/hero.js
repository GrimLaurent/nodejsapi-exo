import { Schema, model } from "mongoose";

const heroSchema = Schema({
  heroId: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  pseudo: { type: String, required: false },
  avatar: { type: String, required: false },
  car: { type: String, required: false },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

export default model("Hero", heroSchema);
