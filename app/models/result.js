import { Schema, models, model } from "mongoose";

const dataSchema = new Schema({
  x0: {
    type: String,
    required: [true, "Ingrese 0x"],
    trim: true,
  },
  a: {
    type: String,
    required: [true, "Ingrese a"],
    trim: true,
  },
  c: {
    type: String,
    required: [true, "Ingrese c"],
    trim: true,
  },
  m: {
    type: String,
    required: [true, "Ingrese m"],
    trim: true,
  },
}, {
  versionKey: false // You should be aware of the outcome after set to false
});
export default models.Dato || model('Dato', dataSchema)