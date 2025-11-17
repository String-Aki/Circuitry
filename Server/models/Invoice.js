import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    invoiceNumber: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["invoice", "quote"],
      default: "invoice",
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
    },
    items: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, default: 1 },
        buyPrice: { type: Number, default: 0 },
        sellPrice: { type: Number, required: true },
        total: { type: Number },
      },
    ],
    subTotal: {
      type: Number,
      default: 0,
    },
    taxRate: {
      type: Number,
      default: 0,
    },
    taxAmount: {
      type: Number,
      default: 0,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["draft", "pending", "paid", "overdue", "accepted", "rejected"],
      default: "draft",
    },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Invoice", invoiceSchema);
