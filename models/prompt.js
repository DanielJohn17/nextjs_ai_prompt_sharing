import { Schema, model, models } from "mongoose";

const promptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Creator is required."],
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "tag is required."],
  },
});

const Prompt = models.Prompt || model("Prompt", promptSchema);

export default Prompt;
