import mongoose from "mongoose";

const serviceItemSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },

    buyPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    sellPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model('ServiceItem', serviceItemSchema);