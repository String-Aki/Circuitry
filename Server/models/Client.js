import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Client', clientSchema);
