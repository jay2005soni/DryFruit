import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true, // only image is mandatory
  },
},
  {timestamps: true}
);

export default mongoose.model("Slider", sliderSchema);
