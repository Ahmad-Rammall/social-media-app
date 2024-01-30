const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
        type: String,
        required:true
    },
    desc:{
        type: String,
        max: 500
    },
    content:{
        type: String,
    },
    likes:{
        type: Array,
        default: []
    },
    comments:{
        type: Array,
        default: []
    }
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);