import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  priority: String,
  completed: { type: Boolean, default: false },
});

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
